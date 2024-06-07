import {  doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth } from "../../api/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const New = () => {
  const [data, setData] = useState({
    name: '',
    state: '',
    country: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", res.user.uid), {
        name: data.name,
        state: data.state,
        country: data.country,
        email: data.email,
        Timestamp: serverTimestamp()
      });
      console.log('User added successfully:', res.user.uid);
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  return (
    <div className="flex justify-center items-center py-14">
      <form onSubmit={handleAdd} className="bg-white p-6 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register New User</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={data.name} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="state">State</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state" type="text" value={data.state} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="country">Country</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" value={data.country} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={data.email} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={data.password} onChange={handleChange} />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;
