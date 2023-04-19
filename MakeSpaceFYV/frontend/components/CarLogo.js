import React from 'react';

import {View, StyleSheet, Image} from 'react-native';

const CarLogo = props => {
    return (
        <View>
        <Image style={styles.profleLogo} source={require("../assets/car.png")} />
        </View>
    )
};

const styles = StyleSheet.create({
    profleLogo: {
        marginTop: '22%',
        marginBottom: "10%",
        position: 'relative',
        borderRadius: 20,
        // right: 0,
        marginLeft: '23%',
        width: 100,
        height: 30,
        backgroundColor: '#1988da',
    },
});

export default CarLogo;