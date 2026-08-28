// components
import CharacterImg from "../CharacterImg";

// images
import emptyImg from "../../assets/img/modules/empty.png";
import moveImg from "../../assets/img/modules/move.png";
import attackImg from "../../assets/img/modules/attack.png";
import vampirismImg from "../../assets/img/modules/vampirism.png";
import teleportImg from "../../assets/img/modules/teleport.png";
import potionImg from "../../assets/img/modules/potion.png";
import divideImg from "../../assets/img/modules/divide.png";

export default function ModuleImg({ module, className = "" }) {
  const { title, isShopItem, type } = module;

  if (isShopItem) {
    if (type === "player") {
      return <CharacterImg characterKey={title} className={className} />;
    }
  }

  let src = null;

  switch (title) {
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

    default: {
      console.log(title);
      src = emptyImg;
    }
  }

  return <img src={src} alt="module" className={className} />;
}
