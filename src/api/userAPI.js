// constants
import SERVER from "../constants/server";

export default class UserAPI {
  static async getMyProfile(accessToken) {
    const r = await fetch(`${SERVER}/api/user/my`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
