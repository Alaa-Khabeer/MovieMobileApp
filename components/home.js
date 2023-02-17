import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./moviecard";
import { StyleSheet, ScrollView, View,TouchableOpacity } from 'react-native';
import {Button } from "react-native-elements";
import {save} from "./Store/action";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Home({navigation}) {
    const [movieData, setMovieData] = useState([])
    useEffect(() => {
     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1")
     .then((movies)=>setMovieData(movies.data.results))
     .catch((err)=>console.log(err))
    },[])

    let flag=false
    let favAdd = useSelector((state)=>state.added)
    const dispatchAdd = useDispatch()
    const changeAdd = (M)=>{
      for(let i of favAdd){
        flag=false
        if(i === M.id){
          flag=true
          favAdd.splice(favAdd.indexOf(i),1)
        }
        
      }
      
      if(flag === false){
      favAdd.push(M.id)
      dispatchAdd(save(favAdd))
      }
      console.log(favAdd)
    }
    return(
        <ScrollView>
        <View style={styles.container}>
        {movieData.map((data)=>{
         return(
            <View  key={data.id}>
            <MovieCard Id={data.id} img={data.poster_path} title={data.title} vote={data.vote_average}/>
            <View style={{flexDirection:'row'}}>
            <Button onPress={() => navigation.navigate('Details',{id:data.id})} title="Read More" buttonStyle={styles.Btn}/>
            
            <TouchableOpacity onPress={()=>changeAdd(data)} style={{marginTop:35,marginLeft:20}}>
            <Icon name="heart" size={26} color="#f00"/>
            </TouchableOpacity>
            </View>
            </View>
         )
        })}
        </View>
         </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Btn: {
        borderRadius: 10,
        height: 45,
        marginTop: 25,
        marginLeft:40,
        marginBottom:10,
        width: 120,
        textAlign:'center',
        backgroundColor:"#000"
      },
  });