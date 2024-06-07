import { useState } from "react";
import Nav from "./Nav";
import Datatable from "../../api/Datatable";
import { User } from "../types/types";

const MainComponent = () => {
  const [users, setUsers] = useState<User>([]);

  return (
    <div>
      <Nav users={users} />
      <Datatable setUsers={setUsers} />
    </div>
  );
};

export default MainComponent;
