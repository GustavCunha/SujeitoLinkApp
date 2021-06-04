import React from 'react';
import { View, Text } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { ContainerButton, Item } from './styles';
import { color } from '../../utils/colors';

export default function ListItem() {
    return (
        <View>
            <ContainerButton onPress={()=>{}}>
                <Feather name='link' size={24} color={color.branco}/>
                <Item numberOfLines={1}>https://youtube.com</Item>
            </ContainerButton>
        </View>
    )
}
