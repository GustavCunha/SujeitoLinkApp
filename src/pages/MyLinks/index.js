import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import StatusBarPage from '../../components/StatusBarPage';

import { color } from '../../utils/colors';
import { deleteLink, getLinksSave } from '../../utils/storeLinks';

import { 
    Container,
    ContainerEmpty,
    ListLinks,
    Title, 
    WarningText
} from './styles';

export default function MyLinks() {
    const isFocused = useIsFocused();

    const [links, setLinks] = useState([]);
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function getLinks(){
            const result = await getLinksSave('@SujeitoLink:links');
            setLinks(result);
            setLoading(false);
        }

        getLinks();
    },[isFocused]);

    function handleItem(item){
        setData(item);
        setModalVisible(true);
    }

    async function handleDelete(id){
        const result = await deleteLink(links, id);
        setLinks(result);
    }

    return (
        <Container>
            <StatusBarPage
                barStyle="light-content" 
                backgroundColor={color.azulCiano} 
            />
            <Menu />

            <Title>Meus Links</Title> 

            {loading && (
                <ContainerEmpty>
                    <ActivityIndicator color={color.branco} size={25}/>
                </ContainerEmpty>
            )}

            {!loading && links.length === 0 && (
                <ContainerEmpty>
                    <WarningText>Você ainda não possui nenhum link 🙁 </WarningText>
                </ContainerEmpty>
            )}

            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={
                    ({item}) => 
                    <ListItem 
                        data={item} 
                        selectdItem={handleItem} 
                        deleteItem={handleDelete}
                    /> 
                }
                contentContainerStyle={{paddingBottom: 22}}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalLink onClose={() => setModalVisible(false)} data={data}/>
            </Modal>
        </Container>
    )
}