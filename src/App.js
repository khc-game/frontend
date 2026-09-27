// libs
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import PreviewPage from "./pages/PreviewPage";
import NotFoundPage from "./pages/NotFoundPage";

// constants
import ROUTES from "./constants/routes.js";

// styles
import "./app.css";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route index element={<Navigate to={ROUTES.PREVIEW} />} /> */}
        <Route path={ROUTES.HOME} element={<HomePage />}>
          <Route path={ROUTES.GAME} element={<GamePage />} />
          <Route path={ROUTES.PREVIEW} element={<PreviewPage />} />
        </Route>

        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
