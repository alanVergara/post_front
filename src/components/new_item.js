import { setPost} from '../services/posts'
import { useDispatch, useSelector } from 'react-redux';
import { setNewName, setnewDescription } from '../redux/postSlice';

export function NewItem(){

    const dispatch = useDispatch();

    const { posts, newName, newDescription } = useSelector(state => state.posts)

    const handleChangeName = (e) => {
        dispatch(setNewName(e.target.value.trimStart()));
    }

    const handleChangeDescription = (e) => {
        dispatch(setnewDescription(e.target.value.trimStart()));
    }

    const createPost = () => {
        dispatch(setPost(posts, newName, newDescription));
    }

    return (
        <div className="input-group mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="button-add"
            value={newName}
            onChange={handleChangeName}>
            </input>
            <input
            type="text"
            className="form-control"
            placeholder="Description"
            aria-label="Description"
            aria-describedby="button-add"
            value={newDescription}
            onChange={handleChangeDescription}>
            </input>
            <button className="btn btn-primary btn-lg" type="button" id="button-add" onClick={createPost}>Create</button>
        </div>
    )
}