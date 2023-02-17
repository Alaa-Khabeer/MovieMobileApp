import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Text, View,Image } from "react-native"
import MovieCard from "./moviecard"

export default function Details({navigation,route}) {
    const ID = route.params.id
    const [movieData, setMovieData] = useState([])
    useEffect(() => {
     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1")
     .then((movies)=>setMovieData(movies.data.results))
     .catch((err)=>console.log(err))
    },[])
    
    return(
    <View>
    {movieData.map((data)=>{
        if(data.id == ID){
            return(
                <View  key={data.id}>
                <MovieCard Id={data.id} img={data.poster_path}/>
                <Text style={{fontSize:20, fontWeight:"bold",marginTop:15,marginLeft:30}}>{data.title}</Text>
                <Text style={{fontSize:14,marginHorizontal:30}}>{data.overview}</Text>
                <Text style={{marginTop:10}}><Text style={{fontWeight:"bold",marginLeft:30}}>Vote: </Text>{data.vote_average}</Text>
                <Text><Text style={{fontWeight:"bold",marginLeft:30}}>Released date: </Text>{data.release_date}</Text> 
                </View>
             )
        }
       })}
    </View>
    
    )
}