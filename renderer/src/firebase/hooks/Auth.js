import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { auth, db } from "../firebase.config";
import { useRecoilState } from "recoil";
import { LoginError } from "../../recoilState/Auth/loginState";
import { doc, getDoc, setDoc } from "firebase/firestore";
export const useAuth = () => {
  const router = useRouter();

  const createUser = async (email, password, name, height, weight) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // Profile업데이트
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        await Login(email, password);
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
        router.push("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const [err, setErr] = useRecoilState(LoginError);
  const Login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("Token", user.refreshToken);
        sessionStorage.setItem("UserInfo", JSON.stringify(user));
        // Routine정보 가져오기
        const docRef = doc(db, "Routines", user.uid);
        const docSnap = await getDoc(docRef);
        sessionStorage.setItem("routine", JSON.stringify(docSnap.data().routine));

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
