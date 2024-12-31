import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Post from "./components/post/post";
import { useSelector, useDispatch } from "react-redux";
import { getPostsData, addPost } from "./features/posts";
import { signIn, signOut } from "./features/user";

function App() {
	const [content, setContent] = useState({ postContent: "", like: 1 });
	const dispatch = useDispatch();
	const reduxPosts = useSelector((state) => state.posts);
	const userState = useSelector((state) => state.user.user);
	useEffect(() => {
		dispatch(getPostsData());
	}, []);

	return (
		<div className={styles.App}>
			<header className={styles.Appheader}>
				{userState !== null ? (
					<div>
						Welcome {userState.displayName}
						<br />
						<br />
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
						<input
							type="text"
							placeholder="Content"
							value={content.postContent}
							onChange={(e) => {
								e.preventDefault();
								setContent({ ...content, postContent: e.target.value });
							}}
						/>
						<button
							onClick={() => {
								console.log("Add post button clicked");
								dispatch(
									addPost({ content: content.postContent, uid: userState.uid, like: content.like })
								);
							}}
						>
							Add Post!
						</button>
					</div>
				) : (
					<button
						onClick={() => {
							dispatch(signIn());
						}}
					>
						Sign in
					</button>
				)}
			</header>
		</div>
	);
}

export default App;
