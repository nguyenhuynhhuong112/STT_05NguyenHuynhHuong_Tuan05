import {View, TouchableOpacity,Text} from 'react-native'
import { styles } from './style'

export const Footer = ()=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>chọn mua</Text>
            </TouchableOpacity>
        </View>
    )
}