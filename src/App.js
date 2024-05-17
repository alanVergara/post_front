import './App.css';
import { useEffect } from 'react';
import { getPosts } from './services/posts'
import { useDispatch } from 'react-redux';
import { TablePosts } from './components/table'
import { NewItem } from './components/new_item'
import { FilterByName } from './components/filter'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className='m-4'>
      <FilterByName/>
      <TablePosts />
      <NewItem/>
    </div>
  );
}

export default App;
