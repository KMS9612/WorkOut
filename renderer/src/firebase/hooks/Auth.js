import { app, dialog } from "electron";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase.config";
import { useRecoilState } from "recoil";
import { LoginError } from "../../recoilState/Auth/loginState";
export const useAuth = () => {
  const router = useRouter();

  const createUser = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const [err, setErr] = useRecoilState(LoginError);
  const Login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("Token", user.refreshToken);
        sessionStorage.setItem("UserInfo", JSON.stringify(user));

        setErr(false);
        router.push("/backGround");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(true);
      });
  };
  return { createUser, Login };
};
