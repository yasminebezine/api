import axios from "axios";
import { useEffect,useState } from "react";
function App() {
  const [users,setUsers]=useState([])
  const getusers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };
  useEffect(()=>
  {getusers();},[])

  return (
    <div className="App">
      {users.map((el,key)=> {
        return (<div key={key}> 
<p>
  {el.id}
  {el.name}
  {el.username}
  {el.email}
</p>
        </div>)
    
      }
      )}
  
    </div>
  );
}

export default App;
