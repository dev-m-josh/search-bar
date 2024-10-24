
import { useMemo, useRef, useState } from 'react';
import './App.css';

function App() {
  //store all our items
const [items, setItems] = useState([]);
// store what we want to search for
const [Query, setQuery] = useState('')
//refrence the add items input value
const inputRef = useRef();

//filter items
//use memo to run when certain parameters change
const filteredItems = useMemo(() => {
  return items.filter(item =>{
  return item.toLowerCase().includes(Query.toLowerCase())
})}, [items, Query]) 

//add new items
function onSubmit(e) {
  e.preventDefault()
  const value = inputRef.current.value

  if (value === "") return
  setItems(prev =>{
    return [...prev, value]
  })
  inputRef.current.value = ""
}



  return (
    <div className="App">
      Search:
      <input value={Query} onChange={e => setQuery(e.target.value)} type='search'/>
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type='text'/>
        <button type='submit'>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item =>(
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;
