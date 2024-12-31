import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Post from "./components/post/Post";
import { useSelector, useDispatch } from "react-redux";
import { getPostsData, addPost } from "./features/posts";
import { signIn, signOut } from "./features/user";

function App() {
	const [content, setContent] = useState({ postContent: "", like: 1 });
	const userState = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	const reduxPosts = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(getPostsData());
	}, []);

	return (
		<div className={styles.App}>
			<header className={styles.AppHeader}></header>

			{userState !== null ? (
				<div>
					<div>Welcome {userState.displayName}</div>
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
							dispatch(addPost({ content: content.postContent, uid: userState }));
						}}
					>
						AddPost!
					</button>
				</div>
			) : (
				<button onClick={() => dispatch(signIn())}>Sign In</button>
			)}
			<button onClick={() => dispatch(signOut())}>Sign Out</button>
		</div>
	);
}

export default App;
