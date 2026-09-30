// libs
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks
import useToken from "../../hooks/useToken";

// constants
import ROUTES from "../../constants/routes";

export default function AppControllerPage() {
  const { accessToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.GAME_MENU);
    } else {
      navigate(ROUTES.AUTH);
    }
  }, []);
}
