import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { ButtonMenu } from './styles';
import { color } from '../../utils/colors';

export default function Menu() {
    const navigation = useNavigation();

    return (
        <ButtonMenu onPress={() => navigation.openDrawer()}>
            <Feather
                name="menu"
                size={40}
                color={color.branco}
            />
        </ButtonMenu>

    )
}
