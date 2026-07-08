import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router";

const addUser = () => {
  const [name, setName] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2008/users', {
        name,
        jurusan,
        email
      })
  navigate("/")    
    } catch (err) {
      console.log(`error ${err}`)
    }
  }

  
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex flex-col p-6">
        <h1 className="text-3xl font-medium mb-4">Masukkan Data</h1>
        <form onSubmit={saveUser} className="gap-4 flex flex-col">
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
                <option value={'Tata Boga'}>Teknik Informasi dan Jaringan</option>
                <option value={'Perhotelan'}>Perhotelan</option>
                <option value={'Tata Boga'}>Tata Boga</option>
                <option value={'Tata Boga'}>Tata Kecantikan</option>
                <option value={'Tata Boga'}>Pariwisata</option>
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
           <button type="submit" className="w-full bg-emerald-400 font-medium cursor-pointer rounded text-white p-3 inset-shadow-2xs inset-shadow-emerald-300">Simpan</button>
         </div>
        </form>
      </div>
   </div>
  )
}

export default addUser