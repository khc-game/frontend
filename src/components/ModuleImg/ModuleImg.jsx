// images
import emptyImg from '../../assets/img/modules/empty.png';
import moveImg from '../../assets/img/modules/move.png';
import attackImg from '../../assets/img/modules/attack.png';
import vampirismImg from '../../assets/img/modules/vampirism.png';
import teleportImg from '../../assets/img/modules/teleport.png';
import potionImg from '../../assets/img/modules/potion.png';
import divideImg from '../../assets/img/modules/divide.png';
import buffImg from '../../assets/img/modules/buff.png';

export default function ModuleImg({ moduleTitle, className = "" }) {
  let src = null;
  
  switch(moduleTitle) {
    case "Move": {
      src = moveImg;
      break;
    }

    case "Attack": {
      src = attackImg;
      break;
    }

    case "Vampirism": {
      src = vampirismImg;
      break;
    }

    case "Teleport": {
      src = teleportImg;
      break;
    }

    case "Potion": {
      src = potionImg;
      break;
    }

    case "Divide": {
      src = divideImg;
      break;
    }

    case "Buff": {
      src = buffImg;
      break;
    }

    default: {
      src = emptyImg;
    }
  }

  return <img src={src} alt="module" className={className} />
}