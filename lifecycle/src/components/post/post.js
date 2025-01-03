import { db } from "../../api/firebase-config";
import { useState } from "react";
import { collection, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { updateDocument, deleteDocument } from "../../features/posts";

export default function Post({ postContent }) {
	const [changes, setChanges] = useState({ newPostContent: postContent.content, newLikes: postContent.like });
	const dispatch = useDispatch();
	// const docRef = doc(db, "posts", postContent.id);
	return (
		<div>
			{postContent.content}
			<br />
			<input
				type="text"
				placeholder="Content"
				value={changes.newPostContent}
				onChange={(e) => {
					e.preventDefault();
					setChanges({ ...changes, newPostContent: e.target.value });
				}}
			/>
			<button
				onClick={() => {
					console.log("Edit post button clicked ");
					dispatch(updateDocument({ changes: changes.newPostContent, id: postContent.id }));
				}}
			>
				Update Post!
			</button>

			<button
				onClick={() => {
					console.log("Delete button clicked ");
					dispatch(deleteDocument(postContent.id));
				}}
			>
				X
			</button>
			<hr />
		</div>
	);
}
