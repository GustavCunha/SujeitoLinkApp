import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os links salvos..
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;

}

// Salvar um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    // Se tiver algum link salvo com esse mesmo Id / ou duplicado preciso ignorar.
    const hasLink = linksStored.some(Link => Link.id === newLink.id);

    if(hasLink){
        console.log('Esse Link já existe na lista!');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso!');
}

// Deletar algum link
export async function deleteLink(links, id){
    let myLinks = links.filter( (item) => {
        return (item.id !== id);
    });

    await AsyncStorage.setItem('@SujeitoLink:links', JSON.stringify(myLinks));
    console.log('Link deletado do storage!');

    return myLinks;
}