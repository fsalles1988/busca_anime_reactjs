import React, { useEffect, useState } from 'react';
import SeachInput from './SeachInput';
import '../src/styles.css';

const api = 'https://kitsu.io/api/edge/';

export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  // chamaa da api//
  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);

        });
    }
  }, [text]);


  return (
    <div className="App">
      <div className="Header">
        <h1>Cartão de Animes</h1>
      <h1>Digite o nome de seu anime favorito!</h1>
      <SeachInput value={text} onChange={(search) => setText(search)} />
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
             <p>
             {anime.attributes.canonicalTitle}
             </p>
              
            </li>
          ))}
        </ul>
      )}
      
      </div>
      
    </div>
  );
}