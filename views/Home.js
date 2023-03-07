import React from 'react';
import { Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native';
import { css } from '../assets/css/Css';

export default function Home({navigation})
{
    
    return(
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/img/buttonLogin1.png')}/>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Rastreio')}>
                <Image source={require('../assets/img/buttonRastreio.png')}/>
            </TouchableOpacity>
        </View>
    );
}