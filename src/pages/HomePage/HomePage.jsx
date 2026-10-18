// libs
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// components
import Header from "../../components/Header";

// hooks
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";

// constants
import ROUTES from "../../constants/routes";

// styles
import classes from "./styles.module.css";

export default function HomePage() {
  const { accessToken, refreshToken, doRefreshToken, clearTokens } = useToken();
  const { user, fetchProfileData } = useUser();
  const navigate = useNavigate();

  const rehydrateToken = async () => {
    const isOK = await doRefreshToken();

    if (isOK && refreshToken) {
      navigate(ROUTES.GAME_MENU);
    } else {
      clearTokens();
      navigate(ROUTES.AUTH);
    }

    return isOK;
  };

  const init = async () => {
    const isOKToken = await rehydrateToken();
    if (isOKToken) {
      await fetchProfileData(accessToken);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      rehydrateToken();
    }, 10 * 60_000);

    return () => {
      clearTimeout(timer);
    };
  }, [refreshToken]);

  const isAppInited = user && accessToken && refreshToken;

  return (
    <div className={classes.root}>
      <Header />
      {isAppInited ? (
        <div className={classes.main}>
          <Outlet />
        </div>
      ) : (
        <div>
          <p>User: {user ? "ok" : "empty"}</p>
          <p>Token 1: {accessToken ? "ok" : "empty"}</p>
          <p>Token 2: {refreshToken ? "ok" : "empty"}</p>
        </div>
      )}
    </div>
  );
}
