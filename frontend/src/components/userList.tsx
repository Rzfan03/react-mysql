import axios from "axios";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router";


const UserList = () => {
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    const res = await axios.get('http://localhost:2008/users');
    setUser(res.data)
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:2008/users/${id}`)
      alert("Berhasil Menghapus User!")
      getAllUser();
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllUser();
  }, [])
  
  return (
    <div className="flex justify-center mt-5 w-screen flex-col gap-2 items-center">
      <div className="flex w-7xl mb-5 gap-3 items-center justify-around">
        <h1 className="font-medium text-3xl">List Siswa</h1>
        <Link className="bg-emerald-400 flex items-center gap-2 rounded cursor-pointer text-white font-medium p-3" to={'add'}>Add New<BiPlus size={24}/></Link>        
       </div>
      <table className="w-4xl border-collapse">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Jurusan</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users, i) => (
            <tr key={users.id} className="border-b border-slate-300">
              <td className="p-3">{i + 1}</td>
              <td className="p-3">{users.name}</td>
              <td className="p-3">{users.jurusan}</td>
              <td className="p-3">{users.email}</td>
              <td className="p-3 flex gap-3">
                <Link to={`edit/${users.id}`} className="p-2 bg-blue-500 text-white rounded cursor-pointer"><MdEdit/></Link>
                <button onClick={() => deleteUser(users.id)} className="p-2 bg-red-500 text-white rounded cursor-pointer"><FaRegTrashAlt/></button>
              </td>
            </tr>        
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList;