import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import {useState} from 'react'
function App() {
  const [name, setName] = useState("Mehmet")
  const [weather, setWeather] = useState("Sunny")
  const [day, setDay] = useState("Today")
  const [friends, setFriends] = useState(["Ahmet ", "Mehmet"]);
  const [address, setAddress] = useState({title: "izmir", zip:"3500"})
  return (

    
    
    <div className="App">
     <h1>Merhaba {name}</h1>
     <h1>the weather is {weather} {day}!</h1>
     <button onClick={()=> setName("Ahmet")}>click</button>
     <button onClick={() =>setWeather("Cloudy") || setDay("tomorrow")}> Change weather</button>
     <hr />
        <h2>Friends</h2>
      {
      friends.map((friend, index) => <div key={index}>
        {friend}
      </div> )}
      <button onClick={()=> setFriends([...friends, "Eda"])}>add new friend</button>   
    <hr />
  <h2>Address</h2>
       <div>{address.title} {address.zip}</div>
  <button onClick={()=>setAddress({...address, title:"Ankara", zip: 3600}) }>change the address</button>
  <hr />
  <Counter/>
  
 </div> 
  );
}

 export default App;
