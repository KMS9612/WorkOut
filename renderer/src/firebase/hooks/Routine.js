import { addDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export default function useRoutine() {
  const userUid = JSON.parse(sessionStorage.getItem("UserInfo")).uid;
  const createRoutine = async (title) => {
    const docRef = doc(db, "Users", userUid);
    await updateDoc(docRef, {
      routine: [{ title: title, exercise: "", weight: "", reps: "" }],
    });
    console.log(docRef);
  };

  return { createRoutine };
}
