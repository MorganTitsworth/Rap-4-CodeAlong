import db from "../../api/firebase-config";
import { useState } from "react";
import { collection, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export default function Post({ postContent }) {
	const [changes, setChanges] = useState({ newPostContent: postContent.content, newLikes: postContent.like });
	const docRef = doc(db, "posts", postContent.id);

	async function updateDocFunction(content) {
		console.log("Updating Posts");
		try {
			await updateDoc(docRef, { content: content });
			alert("CHANGES MADE");
		} catch (error) {
			console.log(error);
		}
	}

	async function deleteDocFunction() {
		try {
			await deleteDoc(docRef);
			alert("DELETION HAPPENED");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div>
			{postContent.content}
			<hr />
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
					updateDocFunction(changes.newPostContent);
				}}
			>
				Update Post!
			</button>

			<button
				onClick={() => {
					console.log("Delete button clicked ");
					deleteDocFunction();
				}}
			>
				X
			</button>
		</div>
	);
}
