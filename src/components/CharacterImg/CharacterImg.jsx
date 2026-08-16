// images
import jellishImg from "../../assets/img/characters/jellyfish.png";
import rockImg from "../../assets/img/characters/rock.png";
import vampireImg from "../../assets/img/characters/vampire.png";
import bambrikImg from "../../assets/img/characters/bambrik.png";
import honliaImg from "../../assets/img/characters/honlia.png";
import emptyImg from "../../assets/img/characters/empty.png";
import amoebaImg from "../../assets/img/characters/amoeba.png";
import chessKingImg from "../../assets/img/characters/chess_king.png";

export default function CharacterImg({ characterKey, className = "" }) {
  let src = null;

  switch (characterKey) {
    case "jellish": {
      src = jellishImg;
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

    case "amoeba": {
      src = amoebaImg;
      break;
    }

    case "chess_king": {
      src = chessKingImg;
      break;
    }

    default: {
      src = emptyImg;
    }
  }

  return <img src={src} alt="character" className={className} />;
}
