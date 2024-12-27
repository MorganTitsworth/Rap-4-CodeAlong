//version 1
import { db } from "../../api/firebase-config";
import { useState } from 'react';
import { collection, updateDoc, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { updateDocument } from "../../features/posts";
export default function Post({ postContent }) {
    const [changes, setChanges] = useState({ newPostContent: postContent.content, newLikes: postContent.like })
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user.user)
    const docRef = doc(db, "posts", postContent.id)
    async function deleteDocFunction() {
        try {
            await deleteDoc(docRef);
            alert("DELETION HAPPENED")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {postContent.uid === userState.uid ? <div>{postContent.content}</div> : "wrong user"}
            <hr />
            <input
                type="text"
                placeholder='Content'
                value={changes.newPostContent}
                onChange={(e) => {
                    e.preventDefault()
                    setChanges({ ...changes, newPostContent: e.target.value })
                }}
            />
            <button
                onClick={() => {
                    console.log('Edit post button clicked')
                    dispatch(updateDocument({
                        changes: changes.newPostContent,
                        id: postContent.id
                    }))
                }}
            >Edit Post!</button>
            <button
                onClick={() => {
                    console.log('Delete post button clicked')
                    deleteDocFunction()
                }}
            >X</button>
        </div>
    )
}