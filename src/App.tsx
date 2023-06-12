import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/index";
import ListGroup from "./components/ListGroup/index";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["Chicago", "New York", "San Francisco"];

  const selectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        text="Testing text"
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
      <BsFillCalendarWeekFill color="red" size={40} />
      <Like onClick={() => console.log("clicked")} />
      <ListGroup items={items} heading="Cities" onSelectItem={selectedItem} />
    </div>
  );
}

export default App;
