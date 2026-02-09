import { useState } from "react";

export default function StudentTable({ students, onChange, onDelete }) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

function StudentRow({ student, onChange, onDelete }) {
  const [edit, setEdit] = useState(false);
  const [nama, setNama] = useState(student.nama);
  const [umur, setUmur] = useState(student.umur);
  const [kelas, setKelas] = useState(student.kelas);

  function handleSave() {
    onChange({
      id: student.id,
      nama,
      umur,
      kelas,
    });
    setEdit(false);
  }

  return (
    <tr>
      <td>
        {edit ? (
          <input value={nama} onChange={(e) => setNama(e.target.value)} />
        ) : (
          student.nama
        )}
      </td>

      <td>
        {edit ? (
          <input value={umur} onChange={(e) => setUmur(e.target.value)} />
        ) : (
          student.umur
        )}
      </td>

      <td>
        {edit ? (
          <input value={kelas} onChange={(e) => setKelas(e.target.value)} />
        ) : (
          student.kelas
        )}
      </td>

      <td className="actions">
        {edit ? (
          <button className="save-btn" onClick={handleSave}>
            Simpan
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setEdit(true)}>
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(student)}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}


