import { useState } from 'react';
import { CAMPSITES }  from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';
import { SafeAreaView } from 'react-native';

function Main() {
    const [campsites, setCampsites] = useState(CAMPSITES);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}} >
            <DirectoryScreen campsites={campsites} />
        </SafeAreaView>
    )  
}

export default Main;

