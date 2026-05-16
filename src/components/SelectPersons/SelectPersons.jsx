// libs
import { useEffect, useState } from "react";

// hooks
import useSocket from "../../hooks/useSocket";
import useApiResolver from '../../hooks/useApiResolver';

// api
import getCharactersAPI from '../../api/getCharactersAPI';

// styles
import classes from "./styles.module.css";

export default function SelectPersons({ onPlay }) {
  const { socketEmit } = useSocket();
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const api_getCharacters = useApiResolver(getCharactersAPI, {
    default(result) {
      console.log(result);
    },

    200(result) {
      setAllCharacters(result.characters);
    },
  });

  const onPlayHandle = () => {
    if (selectedCharacters.length > 0) {
      socketEmit("play", selectedCharacters.map(char => char.key));
      onPlay();
    }
  };

  useEffect(() => {
    api_getCharacters();
  }, []);

  const deselectChar = (ind) => {
    setAllCharacters(prev => [...prev, selectedCharacters[ind]]);
    setSelectedCharacters(prev => prev.filter((_c, cInd) => cInd !== ind));
  };

  const selectChar = (ind) => {
    if (selectedCharacters.length === 4) return;
    setSelectedCharacters(prev => [...prev, allCharacters[ind]]);
    setAllCharacters(prev => prev.filter((_c, cInd) => cInd !== ind));
  };

  return (
    <div className={classes.root}>
      <h2>Select characters</h2>

      <div>
        <h3>Selected characters</h3>
        <div>
          {selectedCharacters.map((char, ind) => (
            <button key={`${ind} ${char.key}`} onClick={() => deselectChar(ind)}>{char.name}</button>
          ))}
        </div>
      </div>

      <div>
        <h3>All characters</h3>
        <div>
          {allCharacters.map((char, ind) => (
            <button key={`${ind} ${char.key}`} onClick={() => selectChar(ind)}>{char.name}</button>
          ))}
        </div>
      </div>

      <button onClick={onPlayHandle}>play</button>
    </div>
  );
}
