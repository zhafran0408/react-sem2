import { useState } from "react";

export default function StudentForm({ onAddStudent }) {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddStudent(nama, umur, kelas);

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
      />
      <input
        placeholder="Umur"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
        required
      />
      <input
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
        required
      />
      <button type="submit">Tambah</button>
    </form>
  );
}


