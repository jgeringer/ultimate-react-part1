import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/index";
import ListGroup from "./components/ListGroup/index";
import ExpandText from "./components/ExpandText/index";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const [alertVisible, setAlertVisibility] = useState(false);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      // produce coppies the array of objecs so that we can modify it easier.
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const items = ["Chicago", "New York", "San Francisco"];

  const selectedItem = (item: string) => {
    console.log(item);
  };

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleGameClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Joe",
      },
    });
    // setGame(
    //   produce((draft) => {
    //     draft.player.name = "Joe";
    //   })
    // );
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Prod 1", quantity: 1 },
      { id: 2, title: "Prod 2", quantity: 1 },
    ],
  });

  const handleQuantityClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : { ...item }
      ),
    });
  };

  return (
    <div>
      <ExpandText
        maxChars={10}
        // text="This is some text right over in this very spot. Indeed it is, good day sir!"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, non.
        Reiciendis nihil iste veritatis quae quam voluptates autem ut ipsam
        dolor, quos, quaerat officiis? Minima, doloribus vero beatae est aut a
        quaerat molestias, repellendus, sequi excepturi voluptates enim cum
        iusto laboriosam omnis! Dolore explicabo totam in quam animi beatae vel,
        hic, voluptatem accusantium repellat quis distinctio corrupti deserunt
        ad ab architecto? Nam amet blanditiis optio rerum repudiandae quaerat
        fugiat iure voluptates aliquid laboriosam necessitatibus nostrum unde
        vitae nihil sapiente ullam alias corporis eligendi magnam, officiis
        quos. Dolorum odio voluptas reprehenderit dicta in nostrum, aut quis
        illum quaerat ad sapiente eius?
      </ExpandText>

      <Button text="Change quantity" onClick={handleQuantityClick} />
      {cart.items.map((item) => (
        <p>{item.quantity}</p>
      ))}

      <Button text="Change name" onClick={handleGameClick} />
      {game.player.name}

      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}

      <Button text="Bugs" onClick={handleClick} />
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
