const React = require("react-native");
const { StyleSheet } = React;

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    marginHorizontal:50
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 80,
    marginBottom: 40,
    textAlign: "center",
  },
  logView: {
    flex: 1,
  },
  logTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  logBtn: {
    backgroundColor: "#000",
    borderRadius: 5,
    height: 45,
    marginTop: 25,
    width: 300,
    alignItems: "center",
    textAlign:'center'
  },
  err:{
    color:'#A91B0D',
    marginBottom:10,
  },
});

export default styles;