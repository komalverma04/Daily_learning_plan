import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  const [contactsData, setcontactsData] = React.useState(contacts);
  return (
    <>
      <Card contactsData={contactsData} />
    </>
  );
}
export default App;
