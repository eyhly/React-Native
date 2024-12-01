import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login ({navigation}){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const navigation = useNavigation();

  const handleLogin = async () => {
    // Validasi username dan password
    if (username === 'helya' && password === '1956') {
        await AsyncStorage.setItem('userToken', 'dummy-token');
      navigation.navigate('Home', {username});
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <ImageBackground
                source={require('./assets/hexa.jpeg')}
                style={{ width: '100%', height: '100%' }}
            >
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{  alignItems: 'center', justifyContent: 'center',         backgroundColor: 'rgba(45, 133, 200, 0.4)',padding: 8, borderRadius: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Login</Text>

      <TextInput
        style={{ width: 200, margin: 20, padding: 3, backgroundColor:'rgba(45, 133, 152, 0.6)', borderRadius: 5}}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={{ width: 200, margin: 20, padding: 3, backgroundColor:'rgba(45, 133, 152, 0.6)', borderRadius: 5}}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin}/>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

