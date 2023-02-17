import { Card, Title,Button } from 'react-native-paper'
import { StyleSheet } from "react-native";

export default function MovieCard(props) {
 
  return(
      <Card style={styles.container}>
        <Card.Cover  source={{uri:`https://image.tmdb.org/t/p/w500/${props.img}`}} style={{height:500, width:300}} />
      </Card>
        
  )
}


const styles = StyleSheet.create({
    container :{
        alignContent:'center',
        marginHorizontal:35,
        marginTop:40,
        width:300,
        height:500
    }
  });