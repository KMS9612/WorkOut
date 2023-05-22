import { arrayUnion, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ClickedRoutine, Routines } from "../../recoilState/Routine/createRoutine";
import { db } from "../firebase.config";

export default function useRoutine() {
  const [userUid, setUserUid] = useState();
  const [clickedRoutine, setClickedRoutine] = useRecoilState(ClickedRoutine);

  useEffect(() => {
    setUserUid(JSON.parse(sessionStorage.getItem("UserInfo")).uid);
  }, []);

  /** 루틴을 1개 생성하는 함수 */
  const createRoutine = async (title) => {
    const RoutineRef = doc(db, "Routines", userUid);
    await updateDoc(RoutineRef, {
      routine: arrayUnion({
        title: title,
        list: [],
      }),
    });
    const unsub = onSnapshot(doc(db, "Routines", userUid), (doc) => {
      sessionStorage.setItem("routine", JSON.stringify(doc.data().routine));
    });
  };

  /** 루틴 내용(운동이름, 갯수 등)을 업데이트 하는 함수 */
  const updateNewExercise = async (clickedRoutine, exercise, weight, reps, sets) => {
    let routines = JSON.parse(sessionStorage.getItem("routine"));
    let newExercise = {
      exercise: exercise,
      weight: weight,
      reps: reps,
      sets: sets,
    };
    routines[clickedRoutine].list.push(newExercise);

    const RoutineInfoRef = doc(db, "Routines", userUid);

    await setDoc(RoutineInfoRef, {
      routine: routines,
    });

    const unsub = onSnapshot(doc(db, "Routines", userUid), (doc) => {
      sessionStorage.setItem("routine", JSON.stringify(doc.data().routine));
    });
  };

  /** 오늘의 루틴을 완료하면 이전 루틴으로 저장되는 함수 */
  const setRoutines = useSetRecoilState(Routines);
  const UpdatePrevRoutine = async (PrevRoutine) => {
    const UserRef = doc(db, "Users", userUid);
    await updateDoc(UserRef, {
      prevRoutine: PrevRoutine,
    });
    sessionStorage.setItem("prevRoutine", JSON.stringify(PrevRoutine));
  };

  const DeleteRoutine = async () => {
    let routines = JSON.parse(sessionStorage.getItem("routine") || "");
    const IndexCount = clickedRoutine;
    routines.splice(IndexCount, 1);
    const NewRoutineList = routines;

    const RoutineInfoRef = doc(db, "Routines", userUid);
    await setDoc(RoutineInfoRef, {
      routine: NewRoutineList,
    });

    const unsub = onSnapshot(doc(db, "Routines", userUid), (doc) => {
      sessionStorage.setItem("routine", JSON.stringify(doc.data().routine));
    });
    setRoutines(NewRoutineList);
  };
  return { createRoutine, updateNewExercise, UpdatePrevRoutine, DeleteRoutine };
}
