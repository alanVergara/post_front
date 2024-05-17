import { deletePost } from '../services/posts'
import { useDispatch, useSelector } from 'react-redux';

export function TablePosts(){

    const { posts, postsFiltered } = useSelector(state => state.posts)

    const dispatch = useDispatch();

    const removePost = (id) => {
        dispatch(deletePost(posts, id));
    }

    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {postsFiltered.map(post => (
                <tr key={post.id}>
                    <td>{post.name}</td>
                    <td>{post.description}</td>
                    <td>
                        <button
                        className="btn btn-danger btn-lg"
                        type="button"
                        onClick={() => removePost(post.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}