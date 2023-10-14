import { View } from "react-native";
import { Header } from "./Header/Header";
import { styles } from "./style";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";

export const LayoutScreen4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <Body />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};
