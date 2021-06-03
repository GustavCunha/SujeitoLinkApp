import React from 'react';
import { View, Text } from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';
import { color } from '../../utils/colors';

export default function MyLinks() {
    return (
        <View>
            <StatusBarPage
                barStyle="light-content" 
                backgroundColor={color.azulCiano} 
            />
        </View>
    )
}