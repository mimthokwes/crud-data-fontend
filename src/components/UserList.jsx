import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const UserList = () => {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    const response = await axios.get('http://localhost:3001/users');
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      getUsers();
      alert(`Apakah anda yakin ingin menghapus data ini?`);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className='columns mt-5 is-centered  is-flex '>
        <div className="column is-half is-flex  is-justify-content-center">
          <table className='table is-fullwidth is-striped  '>
            <thead className='table is-centered is-bordered'>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link className='button is-small is-info mr-2' to={`update/${user.id}`}>Update</Link>
                    <button onClick={() => deleteUser(user.id)} className='button is-small is-danger'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="adduser is-flex is-justify-content-center">
        <Link to="/add" className='button mt-4'>Add User</Link>
      </div>
    </>
  )
}

export default UserList
