import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Modal, Platform, TouchableWithoutFeedback } from 'react-native';
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
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';

export default function Home() {

    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});

    async function handleShortLink(){
        setLoading(true);
        try {
            const response = await api.post('/shorten', {
                long_url: url
            });

            setData(response.data);
            setModalVisible(true);

            Keyboard.dismiss();
            setLoading(false);
            setUrl('');

        } catch (error) {
            alert('Ops parece que algo deu errado.');
            Keyboard.dismiss();
            setUrl('');
            setLoading(false);
        }
        
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient
                colors={[color.verdeCiano, color.azulCiano]}
                style={{flex:1, justifyContent: 'center'}}
            >
                <StatusBarPage
                    barStyle="light-content" 
                    backgroundColor={color.verdeCiano} 
                />

                <Menu/>

                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

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
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="url"
                                value={url}
                                onChangeText={setUrl}
                            />
                        </ContatinerInput>

                        <ButtonLink onPress={handleShortLink}>
                            {loading ? (
                                <ActivityIndicator color='#121212' size={24} />
                            ) : (
                                <ButtonLinkText>Gerar Link</ButtonLinkText>
                            )}
                        </ButtonLink>

                    </ContainerContent>

                </KeyboardAvoidingView>

                <Modal visible={modalVisible} transparent animationType='slide'>
                    <ModalLink onClose={()=> setModalVisible(false)} data={data}/>
                </Modal>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}
