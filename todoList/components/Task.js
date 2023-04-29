import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/*<TouchableOpacity style={styles.square}></TouchableOpacity>*/}
                <View style={styles.square}>
                   <Text style={styles.check}>✓</Text> 
                </View>

                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circular}>
                <Text>🗑️</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#222222',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    }, 
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    }, 
    square: {
        width: 24, 
        height: 24,
        backgroundColor: '#006969',
        //opacity: 0.4,

        borderRadius: 5,
        marginRight: 15,

        justifyContent: 'center', 
        alignItems: 'center',
    },
    check: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemText: {
        color: 'white',
        maxWidth: '80%',
    }, 
    circular: {
        //width: 12,
        //height: 12, 
        //borderColor: 'white',
        //borderWidth: 2,
        //borderRadius: 5,
    }, 
});

export default Task;
