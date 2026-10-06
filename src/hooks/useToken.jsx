// hook
import useRedux from "./useRedux";

// actions
import {
  setTokens as setTokensAction,
  clearTokens as clearTokensAction,
  setAccessToken as setAccessTokenAction,
  setRefreshToken as setRefreshTokenAction,
} from "../store/slices/token.slice.js";

// api
import TokenAPI from "../api/tokenAPI.js";

export default function useToken() {
  const [tokens, dispatch] = useRedux("tokenSlice");
  const { accessToken, refreshToken } = tokens;

  const setTokens = (accessToken, refreshToken) => {
    dispatch(setTokensAction({ accessToken, refreshToken }));
  };

  const clearTokens = () => {
    dispatch(clearTokensAction());
  };

  const setAccessToken = (token) => {
    dispatch(setAccessTokenAction(token));
  };

  const setRefreshToken = (token) => {
    dispatch(setRefreshTokenAction(token));
  };

  const doRefreshToken = async () => {
    const result = await TokenAPI.refreshToken(refreshToken);
    const isOK = result.status === 200;

    if (isOK) {
      const { accessToken, refreshToken: resultRefreshToken } = result.tokens;
      setTokens(accessToken, resultRefreshToken);
    }

    return isOK;
  };

  return {
    accessToken,
    refreshToken,
    setTokens,
    clearTokens,
    setAccessToken,
    setRefreshToken,
    doRefreshToken,
  };
}
