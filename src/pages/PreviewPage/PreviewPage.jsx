// libs
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LuRadius } from "react-icons/lu";
import { LuSwords } from "react-icons/lu";
import { LuTimer } from "react-icons/lu";
import { GiHealthNormal } from "react-icons/gi";
import { BiDonateBlood } from "react-icons/bi";
import { PiCoins } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { TbCoins } from "react-icons/tb";
import { LuHandCoins } from "react-icons/lu";

// components
import CharacterImg from "../../components/CharacterImg";
import ModuleImg from "../../components/ModuleImg";

// api
import getCharactersAPI from "../../api/getCharactersAPI";

// styles
import classes from "./styles.module.css";

export default function PreviewPage() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const data = await getCharactersAPI();
    if (data.status === 200) {
      setCharacters(data.characters);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={classes.root}>
      {characters.map((char, ind) => (
        <Character key={ind} char={char} characters={characters} />
      ))}
    </div>
  );
}

function Character({ char, characters }) {
  const { key, name, hp, modules, cost, shop, cantSelect } = char;

  return (
    <div className={classes.character}>
      <div className={classes.mainInfo}>
        <p className={classes.name}>{name}</p>

        <CharacterImg characterKey={key} className={classes.characterImg} />
        <p>
          <FaHeart color="#f89" /> {hp}
        </p>

        {cost && (
          <p>
            <PiCoins color="green" /> {cost}
          </p>
        )}

        {shop && (
          <div className={classes.shop}>
            <p className={classes.shopHeaderText}>
              Has a store <FiShoppingBag color="purple" />
            </p>
            <p>
              <TbCoins color="purple" /> {shop[1]} start
            </p>
            <p>
              <LuHandCoins color="purple" /> +{shop[2]} after move
            </p>
          </div>
        )}

        {cantSelect && (
          <div className={classes.cantSelect}>
            <p className={classes.cantSelectHeaderText}>
              Cannot be <br />
              selected for play
            </p>
          </div>
        )}
      </div>

      <div className={classes.modules}>
        {modules.map((module, ind) => (
          <Module key={ind} module={module} characters={characters} />
        ))}
      </div>
    </div>
  );
}

function Module({ module, characters }) {
  const { title, radius, damage, cooldown, heal, blood, isShopItem, cost } =
    module;

  const charName =
    characters.filter((char) => char.key === title)[0]?.name ?? title;

  return (
    <div className={classes.module}>
      <p className={classes.moduleTitle}>
        {charName} {isShopItem && <FiShoppingBag color="purple" />}
      </p>

      <div className={classes.moduleContent}>
        <div className={classes.moduleBaseInfo}>
          {isShopItem ? (
            <CharacterImg characterKey={title} className={classes.moduleImg} />
          ) : (
            <ModuleImg moduleTitle={title} className={classes.moduleImg} />
          )}
        </div>

        <div className={classes.moduleDatas}>
          {radius && (
            <p>
              <LuRadius /> {radius}
            </p>
          )}
          {damage && (
            <p>
              <LuSwords /> {damage}
            </p>
          )}
          {cooldown && (
            <p>
              <LuTimer /> {cooldown}
            </p>
          )}
          {heal && (
            <p>
              <GiHealthNormal /> {heal}
            </p>
          )}
          {blood && (
            <p>
              <BiDonateBlood /> {blood}
            </p>
          )}

          {cost && (
            <p>
              <TbCoins color="purple" />
              {cost}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
