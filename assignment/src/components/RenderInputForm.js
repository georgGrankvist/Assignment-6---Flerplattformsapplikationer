import { useState,useRef} from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Movie} from "./Movie"

export function RenderInputForm () {

  function onClickNumerically() {
    var stores_li = document.querySelectorAll('#movie-list-item');

    [].slice.call(stores_li).sort(function(a, b) {
        var numA = a.getAttribute('data-rating');
        var numB = b.getAttribute('data-rating');
        return (numA > numB) ? -1 : (numA < numB) ? 1 : 0;
    })
      .forEach(function(el) {el.parentNode.appendChild(el)})
}

function onClickAlphaBetically () {
    var stores_li = document.querySelectorAll('#movie-list-item');

    [].slice.call(stores_li).sort(function(a, b) {
        var textA = a.getAttribute('data-title').toLowerCase()
        var textB = b.getAttribute('data-title').toLowerCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
      .forEach(function(el) {el.parentNode.appendChild(el)})
}

    const [movies, setTitle] = useState([{
    id: 1,
    title: "",
    rating: 0,
  }]);


  const inputRefTitle = useRef();
  const inputRefRating = useRef();


  function addMovie (e) {

    e.preventDefault();

    console.log(inputRefTitle.current.value)
    console.log(inputRefRating.current.value)


    if (inputRefRating.current.value  == 0 || inputRefTitle.current.value == "") {
      alert("Du måste ange både titel och rating!");
    }

    else {
    
    const newID = movies.length > 0 ?  movies[movies.length - 1].id + 1 : 1;

    setTitle([...movies, {
      id: newID,  
      title: inputRefTitle.current.value,
      rating: inputRefRating.current.value,
    }]);

  }

  }

   return (
   <div style= {{width:750}}>
   <Form onSubmit={addMovie}>
    <Form.Group className="mb-3">
      <Form.Label>Titel:</Form.Label>
      <Form.Control ref={inputRefTitle} name = "title" placeholder="Titel här.." 
          />
    </Form.Group>
  
  <Form.Group className="mb-3" controlId="ratingForm">
  <Form.Label>Betyg:</Form.Label>
    <Form.Select aria-label="Välj betyg här" name="rating" ref={inputRefRating}>
      <option value={0}>Välj betyg här....</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>  
  </Form.Group>
  
  <Button variant="primary" type ="submit"className="btn btn-success mt-1">
    Spara film
  </Button>
   </Form>
  
   <div style={{width:750}}>
            <h2 className="mt-3">Inlagda Filmer</h2>
            <ul id='movies' className="list-group"> 
            {movies.map(movie => <Movie key={movie.id} item={movie} />)} </ul>
            <button id="button1" onClick = {onClickAlphaBetically} class="btn btn-primary mr-2">Alfabetisk ordning</button>
            <button id="button2" onClick = {onClickNumerically} class="btn btn-primary mr-2">Betygsordning</button>
        </div>
   </div>
   );
 
}


export default RenderInputForm
