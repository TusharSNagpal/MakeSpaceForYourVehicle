import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput , Text, Alert, FlatList, Item, View, Box, BackHandler, ScrollView} from "react-native";
import * as variables from "../allVariables.js";


const OwnerProperties = () => {
    const[properties, setProperties] = useState([])
    const[propAdd, setPropAdd] = useState(false)
    const[address, setAddress] = useState('')
    const[slots, setSlots] = useState(0)
    const[refresh, setRefresh] = useState(false)

    const handle = () => {
        if(refresh) setRefresh(false);
        else setRefresh(true)
    }

    const propFormHandler = () => {
        setPropAdd(true);
        handle()
    }

    const addProperty = () => {
        const owner_id = '643bf3dac7f7da9b8082b64c'
        const prop_address = address
        const payload = {
            owner_id,
            prop_address,
            slots
        };
        fetch(`${variables.API_PROP}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(async res => { 
            const jsonRes = await res.json();
            if (res.status == 201 || res.status == 200) {
                const mess = 'Property added successfully!!'
                Alert.alert('Owner', mess, [
                    {text: 'OK'},
                ]);
                setPropAdd(false)
                setAddress('')
                setSlots(0)
                handle();
                
            } else {
                Alert.alert('Owner', jsonRes.message, [
                    {text: 'OK'},
                ]);
                console.log('called')
            }
            console.log(res.status)
        })
    }

    useEffect(() => {
        loadProperties();
      }, [refresh])
    
    const loadProperties = async() => {
        const id = '643bf3dac7f7da9b8082b64c'
        const resp = await fetch(`${variables.API_PROP}/get/${id}`);
        const data = await resp.json();
        setProperties(data);
        console.log(data)
    }

    const deleteProperty = (_id) => {
        console.log(_id)
        const payload = {
            _id
        };
        fetch(`${variables.API_PROP_DELETE}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(async res => { 
            const jsonRes = await res.json();
            if (res.status == 201 || res.status == 200) {
                const mess = 'Property deleted successfully!!'
                Alert.alert('Owner', mess, [
                    {text: 'OK'},
                ]);
                handle();
            } else {
                Alert.alert('Owner', jsonRes.message, [
                    {text: 'OK'},
                ]);
                console.log('called')
            }
            console.log(res.status)
        })
    }

    return (
        <View style = {styles.whole}>
            <View style = {{marginTop: 10}}><Button title={"Add property"} onPress={propFormHandler}/></View>
            {propAdd && 
            <View>
                <TextInput
                    style={styles.input}
                    value={address}
                    placeholder={"Address"}
                    onChangeText={(text) => setAddress(text)}
                />
                <TextInput
                    style={styles.input}
                    value={slots}
                    placeholder={"Slots"}
                    onChangeText={(text) => setSlots(text)}
                />
                <Button title={"Add"} onPress={addProperty}/>
            </View>
            }

            <View style = {styles.container}>
                    <Text>Address</Text>
                    <Text>Slots</Text>
                    <Text>Delete</Text>
                </View>
                <FlatList
                    data = {properties}
                    renderItem = {itemData => (
                    <View style = {styles.propContainer}>
                        <Text>{itemData.item.prop_address}</Text>
                        <Text>{itemData.item.slots}</Text>
                        <Button title="-" onPress={deleteProperty.bind(this, itemData.item._id)}/>
                    </View>
                    )}
                />
        </View>
    );
}
const styles = StyleSheet.create({
    propContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        width: 300,
        borderWidth: 2,
        borderRadius: 10,
        margin: 3,
        backgroundColor: 'lightgrey'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        width: 300,
        marginTop: 4,
        marginBottom: 3
    },
    input: {
        margin: '5%',
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: 250,
      },
    whole: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default OwnerProperties;
