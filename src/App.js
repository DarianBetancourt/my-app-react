import React, {useEffect,useState} from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import API from './utils/APIUtils.js';


const App = () =>{
  const [characters, setCharacters] = useState([]);

  async function fetchData(){
    const resp =  await API.getAllCharacters();
    //const resp =  await API.getMultCharacters([2,3]);
    //const resp =  await API.getCharacter(2);
    setCharacters(resp);
  }
  
  useEffect(() => { 
    fetchData();
  }, [])
  
  return (
    <>
      <Navbar/>
      <div className="container mt-5">
        <Characters characters={characters}/>
      </div>
      
    </>

  );
}

export default App