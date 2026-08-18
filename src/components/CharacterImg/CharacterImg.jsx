// images
import jellishImg from "../../assets/img/characters/jellyfish.png";
import rockImg from "../../assets/img/characters/rock.png";
import vampireImg from "../../assets/img/characters/vampire.png";
import bambrikImg from "../../assets/img/characters/bambrik.png";
import honliaImg from "../../assets/img/characters/honlia.png";
import emptyImg from "../../assets/img/characters/empty.png";
import amoebaImg from "../../assets/img/characters/amoeba.png";
import chessKingImg from "../../assets/img/characters/chess_king.png";
import chessQueenImg from "../../assets/img/characters/chess_queen.png";
import chessRockImg from "../../assets/img/characters/chess_rook.png";
import chessKnightImg from "../../assets/img/characters/chess_knight.png";
import chessBishopImg from "../../assets/img/characters/chess_bishop.png";
import chessPawnImg from "../../assets/img/characters/chess_pawn.png";

export default function CharacterImg({ characterKey, className = "" }) {
  let src = null;

  switch (characterKey) {
    case "chess_king": {
      src = chessKingImg;
      break;
    }

    case "chess_queen": {
      src = chessQueenImg;
      break;
    }

    case "chess_rook": {
      src = chessRockImg;
      break;
    }

    case "chess_knight": {
      src = chessKnightImg;
      break;
    }

    case "chess_bishop": {
      src = chessBishopImg;
      break;
    }

    case "chess_pawn": {
      src = chessPawnImg;
      break;
    }

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

    default: {
      src = emptyImg;
    }
  }

  return <img src={src} alt="character" className={className} />;
}
