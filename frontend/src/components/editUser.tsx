import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router";

const editUser = () => {
  const [name, setName] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, [])
  
  const UpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:2008/users/${id}`, {
        name,
        jurusan,
        email
      })
  navigate("/")    
    } catch (err) {
      console.log(`error ${err}`)
    }
  }

  const getUserById = async () => {
    const res = await axios.get(`http://localhost:2008/users/${id}`)
    setName(res.data.name)
    setEmail(res.data.email)
    setJurusan(res.data.jurusan)
  }
  
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex flex-col p-6">
        <h1 className="text-3xl font-medium mb-4">Edit Data</h1>
        <form onSubmit={UpdateUser} className="gap-4 flex flex-col">
          <div>
            <label className="text-slate-500">Nama</label>
            <div>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-120 p-2 border border-slate-300 rounded"></input>
            </div>
          </div>
          <div>
            <label className="text-slate-500">Jurusan</label>
            <div>
              <select value={jurusan} onChange={(e) => setJurusan(e.target.value)} className="w-120 p-3 border border-slate-300 rounded">
                <option value={'Rekayasa Perangkat Lunak'}>Rekayasa Perangkat Lunak</option>
                <option value={'Perhotelan'}>Perhotelan</option>
                <option value={'Tata Boga'}>Tata Boga</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-slate-500">Email</label>
            <div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="w-120 p-2 border border-slate-300 rounded"></input>
            </div>
          </div>
          <div className="w-full">
           <button type="submit" className="w-full bg-blue-400 font-medium cursor-pointer rounded text-white p-3 inset-shadow-2xs inset-shadow-blue-300">Update</button>
         </div>
        </form>
      </div>
   </div>
  )
}

export default editUser