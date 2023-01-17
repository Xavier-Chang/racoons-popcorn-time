import { useState } from "react"
import moviesFromJson from "../data/movies.json"
import "./Main.css"

export default function Main() {
    
    //array can hold different html element
    const [moviesArr, setMoviesArr] = useState(moviesFromJson);
   
    
    const deleteMovie = (id) => {
        //console.log("deleting a movie...", id);
        const newListOfMovies = moviesArr.filter((movie) => {
            return movie.id !== id;
        })

        setMoviesArr(newListOfMovies);       
    }

    // Conditional Rendering with "Element Variables"
    let titleMessage;
    if (moviesArr.length !== 0) {
        titleMessage = <h2>Current number of movies: {moviesArr.length}</h2>
    } else {
        titleMessage = <h2>No movie to display</h2>
    }
    
    return (
        <div className="Main">
            {/* for each method doesn't return anything */}
            {titleMessage}
            
            {moviesArr.map((movieDetails) => {
               // use map method, must set key 
                return (
                    <div key={movieDetails.id} className="card movie">
                        <p>{movieDetails.title}</p>
                        <p>Rating: {movieDetails.rating}</p>

                        {/*  Conditional Rendering with "Logical && Operator"  */}
                        {movieDetails.rating>8 && <p className="badge">RECOMMENDED</p>}

                        <p>Year: {movieDetails.year}</p>
                        {/* <p key={movieDetails.id}>Genres: {movieDetails.genres.map((elm)=> {return <p>{elm}</p>})}</p> */}
                        
                         {/*  Conditional Rendering with "Ternary Operator"  */}
                        {movieDetails.imgURL? 
                            <img src={movieDetails.imgURL} alt=""/>:
                            <img src="https://via.placeholder.com/182x268" alt=""/> 
                        }    
                       
                        <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete this movie</button>
                    </div>  
                ) 
            })}
            
        </div>

    )

}