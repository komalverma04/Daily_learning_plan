import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notelist, setnotelist] = useState([]);
  function additem(curNote, setaddnote) {
    setnotelist((prevValue) => {
      return [...prevValue, curNote];
    });
    setaddnote({
      title: "",
      content: "",
    });
  }

  function deletenote(id) {
    setnotelist((prevvalue) => {
      return prevvalue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea additem={additem} />
      {notelist.map((note, index) => {
        return (
          <Note
            deletenote={deletenote}
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
