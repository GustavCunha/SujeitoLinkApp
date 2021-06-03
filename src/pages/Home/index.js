import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Feather} from '@expo/vector-icons';

import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';

import { color } from '../../utils/colors';

import { 
    BoxIcon,
    ButtonLink,
    ButtonLinkText,
    ContainerContent,
    ContainerLogo, 
    ContatinerInput, 
    Input,
    Logo,
    SubTitle,
    Title, 
} from './styles';

export default function Home() {
    return (
        <LinearGradient
            colors={[color.verdeCiano, color.azulCiano]}
            style={{flex:1, justifyContent: 'center'}}
        >
            <StatusBarPage
                barStyle="light-content" 
                backgroundColor={color.verdeCiano} 
            />

            <Menu/>

            <ContainerLogo>
                <Logo source={require('../../images/Logo.png')} resizeMode="contain"/>
            </ContainerLogo>

            <ContainerContent>
                <Title>SujeitoLink</Title>
                <SubTitle>Cole seu link para encurtar</SubTitle>

                <ContatinerInput>
                    <BoxIcon>
                        <Feather name="link" size={22} color={color.branco}/>
                    </BoxIcon>
                    <Input 
                        placeholder="Cole seu link aqui..."
                        placeholderTextColor="white"
                    />
                </ContatinerInput>

                <ButtonLink>
                    <ButtonLinkText>Gerar Link</ButtonLinkText>
                </ButtonLink>
            </ContainerContent>
        </LinearGradient>
    )
}
