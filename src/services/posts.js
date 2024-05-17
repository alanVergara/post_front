import { setPostList } from "../redux/postSlice"

const API_URL = "http://127.0.0.1:3000/posts/"

export const getPosts = () => (dispatch) => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => dispatch(setPostList(data)))
    .catch((error) => console.log(error))
};

export const setPost = (posts, name, description) => (dispatch) => {
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          "name": name,
          "description": description,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((data) => dispatch(setPostList([...posts, data])))
    .catch((error) => console.log(error))
};

export const deletePost = (posts, id) => (dispatch) => {
    fetch(`${API_URL}${id}`, {
        method: "DELETE",
    })
    .then((response) => response.json())
    .then((data) => dispatch(setPostList(posts.filter(post => post.id !== id))))
    .catch((error) => console.log(error))
};
