import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
    StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity 
} from 'react-native';
import Task from './components/Task';

export default function App() {
    {/* task - name of the state */}
    {/* setTask - function that will be used to save state */}
    const [ task, setTask ] = useState();

    {/* taskItems - name of the state */}
    {/* setTaskItems - function that will be used to save state */}
    {/* useState([]) - declaring an array */} 
    const [ taskItems, setTaskItems ] = useState([]);

    const handleAddTask = () => {
        console.log(task);

        //...taskItems takes everything that was taskItems array
        //then we create a new array where we append the new 'task' to the end
        setTaskItems( [...taskItems, task] )
        setTask(null);
    }

    return (
        <View style={styles.container}>

            {/*Today's Tasks*/}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>

                {/*Task Items*/}
                <View style={styles.items}>
                    {/*This is where the indv tasks will go*/}

                    {/*.map calls callback function for each item in array*/}
                    {
                        taskItems.map((item, index) => {
                            return <Task key={index} text={item}/>
                        })
                    }

                    {/*<Task text={'Task 1'}/>
                    <Task text={'Task 2'}/>
                    <Task text={'Task 3'}/>
                    <Task text={'Task 4'}/>
                    <Task text={'Task 5'}/>*/}
                </View>

            </View>

            {/*Create new task*/}
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding": "height"}
                style={styles.writeTaskWrapper}>

                <TextInput style={styles.input} 
                    placeholder={'Write new task here'}
                    placeholderTextColor="#7c7c7c"
                    keyboardAppearance='dark'
                    value={task}
                    onChangeText={text => setTask(text)}/>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
        
            </KeyboardAvoidingView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    }, 
    sectionTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }, 
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: '#121212',
        backgroundColor:'rgba(18, 18, 18, 1)',
        marginVertical: 0,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#222222',
        borderRadius: 60,
        borderColor: '#121212',
        borderWidth: 2,
        width: 280,
        color: 'white',
    },
    addWrapper: {
        width: 55,
        height: 55,
        marginVertical: 5,
        backgroundColor: '#222222',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addText: {
        color: '#7c7c7c',
        fontSize: 30,
    }
});
