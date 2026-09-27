// libs
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import PreviewPage from "./pages/PreviewPage";
import GameMenuPage from "./pages/GameMenuPage";
import AppControllerPage from "./pages/AppControllerPage";
import AuthPage from "./pages/AuthPage";
import AuthLoginPage from "./pages/AuthLoginPage";
import AuthRegisterPage from "./pages/AuthRegisterPage";

// constants
import ROUTES from "./constants/routes.js";

// styles
import "./app.css";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<AppControllerPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />

        <Route path={ROUTES.HOME} element={<HomePage />}>
          <Route path={ROUTES.GAME_MENU} element={<GameMenuPage />} />
          <Route path={ROUTES.GAME} element={<GamePage />} />
          <Route path={ROUTES.PREVIEW} element={<PreviewPage />} />
        </Route>

        <Route path={ROUTES.AUTH} element={<AuthPage />}>
          <Route index element={<Navigate to={ROUTES.AUTH_REGISTER} />} />
          <Route path={ROUTES.AUTH_LOGIN} element={<AuthLoginPage />} />
          <Route path={ROUTES.AUTH_REGISTER} element={<AuthRegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
