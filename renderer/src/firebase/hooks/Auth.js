import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";
import { auth, db } from "../firebase.config";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IsLogin, LoginError } from "../../recoilState/Auth/loginState";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { IsAPILoading } from "../../recoilState/Common/isAPILoading";
export const useAuth = () => {
  const router = useRouter();
  const [err, setErr] = useRecoilState(LoginError);
  const setIsAPILoading = useSetRecoilState(IsAPILoading);
  const setIsLogin = useSetRecoilState(IsLogin);

  const createUser = async (email, password, name, height, weight) => {
    setIsAPILoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // Profile업데이트
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // 가입한 유저의 db생성
        await setDoc(doc(db, "Users", user.uid), {
          uid: user.uid,
          displayName: name,
          height: height ? height : "",
          weight: weight ? weight : "",
        });
        // 가입한 유저의 루틴 db생성
        const UserRef = doc(db, "Routines", user.uid);
        await setDoc(UserRef, {
          routine: [],
        });
        await Login(email, password);
        router.push("/backGround");
        setIsAPILoading(false);
        setIsLogin(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsAPILoading(false);
      });
  };

  const Login = async (email, password) => {
    setIsAPILoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("Token", user.refreshToken);
        sessionStorage.setItem("UserInfo", JSON.stringify(user));

        // Routine정보 가져오기
        const docRef = doc(db, "Routines", user.uid);
        const docSnap = await getDoc(docRef);
        sessionStorage.setItem(
          "routine",
          JSON.stringify(docSnap.data().routine)
        );

        // prevRoutine 가져오기
        const PrevRoutineRef = doc(db, "Users", user.uid);
        const PrevRoutineSnap = await getDoc(PrevRoutineRef);
        sessionStorage.setItem(
          "prevRoutine",
          JSON.stringify(PrevRoutineSnap.data().prevRoutine || "")
        );

        setErr(false);
        router.push("/backGround");
        setIsAPILoading(false);
        setIsLogin(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(true);
        setIsAPILoading(false);
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // 로그아웃 성공 시 처리할 내용
        router.push("login");
        sessionStorage.clear();
      })
      .catch((error) => {
        // 로그아웃 실패 시 처리할 내용
        console.error("로그아웃 중 오류가 발생했습니다:", error);
      });
  };

  return { createUser, Login, Logout };
};
