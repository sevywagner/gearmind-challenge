import { useRef, useState } from "react";

const AddMemberForm = ({ onAdd, members, onAddShort, shortNames }) => {
  const nameRef = useRef();
  const [inputValue, setInputValue] = useState('');

  const clickHandler = () => {
    const charArray = nameRef.current.value.split("");
    let output = "";
    const temp = members.find((member) => member === nameRef.current.value);
    const tempShortName = shortNames.find((name) => name === nameRef.current.value);

    if (tempShortName) {
        onAddShort("Challenge didn't specify what to do if a name is equal to another existing short name");
    } else if (temp) {
      onAddShort(temp + " 2");
    } else {
      if (members.length === 0) {
        onAddShort(nameRef.current.value.split("")[0]);
      } else {
        const temp = members.find(
          (member) => member.split("")[0] === nameRef.current.value.split("")[0]
        );
        if (temp) {
          const tempCharArray = temp.split("");
          for (let i = 0; i < charArray.length; i++) {
            if (charArray[i] === tempCharArray[i]) {
              output = output + charArray[i];

              if (charArray[i + 1] !== tempCharArray[i + 1]) {
                output = output + charArray[i + 1];
              }
            } else {
              break;
            }
          }

          onAddShort(output);
        } else {
          onAddShort(nameRef.current.value.split("")[0]);
        }
      }
    }

    onAdd(nameRef.current.value);
    setInputValue('');
  };

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" ref={nameRef} value={inputValue} onChange={changeHandler} />
      <button onClick={clickHandler}>Add Member</button>
    </div>
  );
};

export default AddMemberForm;
