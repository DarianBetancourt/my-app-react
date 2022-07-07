const baseUrl = "https://rickandmortyapi.com/api"

const API = {
    getAllCharacters:() => {
        console.log(baseUrl+"/character")
        return fetch(baseUrl+"/character")
        .then(res =>  res.json())
        .then(res => res.results);
    },
    getCharacter: (id) => {
      console.log (baseUrl+"/character/"+id)
      return fetch(baseUrl+"/character/"+id)
        .then(res => res.json());
    },
    getMultCharacters: (characters) => {
      console.log(baseUrl+"/character/"+characters.toString())
      return fetch(baseUrl+"/character/"+characters.toString())
        .then(res => res.json());
    },
  }

export default API; 