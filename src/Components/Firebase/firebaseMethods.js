import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore/lite";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { auth, db, storage } from "./firebase";

export const fireBaseSignUp = async (email, password) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    return "sucess";
  } catch (err) {
    switch (err.code) {
      case "auth/email-already-in-use":
        return "email already in use";
      case "auth/invalid-email":
        return "email is not valid";
      case "auth/user-not-found":
        return "Invalid user";
    }
  }
};

export const fireBaseSignIn = async (email, password) => {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);

    return "sucess";
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        return "email is not valid";
      case "auth/user-not-found":
        return "Invalid user";
      case "auth/wrong-password":
        return "Invalid password";
    }
  }
};

export const addUserDatabase = async (data) => {
  try {
    const docu = await setDoc(doc(db, "users", auth.currentUser.uid), data);
    // const docu = db.collection("users").doc(auth.currentUser.id).set(data);

    return "sucess";
  } catch (err) {
    return "error in adding Data to Database";
  }
  // const dataRef=
};

export const getUser = async () => {
  console.log("uid is ", auth.currentUser.uid);
  try {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("documnet pesent in get user ", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("get user documment no fonud");
      return "no document";
    }
  } catch (err) {
    console.log("error is  error in getUsre ", err);
    return "not possible error in getUser";
  }
};

export const signOutUser = async () => {
  try {
    const siOut = await signOut(auth);
    return "sucess";
  } catch (err) {
    console.log("failed signout ", err);
    return "failed";
  }
};

export const uplaodEvent = async (data) => {
  console.log("data in uploadEvent is ", data);
  const photoUpload = await uploadEventPhoto(data.file);
  console.log("photo upload is ", photoUpload);
  if (photoUpload !== "fail") {
    const dataF = {
      postedAt: Timestamp.fromDate(new Date("December 10, 1815")),
      postedBy: auth.currentUser.uid,
      username: data.username,
      title: data.title,
      content: data.content,
      image: photoUpload,
      likes: [],
    };
    try {
      const docs = doc(collection(db, "events"));
      const docu = await setDoc(docs, dataF);
      return "sucess";
    } catch (er) {
      console.log("error in uploading event to db ", er);
      return "fail";
    }
  } else {
    return "fail";
  }
};

export const uploadEventPhoto = async (file) => {
  try {
    const refa = ref(storage, `images/${file.name}`);
    const uploadTask = await uploadBytes(refa, file);
    console.log("upload task uploaded ", uploadTask);
    const downloadUrl = await getDownloadURL(uploadTask.ref);
    console.log("download url is ", downloadUrl);
    return downloadUrl;
    // const upload=
    return downloadUrl;
  } catch (err) {
    console.log("error in stiragaeis ", err);
    return "fail";
  }
};

export const getEvents = async (username) => {
  try {
    const q = query(collection(db, "events"), orderBy("postedAt"));
    const querySnapshot = await getDocs(q);
    var data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (
        doc
          .data()
          .likes.includes({ uid: auth.currentUser.uid, username: username })
      ) {
        console.log("the likes are ", doc.data().likes);
        data.push({ ...doc.data(), id: doc.id, liked: true });
      } else {
        data.push({ ...doc.data(), id: doc.id, liked: false });
      }

      console.log(doc.id, " => ", doc.data());
    });
    return data;
  } catch (err) {
    console.log("in getting events ", err);
    return "fail";
  }
};

export const addLike = async (id, liked, username) => {
  try {
    const docRef = doc(db, "events", id);

    // Update the timestamp field with the value from the server
    const updateTimestamp = await updateDoc(docRef, {
      likes: [...liked, { uid: auth.currentUser.uid, username: username }],
    });
    return "sucess";
  } catch (err) {
    console.log("err in addLike ", err);
    return "fail";
  }
};
