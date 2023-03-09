import React from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Platform } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login()
{
    return(
        <KeyboardAvoidingView behavior = {Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Image source={require('../assets/img/logomarca.png')}/>
            </View>

            <View style={css.login__form}>
                <TextInput placeholder='Usuario:' />
                <TextInput placeholder='Senha:' secureTextEntry={true} />
                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

//