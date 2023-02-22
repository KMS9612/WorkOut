import { addDoc, arrayUnion, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

export default function useRoutine() {
  const [userUid, setUserUid] = useState();

  useEffect(() => {
    setUserUid(JSON.parse(sessionStorage.getItem("UserInfo")).uid);
  }, []);

  const createRoutine = async (title) => {
    const RoutineRef = doc(db, "Routines", userUid);
    await updateDoc(RoutineRef, {
      routine: arrayUnion({ title: title, list: [{ exercise: "", weight: "", reps: "" }] }),
    });
    const unsub = onSnapshot(doc(db, "Routines", userUid), (doc) => {
      sessionStorage.setItem("routine", JSON.stringify(doc.data().routine));
    });
  };

  const updateNewExercise = async (clickedRoutine, exercise, weight, reps) => {
    // 1. user의 루틴정보를 가져오기.(session에 저장된 정보를 사용)
    let routines = JSON.parse(sessionStorage.getItem("routine"));
    // 2. 루틴정보에 추가될 정보를 push
    let newExercise = { exercise: exercise, weight: weight, reps: reps };
    routines[clickedRoutine].list.push(newExercise);
    // 3. 추가된 정보를 firestore에 업데이트
    const RoutineInfoRef = doc(db, "Routines", userUid);
    await setDoc(RoutineInfoRef, {
      routine: routines,
    });

    // 4. 최신화된 정보를 session에 다시 저장()
    const unsub = onSnapshot(doc(db, "Routines", userUid), (doc) => {
      sessionStorage.setItem("routine", JSON.stringify(doc.data().routine));
    });
  };

  const UpdatePrevRoutine = async (PrevRoutine) => {
    const UserRef = doc(db, "Users", userUid);
    await updateDoc(UserRef, {
      prevRoutine: PrevRoutine,
    });
  };
  return { createRoutine, updateNewExercise, UpdatePrevRoutine };
}
