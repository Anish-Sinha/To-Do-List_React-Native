import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    {/* checkStatus: true - task completed; false - task incomplete */}
    {/* updateCheckStatus: function to update task completion status */}
    const [checkStatus, updateCheckStatus] = useState(false);

    {/* function to toggle check mark on task */}
    const toggleCheckTask = () => {
        console.log("he touched the square: " + checkStatus);
        checkStatus ? updateCheckStatus(false) : updateCheckStatus(true);
        console.log("updated completion status: " + checkStatus);
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/*<TouchableOpacity style={styles.square}></TouchableOpacity>*/}
                <TouchableOpacity onPress={() => toggleCheckTask()}>
                    <View style={styles.square}>
                        { checkStatus && <Text style={styles.check}>✓</Text> }
                    </View>
                </TouchableOpacity>

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
