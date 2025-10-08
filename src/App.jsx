import React, {useState} from "react";

const App = () => {
  const names = ["Omkar", "Shravani", "Rohini", "Anshuk"];

  const [loggedIn, setLoggedIn]=useState(false);
  const handleLogin=()=>{setLoggedIn(true)};
  const handleLogout=()=>{setLoggedIn(false)};

  return (
    <>
      <div className="text-5xl">Hello My Name is Omkar</div>
      <ul>
        {!loggedIn ? "Please Login" : names.map((name, index)=>(<li key={index}>{name}</li>))}
      </ul>
      <button onClick={handleLogin} className="bg-black border text-white pr-12 rounded hover:bg-slate-400">Login</button>
      <button onClick={handleLogout} className="bg-purple-400 text-blue-200 pl-12 rounded hover:bg-purple-900">LogOut</button>


      <p style={{color: 'red', fontSize:"50px"}}>INLINE STYLING</p>
    </>
  );
};

export default App;
