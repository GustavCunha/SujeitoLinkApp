import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { color } from '../../utils/colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${color.azulCiano};
`;

export const Title = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
    margin-left: 20px;
    font-size: 33px;
    font-weight: bold;
    color: ${color.branco};
`;

export const ListLinks = styled.FlatList``;

export const ContainerEmpty = styled.View`
    margin-top: 15%;
    align-items: center;
`;

export const WarningText = styled.Text`
    font-size: 17px;
    color: ${color.branco};
`;