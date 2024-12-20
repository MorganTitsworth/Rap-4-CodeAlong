import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import db from "./api/firebase-config";
import Post from "./components/post/Post";
import { useSelector, useDispatch } from "react-redux";
import { getPostsData } from "./features/posts";
function App() {
	const [content, setContent] = useState({ postContent: "", like: 1 });

	const dispatch = useDispatch();
	const reduxPosts = useSelector((state) => state.posts);
	console.log(reduxPosts);

	useEffect(() => {
		dispatch(getPostsData());
	}, []);

	// Add doc to posts collection
	const addPosts = async () => {
		console.log("Adding Posts");
		try {
			const docRef = await addDoc(collection(db, "posts"), {
				content: content.postContent,
				date: new Date(),
				like: content.like,
			});
			console.log("Document written with ID: \n", docRef.id);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.App}>
			<header className={styles.AppHeader}></header>
			{!reduxPosts.loading ? (
				<>
					{reduxPosts.posts.length > 0 ? (
						<>
							<br />
							{reduxPosts.posts.map((post) => (
								<Post key={post.id} postContent={post} />
							))}
						</>
					) : null}
				</>
			) : (
				"loading"
			)}
			<br />
			<br />
			<br />
			<input
				type="text"
				placeholder="content"
				value={content.postContent}
				onChange={(e) => {
					e.preventDefault();
					setContent({ ...content, postContent: e.target.value });
				}}
			/>
			<button
				onClick={() => {
					console.log("Add post button clicked ");
					addPosts(content);
				}}
			>
				AddPost!
			</button>
		</div>
	);
}

export default App;
