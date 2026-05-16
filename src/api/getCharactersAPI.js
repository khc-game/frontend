// constants
import SERVER from '../constants/server';

export default async function getCharactersAPI() {
  const r = await fetch(`${SERVER}/api/characters`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    }
  });

  try {
    const data = await r.json();

    return {
      status: r.status,
      ...data,
    };
  } catch (error) {
    return {
      status: r.status
    };
  }
}