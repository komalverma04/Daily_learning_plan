import React, { useState } from "react";

function CreateArea(props) {
  const [addnote, setaddnote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setaddnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    props.additem(addnote, setaddnote);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={addnote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={addnote.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
