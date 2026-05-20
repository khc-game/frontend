// images
import jellyfishImg from '../../assets/img/characters/jellyfish.png';
import rockImg from '../../assets/img/characters/rock.png';
import vampireImg from '../../assets/img/characters/vampire.png';
import bambrikImg from '../../assets/img/characters/bambrik.png';
import honliaImg from '../../assets/img/characters/honlia.png';
import emptyImg from '../../assets/img/characters/empty.png';

export default function CharacterImg({ characterKey, className = "" }) {
  let src = null;
  
  switch(characterKey) {
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
      src = emptyImg;
    }
  }

  return <img src={src} alt="character" className={className} />
}