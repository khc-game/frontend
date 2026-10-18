// hooks
import useRedux from "./useRedux";

// api
import UserAPI from "../api/userAPI.js";

// slice actions
import { setUser as setUserAction } from "../store/slices/user.slice.js";

export default function useUser() {
  const [userSlice, dispatch] = useRedux("userSlice");

  const { user } = userSlice;

  const setUser = (data) => {
    dispatch(setUserAction(data));
  };

  const fetchProfileData = async (token) => {
    const data = await UserAPI.getMyProfile(token);

    const isOK = data.status === 200;
    if (isOK) {
      setUser(data.user);
    }

    return isOK;
  };

  return { user, setUser, fetchProfileData };
}
