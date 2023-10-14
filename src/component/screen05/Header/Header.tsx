import { View, Image } from "react-native";
import {style} from './style'
export const Header = () => {
    return (
        <View>
            <Image style={style.tinyLogo} source={require('../../../../assets/vs_silver.png')}/>
        </View>
    )
};
