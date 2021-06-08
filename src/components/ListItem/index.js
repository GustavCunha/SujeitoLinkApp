import React from 'react';
import { View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { color } from '../../utils/colors';

import { 
    ActionContainer,
    ContainerButton, 
    Item 
} from './styles';

export default function ListItem({data, selectdItem, deleteItem}) {

    function RightActions(){
        return(
            <ActionContainer onPress={() => deleteItem(data.id)}>
                <Feather name="trash" size={24} color={color.branco} />
            </ActionContainer>
        )       
    }

    return (
        <View>
            <Swipeable renderRightActions={RightActions}>
                <ContainerButton onPress={() => selectdItem(data)}>
                    <Feather name='link' size={24} color={color.branco}/>
                    <Item numberOfLines={1}>{data.long_url}</Item>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}
