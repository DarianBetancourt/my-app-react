import React, {useEffect,useState} from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import API from './utils/APIUtils.js';
import "./assets/styles/App.css";


const App = () =>{
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  /* 
      //Example use others APIUtils functions 
        const resp = API.getMultCharacters([2,3]);
        const resp = API.getCharacter(2); 
  */
  
  async function fetchData(url=null){
    const resp =  await API.getCharacters(url);
    setCharacters(resp.results);
    setInfo(resp.info);
  }

  const onPrevious = () =>{
    fetchData(info.prev);
  }

  const onNext = () =>{
    fetchData(info.next);
  }
  
  useEffect(() => { 
    fetchData();
  }, [])
  
  return (
    <>
      <Navbar/>
     
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrevious={onPrevious}/>
        <Characters characters={characters}/>
      </div>
      
    </>

  );
}

export default App