import { useStudents, useStudentsDispatch } from "./StudentContext";
import { useState } from "react";

export default function StudentTable() {
  const students = useStudents();
  const dispatch = useStudentsDispatch();

  return (
    <div className="card-container">
      {students.map((student) => (
        <StudentRow key={student.id} student={student} dispatch={dispatch} />
      ))}
    </div>
  );
}

function StudentRow({ student, dispatch }) {
  const [edit, setEdit] = useState(false);
  const [nama, setNama] = useState(student.nama);
  const [umur, setUmur] = useState(student.umur);
  const [kelas, setKelas] = useState(student.kelas);

  function handleSave() {
    dispatch({
      type: "UPDATE_STUDENT",
      id: student.id,
      nama,
      umur,
      kelas,
    });
    setEdit(false);
  }

  return (
    <div className="student-card">
      {edit ? (
        <div className="edit-area">
          <input value={nama} onChange={(e) => setNama(e.target.value)} />
          <input value={umur} onChange={(e) => setUmur(e.target.value)} />
          <input value={kelas} onChange={(e) => setKelas(e.target.value)} />

          <div className="actions">
            <button className="save-btn" onClick={handleSave}>
              Simpan
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="student-info">
            <h3>{student.nama}</h3>
            <p>
              Umur: <span>{student.umur}</span>
            </p>
            <p>
              Kelas: <span>{student.kelas}</span>
            </p>
          </div>
          <div className="actions">
            <button className="edit-btn" onClick={() => setEdit(true)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                dispatch({ type: "DELETE_STUDENT", id: student.id })
              }
            >
              Hapus
            </button>
          </div>
        </>
      )}
    </div>
  );
}
