import { Component } from "react";
import { Button } from "react-bootstrap";

export function createMovie  (rating, title ) {
    const movieList = document.getElementById("movieList");
    const item = document.createElement('li');
    item.setAttribute("class", "list-group-item list-group-item-secondary mb-2");
    var text = document.createTextNode(title);
    item.appendChild(text);

    for (let i = 0 ; i < rating; i++) {
        const starImg = document.createElement("img");
        starImg.setAttribute("src",'C:\Users\quant\OneDrive\Documents\GitHub\Assignment-6---Flerplattformsapplikationer\assignment\src\images\star.png')
        item.appendChild(starImg);
    }


    movieList.appendChild(item);
}
  

class MovieList extends Component{
    
    constructor(props) {
        super(props);
    }

    render () {
        return (
        <div style={{width:750}}>
            <h2 className="mt-3">Inlagda Filmer</h2>
            <ul id='movieList' class="list-group"> </ul>
        
            <button id="button1" class="btn btn-primary mr-2">Alfabetisk ordning</button>
            <button id="button2" class="btn btn-primary mr-2">Betygsordning</button>

        </div>
        );
    }
}

export default MovieList;