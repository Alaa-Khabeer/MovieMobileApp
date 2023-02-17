import axios from "axios"
import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { Button } from "react-native-elements"
import { useSelector } from "react-redux"
import MovieCard from "./moviecard"

export default function Favourate({navigation}) {
const [movieData, setMovieData] = useState([])
useEffect(() => {
 axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1")
 .then((movies)=>setMovieData(movies.data.results))
 .catch((err)=>console.log(err))
},[favList])

const favList = useSelector((state)=>state.added)
return(
    <ScrollView>
    <View style={styles.container}>
    {movieData.map((data)=>{
        for(let i of favList){
            if(data.id===i){
     return(
        <View  key={data.id}>
        <MovieCard Id={data.id} img={data.poster_path} title={data.title} vote={data.vote_average}/>
        </View>
     )
        }
    }
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