import {View, Image,Text} from 'react-native'
import { style } from './style'

export const Header = ()=>{
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image style={style.image} source={require('../../../../assets/vs_blue.png')}/>
                <Text style={style.text}>Điện thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>
        </View>
    )
}