import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import { useImmerReducer } from "use-immer";
import "./Student.css";
let id = 0;

const initialStudents = [];

function studentsReducer(draft, action) {
  switch (action.type) {
    case "ADD_DATA":
      draft.push({
        id: id++,
        nama: action.nama,
        umur: action.umur,
        kelas: action.kelas,
      });
      break;

    case "CHANGE_DATA": {
      const index = draft.findIndex((student) => student.id === action.id);

      draft[index].nama = action.nama;
      draft[index].umur = action.umur;
      draft[index].kelas = action.kelas;
      break;
    }

    case "DELETE_DATA": {
      const index = draft.findIndex((student) => student.id === action.id);
      draft.splice(index, 1);
      break;
    }

    default:
      break;
  }
}

export default function StudentApp() {
  const [students, dispatch] = useImmerReducer(
    studentsReducer,
    initialStudents,
  );

  function handleAddStudent(nama, umur, kelas) {
    dispatch({
      type: "ADD_DATA",
      nama: nama,
      umur: umur,
      kelas: kelas,
    });
  }

  function handleChangeStudent(student) {
    dispatch({
      type: "CHANGE_DATA",
      id: student.id,
      nama: student.nama,
      umur: student.umur,
      kelas: student.kelas,
    });
  }

  function handleDeleteStudent(student) {
    dispatch({
      type: "DELETE_DATA",
      id: student.id,
    });
  }

  return (
    <div className="container">
      <h1>Data Siswa</h1>

      <StudentForm onAddStudent={handleAddStudent} />

      <StudentTable
        students={students}
        onChange={handleChangeStudent}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
}
