import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const iconRendering = (icon, color) => {
    if (icon == 'camera') {
        return <Entypo name='camera' size={44} color={ color ? color : '#f1f1f1'} />        
    } else if (icon == 'retake') {
        return <Ionicons name="reload-circle" size={44} color={ color ? color : '#f1f1f1'} />    
    } else if (icon == 'save') {
        return <AntDesign name="checkcircle" size={34} color={ color ? color : '#f1f1f1'} /> 
    } else if (icon == 'flash') {
        return <Ionicons name="flash" size={32} color={ color ? color : '#f1f1f1'} />    
    } else if (icon == 'flash-off') {
        return <Ionicons name="flash-off" size={32} color={ color ? color : '#f1f1f1'} />    
    } else {
        return <View><Text>icon</Text></View>
    }
};

export default function Button({title, onPress, icon, color}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {iconRendering(icon, color)}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#f1f1f1',
        marginLeft: 10,
    }
})
