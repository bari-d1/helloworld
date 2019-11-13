import React, {Component} from 'react';
import HelloWorld from './HelloWorld';
import Image from './animate.png';
import Button from './Button';
import { store } from "./store";


class App extends Component{
  render(){
    return(
      <div>
        <img src = {Image} alt='animation'/>
       <HelloWorld tech={store.getState().tech}/>
       <Button  technologies={["React", "Elm", "React-redux"]}/>       
      </div>
    )
  }
}


export default App;
