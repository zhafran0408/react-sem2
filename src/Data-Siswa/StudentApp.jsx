import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import { StudentProvider } from "./StudentContext";
import "./Student.css";

export default function App() {
  return (
    <StudentProvider>
      <div className="container">
        <h1>Pendaftaraan Siswa Baru</h1>
        <StudentForm />
        <StudentTable />
      </div>
    </StudentProvider>
  );
}


