import {
  loginWithEmailPassword,
  logoutFirebase,
  RegisterUserWithEmailPassword,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, errorMessage, uid } = await RegisterUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!ok) return dispatch(logout(errorMessage));
    dispatch(login({ uid, email, displayName }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, displayName, errorMessage } = await loginWithEmailPassword(
      { email, password }
    );
    if (!ok) return dispatch(logout(errorMessage));
    dispatch(login({ uid, email, displayName }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
