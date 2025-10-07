import React from "react";

const App = () => {
  const names = ["Omkar", "Shravani", "Rohini", "Anshuk"];

  const loggedIn = false;

  return (
    <>
      <div className="text-5xl">Hello My Name is Omkar</div>
      <ul>
        {!loggedIn ? "Please Login" : names.map((name, index)=>(<li key={index}>{name}</li>))}
      </ul>
    </>
  );
};

export default App;
