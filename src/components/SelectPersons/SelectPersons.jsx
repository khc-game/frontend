// libs
import { useEffect, useState } from "react";

// components
import CharacterImg from "../CharacterImg";

// hooks
import useSocket from "../../hooks/useSocket";
import useApiResolver from "../../hooks/useApiResolver";

// api
import getCharactersAPI from "../../api/getCharactersAPI";

// styles
import classes from "./styles.module.css";

export default function SelectPersons({ onPlay }) {
  const { socketEmit } = useSocket();
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [money, setMoney] = useState(8);

  const api_getCharacters = useApiResolver(getCharactersAPI, [], {
    default(result) {
      console.log(result);
    },

    200(result) {
      setAllCharacters(result.characters.filter((char) => !char.cantSelect));
    },
  });

  const onPlayHandle = () => {
    if (selectedCharacters.length > 0) {
      socketEmit(
        "play",
        selectedCharacters.map((char) => char.key),
      );
      onPlay();
    }
  };

  useEffect(() => {
    api_getCharacters();
  }, []);

  const deselectChar = (ind) => {
    const character = selectedCharacters[ind];
    setMoney((prev) => prev + character.cost);
    setAllCharacters((prev) => [...prev, character]);
    setSelectedCharacters((prev) => prev.filter((_c, cInd) => cInd !== ind));
  };

  const selectChar = (ind) => {
    if (selectedCharacters.length === 8) return;
    const character = allCharacters[ind];
    if (money >= character.cost) {
      setMoney((prev) => prev - character.cost);
      setSelectedCharacters((prev) => [...prev, character]);
      setAllCharacters((prev) => prev.filter((_c, cInd) => cInd !== ind));
    }
  };

  return (
    <div className={classes.root}>
      <h2>Select characters</h2>

      <div>
        <h3>Selected characters</h3>
        <p>Money: {money}</p>
        <div className={classes.characters}>
          {selectedCharacters.length === 0 ? (
            <p className={classes.emptyCharacterMsg}>Select characters</p>
          ) : (
            selectedCharacters.map((char, ind) => (
              <Character
                key={`${ind} ${char.key}`}
                data={char}
                onSelectChar={() => deselectChar(ind)}
              />
            ))
          )}
        </div>
      </div>

      <div>
        <h3>All characters</h3>
        <div className={classes.characters}>
          {allCharacters.map((char, ind) => (
            <Character
              key={`${ind} ${char.key}`}
              data={char}
              onSelectChar={() => selectChar(ind)}
            />
          ))}
        </div>
      </div>

      <button onClick={onPlayHandle}>play</button>
    </div>
  );
}

function Character({ data, onSelectChar }) {
  return (
    <button onClick={onSelectChar} className={classes.characterButton}>
      <CharacterImg characterKey={data.key} className={classes.characterImg} />
      <p>Cost: {data.cost}</p>
    </button>
  );
}
