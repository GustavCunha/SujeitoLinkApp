import styled from 'styled-components/native';
import { color } from '../../utils/colors';

export const ContainerButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.9
})`
    flex-direction: row;
    background-color: rgba(255,255,255,0.21);
    margin: 7px 15px;
    padding: 12px;
    border-radius: 7px;
`;

export const Item = styled.Text`
    color: ${color.branco};
    padding-left: 10px;
    padding-right: 20px;
    font-size: 18px;
`;