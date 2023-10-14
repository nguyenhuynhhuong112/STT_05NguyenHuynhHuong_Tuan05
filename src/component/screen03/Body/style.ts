import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingBottom: 5,
    flexDirection: "row",
  },
  star: {
    width: 20,
    height: 20,
  },
  textTittle: {
    flexDirection: "row",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 15,
    paddingBottom: 5,
  },
  text: {
    flexDirection: "row",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 15,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  textPriceLine: {
    textDecorationLine: "line-through",
    color: "rgba(0, 0, 0, 0.58)",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  textPrice: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 18,
    paddingRight: 22,
  },
  price: {
    flexDirection: "row",
  },
  caption: {
    flexDirection: "row",
    paddingTop:10,
    paddingBottom:10
  },
  textCaption: {
    textTransform: "uppercase",
    color: "background: rgba(250, 0, 0, 1)",
    fontFamily:'Roboto',
    fontSize:12,
    fontWeight:'700',
    paddingRight:10
  },
  button:{
    borderColor:'rgba(0, 0, 0, 0.46)',
    borderWidth:1,
    borderRadius:23,
    height:30,
    justifyContent: 'center',
    alignItems:'center',
  },
  textBtn:{
    color:'background: rgba(0, 0, 0, 1)',
    fontFamily:'Roboto',
    fontWeight:'400',
    fontSize:15,
    textTransform:'uppercase'
  }
});
