// libs
import { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { LuRadius } from "react-icons/lu";
import { LuSwords } from "react-icons/lu";
import { LuTimer } from "react-icons/lu";
import { GiHealthNormal } from "react-icons/gi";
import { BiDonateBlood } from "react-icons/bi";
import { BsFillLightningChargeFill } from "react-icons/bs";


// components
import CharacterImg from '../../components/CharacterImg';
import ModuleImg from '../../components/ModuleImg';

// api
import getCharactersAPI from '../../api/getCharactersAPI';

// styles
import classes from './styles.module.css';

export default function PreviewPage() {
  const [ characters, setCharacters ] = useState([]);

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
      {characters.map((char, ind) => 
        <Character key={ind} char={char} />
      )}
    </div>
  )
}


function Character({ char }) {
  const { key, name, hp, modules } = char;

  const [power, setPower] = useState(hp);

  const addPower = (power) => {
    setPower(prev => prev + power);
  };

  return (
    <div className={classes.character}>
      <div className={classes.mainInfo}>
        <p><FaHeart color='#f89'/> {hp}</p>
        <CharacterImg characterKey={key} className={classes.characterImg}/>
        <p className={classes.name} >{name}</p>
        <p><BsFillLightningChargeFill color='gold'/> {power}</p>
      </div>

      <div className={classes.modules}>
        {
          modules.map((module, ind) =>
            <Module key={ind} module={module} addPower={addPower}/>
          )
        }
      </div>
    </div>
  );
}

function Module({ module, addPower }) {
  const { title, radius, damage, cooldown, heal, blood } = module;

  useEffect(() => {
    const values = [];
    
    if (radius) values.push(radius);
    if (damage) values.push(damage);
    if (heal) values.push(heal);
    if (blood) values.push(blood);

    let summ = 0;
    values.forEach(num => summ += num);

    if (cooldown !== null) {
      summ = Math.floor(summ / cooldown);
    }

    addPower(summ);
  }, []);

  return (
    <div className={classes.module}>
      <p className={classes.moduleTitle}>{title}</p>

      <div className={classes.moduleContent}>
        <div className={classes.moduleBaseInfo}>
          <ModuleImg moduleTitle={title} className={classes.moduleImg} />
        </div>

        <div className={classes.moduleDatas}>
          { radius && <p><LuRadius /> {radius}</p> }
          { damage && <p><LuSwords /> {damage}</p> }
          { cooldown && <p><LuTimer /> {cooldown}</p> }
          { heal && <p><GiHealthNormal /> {heal}</p> }
          { blood && <p><BiDonateBlood /> {blood}</p> }
        </div>
      </div>
    </div>
  );
}