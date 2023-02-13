import { addDoc, arrayUnion, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

export default function useRoutine() {
  const [userUid, setUserUid] = useState();
  useEffect(() => {
    setUserUid(JSON.parse(sessionStorage.getItem("UserInfo")).uid);
  }, []);

  const createRoutine = async (title) => {
    const UserRef = doc(db, "Users", userUid);
    await updateDoc(UserRef, {
      routine: arrayUnion({ title: title, exercise: "", weight: "", reps: "" }),
    });
    const unsub = onSnapshot(doc(db, "Users", userUid), (doc) => {
      sessionStorage.setItem("routine", JSON.stringify(doc.data().routine));
    });
  };

  // 실시간 호출 대기 함수
  return { createRoutine };
}
