import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPostFilteredList } from '../redux/postSlice';

export function FilterByName(){

    const dispatch = useDispatch();
    const [ nameToFind, setNameToFind] = useState("")
    const { posts } = useSelector(state => state.posts)

    const handleChangeNameToFind = (e) => {
        const nameToFind = e.target.value
        setNameToFind(nameToFind)
        const results = !nameToFind ? posts : posts.filter((post) => post.name.toLowerCase().includes(nameToFind.toLowerCase()))
        dispatch(setPostFilteredList(results))
    }

    return (
        <div className="input-group mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            aria-label="Enter name"
            aria-describedby="button-add"
            value={nameToFind}
            onChange={handleChangeNameToFind}>
            </input>
        </div>
    )
}