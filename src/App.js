import './App.css';

import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { getAllData}  from './features/gitUsersSlice';


function App() {
  const dispatch = useDispatch();

  const data = useSelector((state)=>{
    // console.log(state.app)
    return state.app
  });

  if(data.loading) {
    return <h2>Loading...</h2>
  }

  if(data.error!=null){
    return <h3>{data.error}</h3>
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={()=>dispatch(getAllData())}>Get Users</button>
    {data.users.map((ele)=>(
      <li key={ele.id}>{ele.login}</li>
    ))}
    </div>
  );
}

export default App;
