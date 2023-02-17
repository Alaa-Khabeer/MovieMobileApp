import React from "react";
import styles from "./style";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";

export default function SignUp({navigation}) {

    const [username,  setUserName]= React.useState("");
    const [Uerr, setUErr] = React.useState("");
    
    const [password, setPassword] = React.useState("");
    const [Perr, setPErr] = React.useState("");
    
    const [email, setEmail] = React.useState("");
    const [Eerr, setEErr] = React.useState("");
    
    const [confirm, setConfirm] = React.useState("");
    const [Cerr, setCErr] = React.useState("");
   
    const emailRegex = /\S+@\S+\.\S+/;
    const userNameRegex = /^[^ ]+$/;
    const passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{9,}/;

    const onLogin = () => {
        if(username.length == 0){
            setUErr("Username is required")
         }else if(username.length < 3){
            setUErr("Minimum length is 3 characters")
         }
         else if(!userNameRegex.test(username)){
            setUErr("It mustn't contain white spaces")
         }
         else{
            setUErr("")
            localStorage.setItem("Username", username)
        }

        if(password.length == 0){
            setPErr("Password is required")
         }
         else if(!passRegex.test(password)){
            setPErr("Password length must be more than 8 characters, contains at least one lowercase, one uppercase, one digit and special character.")
         }else{
            setPErr("")
        }

        if(confirm.length == 0){
            setCErr("Confirm Password is required")
         }else if(confirm !== password){
            setCErr("It must match the password")
         }
         else{
            setCErr("")
            localStorage.setItem("Password", password)
        }

        if(email.length == 0){
            setEErr("Email is required")
         }else if(!emailRegex.test(email)){
            setEErr("It isn't an email formate")
         }
         else{
            setEErr("")
            localStorage.setItem("Email", email)
        }
    };

  return (
        <View style={styles.logContainer}>
          <View style={styles.logView}>
            
            <Text style={styles.logoText}>Movie Sign Up</Text>
           
            <TextInput placeholder="Username" 
            placeholderColor="#c4c3cb" 
            style={styles.logTextInput} 
            onChangeText={username => setUserName(username)}/>
            <Text style={styles.err}>{Uerr}</Text>
            
            <TextInput placeholder="Email" 
            placeholderColor="#c4c3cb" 
            style={styles.logTextInput} 
            onChangeText={email => setEmail(email)}/>
            <Text style={styles.err}>{Eerr}</Text>
            
            <TextInput placeholder="Password" 
            placeholderColor="#c4c3cb" 
            style={styles.logTextInput}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}/>
            <Text style={styles.err}>{Perr}</Text>
            
            <TextInput placeholder="Confirm Password" 
            placeholderColor="#c4c3cb" 
            style={styles.logTextInput}
            secureTextEntry={true}
            onChangeText={confirm => setConfirm(confirm)}/>
            <Text style={styles.err}>{Cerr}</Text>

            <Button buttonStyle={styles.logBtn} 
            onPress={() => onLogin()} 
            title="Sign up" />
          </View>
        </View>
  );
}