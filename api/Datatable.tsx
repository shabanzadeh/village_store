import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "../src/types/types"

const Datatable = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            let list: User[] = [];
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    list.push({
                        id: doc.id,
                        name: userData.name,
                        address: userData.address,
                        county: userData.county,
                        city: userData.city,
                        password: userData.password,
                        email: userData.email
                    });
                });
                setData(list);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Address: {user.address}</p>
                        <p>County: {user.county}</p>
                        <p>City: {user.city}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Datatable;
