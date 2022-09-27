import {
  addDoc,
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export const pushLegs = async (legs) => {
  let legsToDelete = await getAllLegs();
  legsToDelete.forEach(async (leg) => {
    await deleteDoc(doc(db, "legs", leg.id));
  });

  legs.forEach(async (leg) => {
    try {
      await addDoc(collection(db, "legs"), leg);
    } catch (err) {
      alert(err);
    }
  });
};

export const getAllLegs = () =>
  new Promise((res, rej) => {
    const q = query(collection(db, "legs"));
    let legs;
    onSnapshot(q, (querySnapshot) => {
      legs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      console.log(legs);
      res(legs);
    });
  });
