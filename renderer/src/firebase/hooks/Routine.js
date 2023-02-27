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
    let routines = JSON.parse(sessionStorage.getItem("routine"));
    let newExercise = { exercise: exercise, weight: weight, reps: reps };
    routines[clickedRoutine].list.push(newExercise);

    const RoutineInfoRef = doc(db, "Routines", userUid);

    await setDoc(RoutineInfoRef, {
      routine: routines,
    });

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
