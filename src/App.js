import "./App.css";
import AddMemberForm from "./components/AddMemberForm";
import { useState } from "react";
import Member from "./components/Member";

function App() {
  const [members, setMembers] = useState([]);
  const [shortNames, setShortNames] = useState([]);

  const addMemberHandler = (name) => {
    setMembers((prevState) => [name, ...prevState]);
  };

  const addShortNameHandler = (name) => {
    setShortNames((prevState) => [name, ...prevState]);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <AddMemberForm
        members={members}
        onAddShort={addShortNameHandler}
        onAdd={addMemberHandler}
        shortNames={shortNames}
      />
      <div className="members">
        <div className="member-wrapper">
          <div className="title">
            <p>In the call</p>
          </div>
        </div>
        {shortNames.map((member) => (
          <Member key={Math.random()} name={member} />
        ))}
      </div>
    </div>
  );
}

export default App;
