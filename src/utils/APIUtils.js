const baseUrl = "https://rickandmortyapi.com/api"

const API = {
    /* if it doesn't receive url , it returns the first 20 characters */
    getCharacters:(url=null) => {
        url = url ? url : baseUrl+"/character";
        return fetch(url).then(res =>  res.json());
    },
    getCharacter: (id) => {
      return fetch(baseUrl+"/character/"+id).then(res => res.json());
    },
    getMultCharacters: (characters) => {
      return fetch(baseUrl+"/character/"+characters.toString()).then(res => res.json());
    },
  }

export default API; 