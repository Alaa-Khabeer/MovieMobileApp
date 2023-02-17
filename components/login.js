import React from "react";

import styles from "./style";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";

export default function Login() {
    const [username,  setUserName]= React.useState("");
    const [Uerr, setUErr] = React.useState("");

    const [password, setPassword] = React.useState("");
    const [Perr, setPErr] = React.useState("");
    const [verifyuser, setVerifyuser] = React.useState(false);
    const [verifypass, setVerifypass] = React.useState(false);
    const [Data, setData] = React.useState({user:null,pass:null});
    
    const GetData = async ()=>{
      try{
         let data1 = await localStorage.getItem("Username")
         let data2 = await localStorage.getItem("Password")
        if(data1!==null & data2!==null){
         setData({user:data1,pass:data2})
        }
      }catch(error){
         console.log(error)
      }
   }

    const onLogin = () => {
      GetData()
      if(username.length == 0){
            setUErr("Username is required")
         }else if(username.length < 3){
            setUErr("Minimum length is 3 characters")
         }else if(username !== Data.user){
            setUErr("Username is not registered")
           }else{
            setUErr("")
            setVerifyuser(true)
        }

        if(password.length == 0){
            setPErr("Password is required")
         }else if(password.length < 9){
            setPErr("Minimum length is 9 characters")
         }else if(password !== Data.pass){
          setPErr("Wrong password for this user")
         }else{
            setPErr("")
            setVerifypass(true)
        }
        if(verifyuser & verifypass){
         localStorage.setItem("isLoggedIn", true)
        }
       
     };

  return (
        <View style={styles.logContainer}>
          <View style={styles.logView}>
            
            <Text style={styles.logoText}>Movie Login</Text>
           
            <TextInput placeholder="Username" 
            placeholderColor="#c4c3cb" 
            style={styles.logTextInput} 
            onChangeText={username => setUserName(username)}/>
            
            <Text style={styles.err}>{Uerr}</Text>
            
            <TextInput placeholder="Password" 
            placeholderColor="#c4c3cb" 
            style={styles.logTextInput}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}/>
            
            <Text style={styles.err}>{Perr}</Text>
            
            <Button buttonStyle={styles.logBtn} 
            onPress={() => onLogin()} 
            title="Login" />
          
          </View>
        </View>
  );
}