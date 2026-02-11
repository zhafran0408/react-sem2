import { useState } from "react";
import { useStudentsDispatch } from "./StudentContext";

let nextId = 1;

export default function StudentForm() {
  const dispatch = useStudentsDispatch();

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_STUDENT",
      student: {
        id: nextId++,
        nama,
        umur,
        kelas,
      },
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nama"
        value={nama}
        onChange={e => setNama(e.target.value)}
      />
      <input
        placeholder="Umur"
        value={umur}
        onChange={e => setUmur(e.target.value)}
      />
      <input
        placeholder="Kelas"
        value={kelas}
        onChange={e => setKelas(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}





