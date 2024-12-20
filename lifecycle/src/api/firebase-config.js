import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBhDJ_hqQtqy0anV1WzkWG11SgwhkDSok0",
	authDomain: "test1-b020c.firebaseapp.com",
	projectId: "test1-b020c",
	storageBucket: "test1-b020c.firebasestorage.app",
	messagingSenderId: "203872344454",
	appId: "1:203872344454:web:fb8d34853ac060afe37407",
	measurementId: "G-6P6S9JNVRX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
