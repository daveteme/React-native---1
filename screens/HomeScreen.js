import { Text, View, SafeAreaView } from 'react-native';

function HomeScreen() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0'
            }}>
                <Text style={{
                    fontSize: 24,
                    color: 'black'
                }}>
                    This is a great day
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;