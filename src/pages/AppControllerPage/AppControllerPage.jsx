// libs
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks
import useToken from "../../hooks/useToken";

// constants
import ROUTES from "../../constants/routes";

export default function AppControllerPage() {
  const { accessToken, clearTokens } = useToken();
  const navigate = useNavigate();

  const rehydrateToken = async () => {
    if (accessToken) {
      navigate(ROUTES.GAME_MENU);
    } else {
      clearTokens();
      navigate(ROUTES.AUTH);
    }
  };

  useEffect(() => {
    rehydrateToken();
  }, []);
}
