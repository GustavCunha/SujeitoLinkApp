import React from 'react';
import { Text } from 'react-native';
import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import { color } from '../../utils/colors';
import { 
    Container,
    ListLinks,
    Title 
} from './styles';

export default function MyLinks() {
    return (
        <Container>
            <StatusBarPage
                barStyle="light-content" 
                backgroundColor={color.azulCiano} 
            />
            <Menu />

            <Title>Meus Links</Title> 

            <ListLinks
                data={[ {id: 1, link: 'test.com'} ]}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ListItem /> }
                contentContainerStyle={{paddingBottom: 22}}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}