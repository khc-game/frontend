// images
import jellyfishImg from '../../assets/img/characters/jellyfish.png';
import rockImg from '../../assets/img/characters/rock.png';
import vampireImg from '../../assets/img/characters/vampire.png';
import bambrikImg from '../../assets/img/characters/bambrik.png';
import honliaImg from '../../assets/img/characters/honlia.png';

// styles
// import classes from './styles.module.css';

export default function CharacterImg({ characterName, className = "" }) {
  let src = null;
  
  switch(characterName) {
    case "jellyfish": {
      src = jellyfishImg;
      break;
    }
    
    case "rock": {
      src = rockImg;
      break;
    }

    case "vampire": {
      src = vampireImg;
      break;
    }

    case "bambrik": {
      src = bambrikImg;
      break;
    }

    case "honlia": {
      src = honliaImg;
      break;
    }

    default: {
      return <div className={className}>?</div>
    }
  }

  return <img src={src} alt="character" className={className} />
}