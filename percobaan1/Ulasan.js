import * as React from 'react'
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

const movies1 = [
    {
        id: '1',
        title: 'Kotohana No Niwa',
        image: require('./assets/kotohana.jpeg'),
        chara: [
            { name: 'Yukari Yukino', va: 'Kana Hanazawa' },
            { name: 'Takao Akizuki', va: 'Miyu Irino' },
            { name: 'Matsumoto', va: 'Suguru Inoue' }
        ],
    },
    {
        id: '2',
        title: 'Kimi No Nawa',
        image: require('./assets/kiminonawa.jpeg'),
        chara: [
            { name: 'Mitsuha Miyamizu', va: 'Mone Kamishiraishi' },
            { name: 'Taki Tachibana', va: 'Ryunosuke Kamaitachi' },
            { name: 'Yotsuha Miyamizu', va: 'Kanon Tani' },
            { name: 'Miki Okudera', va: 'Laura Post' },
        ],
    },
    {
        id: '3',
        title: 'Tenki No Ko',
        image: require('./assets/tenkinoko.jpeg'),
        chara: [
            { name: 'Amano Hina', va: 'Nana Mori' },
            { name: 'Hodaka Morishima', va: 'Kotaro Daigo' },
            { name: 'Natsumi Suga', va: 'Alison Brie' },
            { name: 'Amano Nagi', va: 'Sakura Kiryu' },
        ],
    },
    {
        id: '4',
        title: 'Suzume No Tojimari',
        image: require('./assets/suzume.jpeg'),
        chara: [
            { name: 'Amano Hina', va: 'Nana Mori' },
            { name: 'Hodaka Morishima', va: 'Kotaro Daigo' },
            { name: 'Natsumi Suga', va: 'Alison Brie' },
            { name: 'Amano Nagi', va: 'Sakura Kiryu' },
        ],
    },
];
const movies2 = [
    {
        id: '1',
        title: 'Tonari No Totoro',
        image: require('./assets/totoro.jpeg'),
        chara: [
            { name: 'Yukari Yukino', va: 'Kana Hanazawa' },
            { name: 'Takao Akizuki', va: 'Miyu Irino' },
            { name: 'Matsumoto', va: 'Suguru Inoue' }
        ],
    },
    {
        id: '2',
        title: 'Arrietty',
        image: require('./assets/arrietty.jpeg'),
        chara: [
            { name: 'Mitsuha Miyamizu', va: 'Mone Kamishiraishi' },
            { name: 'Taki Tachibana', va: 'Ryunosuke Kamaitachi' },
            { name: 'Yotsuha Miyamizu', va: 'Kanon Tani' },
            { name: 'Miki Okudera', va: 'Laura Post' },
        ],
    },
    {
        id: '3',
        title: 'Kaze No Tachinu',
        image: require('./assets/kaze.jpeg'),
        chara: [
            { name: 'Amano Hina', va: 'Nana Mori' },
            { name: 'Hodaka Morishima', va: 'Kotaro Daigo' },
            { name: 'Natsumi Suga', va: 'Alison Brie' },
            { name: 'Amano Nagi', va: 'Sakura Kiryu' },
        ],
    },
    {
        id: '4',
        title: 'Howls Moving Castle',
        image: require('./assets/howls.jpeg'),
        chara: [
            { name: 'Amano Hina', va: 'Nana Mori' },
            { name: 'Hodaka Morishima', va: 'Kotaro Daigo' },
            { name: 'Natsumi Suga', va: 'Alison Brie' },
            { name: 'Amano Nagi', va: 'Sakura Kiryu' },
        ],
    },
];
const movies3 = [
    {
        id: '1',
        title: 'Koe No Katachi',
        image: require('./assets/koe.jpeg'),
        chara: [
            { name: 'Yukari Yukino', va: 'Kana Hanazawa' },
            { name: 'Takao Akizuki', va: 'Miyu Irino' },
            { name: 'Matsumoto', va: 'Suguru Inoue' }
        ],
    },
    {
        id: '2',
        title: 'Violet Evergarden',
        image: require('./assets/violet.jpeg'),
        chara: [
            { name: 'Mitsuha Miyamizu', va: 'Mone Kamishiraishi' },
            { name: 'Taki Tachibana', va: 'Ryunosuke Kamaitachi' },
            { name: 'Yotsuha Miyamizu', va: 'Kanon Tani' },
            { name: 'Miki Okudera', va: 'Laura Post' },
        ],
    },
    {
        id: '3',
        title: 'Tamako Market',
        image: require('./assets/tamako.jpeg'),
        chara: [
            { name: 'Amano Hina', va: 'Nana Mori' },
            { name: 'Hodaka Morishima', va: 'Kotaro Daigo' },
            { name: 'Natsumi Suga', va: 'Alison Brie' },
            { name: 'Amano Nagi', va: 'Sakura Kiryu' },
        ],
    },
    {
        id: '4',
        title: 'Hyouka',
        image: require('./assets/Hyouka.jpeg'),
        chara: [
            { name: 'Amano Hina', va: 'Nana Mori' },
            { name: 'Hodaka Morishima', va: 'Kotaro Daigo' },
            { name: 'Natsumi Suga', va: 'Alison Brie' },
            { name: 'Amano Nagi', va: 'Sakura Kiryu' },
        ],
    },
];

const Ulasan = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            // onPress={() => navigation.navigate('Characters', { characters: item.chara })}
        >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('./assets/hexa.jpeg')}
                style={styles.background}
            >
                <ScrollView>
                    <Text style={styles.header}>Makoto Shinkai</Text>
                    <FlatList
                        data={movies1}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                    />
                    <Text style={styles.header}>Studio Ghibli</Text>
                    <FlatList
                        data={movies2}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                    />
                    <Text style={styles.header}>Kyoto Animation</Text>
                    <FlatList
                        data={movies3}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                    />
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf7fc',
        paddingTop: 5,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5,
        marginLeft: 15,
        marginTop: 5,
        color: '#d7d3e3',

    },
    listContainer: {
        paddingLeft: 10,
        margin: 15,
    },
    item: {
        backgroundColor: 'rgba(45, 133, 200, 0.2)',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#fff',
        width: 130,
        height: 230,   
        shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,     
    },
    image: {
        width: 100,
        height: 150,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#d7d3e3',
    },
});

export default Ulasan;