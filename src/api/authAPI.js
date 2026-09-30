// constants
import SERVER from "../constants/server";

export default class AuthAPI {
  static async register(username, password) {
    const r = await fetch(`${SERVER}/api/auth/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    try {
      const data = await r.json();

      return {
        status: r.status,
        ...data,
      };
    } catch (error) {
      return {
        status: r.status,
      };
    }
  }

  static async login(username, password) {
    const r = await fetch(`${SERVER}/api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    try {
      const data = await r.json();

      return {
        status: r.status,
        ...data,
      };
    } catch (error) {
      return {
        status: r.status,
      };
    }
  }
}
