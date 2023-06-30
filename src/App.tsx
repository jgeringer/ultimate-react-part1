import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

// use an interface to define the shape of our object
interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // axios
    //   .get<User[]>("https://jsonplaceholder.typiXcode.com/users")
    //   .then((response) => setUsers(response.data))
    //   .catch((err) => setError(err.message));

    // instead of above, async await...
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
