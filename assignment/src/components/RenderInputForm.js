import { Component, ReactDOM } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import MovieList, { createMovie } from "./MovieList";

class RenderInputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      title: ""
    };

    this.onSubmit = this.onSubmit.bind(this);

  }

 onSubmit () {
   if (this.state.rating ==0 || this.state.title == "") {
    alert("Du måste skriva in både titel och betyg!")  
   }

   else {
     createMovie(this.state.rating, this.state.title)
     this.state.rating = 0; 
     this.state.title = "";
   }

   console.log(this.state.title)
 }


 render () {

   return (
   <div style= {{width:750}}>
   <Form >
    <Form.Group className="mb-3">
      <Form.Label>Titel:</Form.Label>
      <Form.Control placeholder="Titel här.." 
          onChange={e => this.setState({ title: e.target.value })}/>
    </Form.Group>
  
  <Form.Group className="mb-3" controlId="ratingForm">
  <Form.Label>Betyg:</Form.Label>
    <Form.Select aria-label="Välj betyg här" value={this.state.rating} 
    onChange={e => this.setState({ rating: e.target.value })}>
      <option>Välj betyg här....</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>  
  </Form.Group>
  
  <Button variant="primary" type ="reset" className="btn btn-success mt-1" onClick={this.onSubmit}>
    Spara film
  </Button>
   </Form>
   <MovieList className = "mt3"/>
   </div>
   );
 }

}

export default RenderInputForm
