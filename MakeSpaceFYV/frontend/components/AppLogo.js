import React from 'react';

import {View, StyleSheet, Image} from 'react-native';

const AppLogo = props => {
    return (
        <View>
        <Image style={styles.profleLogo} source={require("../assets/car.png")} />
        </View>
    )
};

const styles = StyleSheet.create({
    profleLogo: {
        marginTop: '40%',
        // marginBottom: "10%",
        position: 'relative',
        // borderRadius: 20,
        // right: 0,
        width: 40,
        height: 40,
        backgroundColor: '#1988da',
    },
});

export default AppLogo;