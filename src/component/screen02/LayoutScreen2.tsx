import { View } from "react-native";
import { Header } from "./Header/Header";
import { style } from "./style";
import { Body } from "./Body/Body";

export const LayoutScreen2 = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <Body />
      </View>
    </View>
  );
};
