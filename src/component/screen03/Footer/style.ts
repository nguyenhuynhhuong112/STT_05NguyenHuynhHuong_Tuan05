import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems:'center',
    width:260,
    height:30,
    borderRadius:10,
    backgroundColor:'rgba(238, 10, 10, 1)'
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 20,
    color: "background: rgba(249, 242, 242, 1)",
    textTransform:'uppercase'
  },
});
