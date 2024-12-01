import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('isLoggedIn');
        navigation.replace('Login');
    };
    const route = useRoute();
    const [username, setUsername] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        if (route.params?.username) {
            setUsername(route.params.username);
        }
    }, [route.params?.username]);

    return (
        <ImageBackground
            source={require('./assets/hexa.jpeg')}
            style={{ width: '100%', height: '100%' }}
        >
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20, borderRadius: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Welcome {username}</Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Selamat Datang di Web Movie List!</Text>
                    <Button
                        title='Go To List Movie'
                        onPress={() => navigation.navigate('List')}
                    />
                    <Image source={require('./assets/giphy.webp')} style={{ maxWidth: 500, marginBottom: 25 }} />
                    <Button title="Logout" onPress={handleLogout}/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;
