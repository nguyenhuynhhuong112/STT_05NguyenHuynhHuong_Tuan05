import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import { useNavigation } from "@react-navigation/native";
export const Body = () => {
  const navigation = useNavigation();
  const [selectedColor, setSelectedColor] = useState('blue');
  const [imageSource, setImageSource] = useState(
    require("../../../../assets/vs_blue.png")
  );
  const handleButton1Press = () => {
    setImageSource(require("../../../../assets/vs_silver.png"));
    setSelectedColor('silver')
    console.log("image ", imageSource)
  };
  const handleButton2Press = () => {
    setImageSource(require("../../../../assets/vs_red.png"));
    setSelectedColor('red')
    console.log("image ", imageSource)
  };
  const handleButton3Press = () => {
    setImageSource(require("../../../../assets/vs_black.png"));
    setSelectedColor('black')
    console.log("image ", imageSource)
  };
  const handleButton4Press = () => {
    setImageSource(require("../../../../assets/vs_blue.png"));
    console.log("image ", imageSource)
  };
  const handleDoneButtonPress = () => {
    switch (selectedColor) {
      case 'silver':
        navigation.navigate('Screen05' as never);
        break;
      case 'red':
        navigation.navigate('Screen03' as never);
        break;
      case 'black':
        navigation.navigate('Screen04' as never);
        break;
      default:
        navigation.navigate('Screen01' as never);
        break;
    }
  };
  
  return (
    <View style={style.container}>
      <View style={style.headerImage}>
        <View style={style.header}>
          <Image style={style.image} source={imageSource} />
          <Text style={style.text}>
            Điện thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
        </View>
      </View>
      <View style={style.body}>
        <View>
          <Text style={style.text}>Chọn một màu bên dưới: </Text>
        </View>
        <View style={style.button}>
          <TouchableOpacity
            style={style.button1}
            onPress={handleButton1Press}
          ></TouchableOpacity>
          <View style={style.spacing}></View>
          <TouchableOpacity
            style={style.button2}
            onPress={handleButton2Press}
          ></TouchableOpacity>
          <View style={style.spacing}></View>
          <TouchableOpacity
            style={style.button3}
            onPress={handleButton3Press}
          ></TouchableOpacity>
          <View style={style.spacing}></View>
          <TouchableOpacity
            style={style.button4}
            onPress={handleButton4Press}
          ></TouchableOpacity>
        </View>
        <View style={style.spacing}></View>
        <View style={style.buttonFooter}>
          <TouchableOpacity style={style.btn} onPress={handleDoneButtonPress}>
            <Text style={style.textBtn}>xong</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
