import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import Task from './components/Task';

export default function App() {
    return (
        <View style={styles.container}>

            {/*Today's Tasks*/}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>

                {/*Task Items*/}
                <View style={styles.items}>
                    {/*This is where the indv tasks will go*/}
                    <Task text={'Task 1'}/>
                    <Task text={'Task 2'}/>
                    <Task text={'Task 3'}/>
                    <Task text={'Task 4'}/>
                    <Task text={'Task 5'}/>
                </View>

            </View>

            {/*Create new task*/}
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding": "height"}
                style={styles.writeTaskWrapper}>

                <TextInput style={styles.input} 
                    placeholder={'Write new task here'}
                    placeholderTextColor="#7c7c7c"
                    keyboardAppearance='dark'/>

                <TouchableOpacity>
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
