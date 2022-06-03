import './App.css';
import { Stack } from 'react-bootstrap';
import RenderInputForm from './components/RenderInputForm.js'


function App() {
  return (
    <Stack gap = {3} style = {{justifyContent:'center', alignItems:'center'}}>
      <h1>Min filmlista</h1>
      <h3>Lägg till en film</h3>
      <RenderInputForm/>
    </Stack>
  );
}

export default App;
