import { Image, Text, View, TouchableOpacity } from "react-native";
import { style } from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
export const Body = () => {
  const navigation = useNavigation();
  const handleColorSelection= ()=>{
    navigation.navigate('Screen02' as never )
  }
  return (
    <View style={style.container}>
      <View>
        <Text style={style.textTittle}>
          Điện thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={style.icon}>
        <Image
          style={style.star}
          source={require("../../../../assets/star.png")}
        />
        <Image
          style={style.star}
          source={require("../../../../assets/star.png")}
        />
        <Image
          style={style.star}
          source={require("../../../../assets/star.png")}
        />
        <Image
          style={style.star}
          source={require("../../../../assets/star.png")}
        />
        <Image
          style={style.star}
          source={require("../../../../assets/star.png")}
        />
        <Text style={style.text}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={style.price}>
        <Text style={style.textPrice}>1.790.000 đ</Text>
        <Text style={style.textPriceLine}>1.790.000 đ</Text>
      </View>
      <View style={style.caption}>
        <Text style={style.textCaption}>ở đâu rẻ hơn hoàn tiền</Text>
        <AntDesign name="questioncircleo" size={17} />
      </View>
      <View style={style.button}>
        <TouchableOpacity onPress={handleColorSelection}>
          <Text style={style.textBtn}>4 màu - chọn màu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
