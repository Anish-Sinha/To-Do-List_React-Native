import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>

        {/*Today's Tasks*/}
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's Tasks</Text>

            {/*Task Items*/}
            <View style={styles.items}>
                {/*This is where the indv tasks will go*/}
            </View>

        </View>

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
    items: {},
});
