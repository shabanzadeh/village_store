import react, { useState } from 'react';
import Nav from './Nav';
import Datetable from '../../api/Datatable'
import Datatable from '../../api/Datatable';


const MainComponent = () => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <Nav users={users} />
            <Datatable setUsers={setUsers} />
        </div>
    );
};

export default MainComponent;
