//version 1
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDocument, deleteDocument } from "../../features/posts";
export default function Post({ postContent }) {
    const [changes, setChanges] = useState({ newPostContent: postContent.content, newLikes: postContent.like })
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user.user)
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
                    dispatch(deleteDocument(postContent.id))
                }}
            >X</button>
        </div>
    )
}