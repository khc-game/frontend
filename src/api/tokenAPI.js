// constants
import SERVER from "../constants/server";

export default class TokenAPI {
  static async refreshToken(refreshToken) {
    const r = await fetch(`${SERVER}/api/auth/refresh-token`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
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
