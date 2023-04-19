import React from 'react';

import {View, StyleSheet, Image} from 'react-native';

const CustomerLogo = props => {
    return (
        <View>
        <Image style={styles.profleLogo} source={require("../assets/customerLogo.png")} />
        </View>
    )
};

const styles = StyleSheet.create({
    profleLogo: {
        marginTop: '10%',
        marginBottom: "10%",
        width: 20,
        height: 20,
        backgroundColor: '#1988da',
    },
});

export default CustomerLogo;