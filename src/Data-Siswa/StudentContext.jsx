import { createContext, useContext, useReducer } from "react";

const StudentsContext = createContext(null);
const StudentsDispatchContext = createContext(null);

function studentsReducer(students, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...students, action.student];

    case "UPDATE_STUDENT":
      return students.map(s =>
        s.id === action.id
          ? { ...s, nama: action.nama, umur: action.umur, kelas: action.kelas }
          : s
      );

    case "DELETE_STUDENT":
      return students.filter(s => s.id !== action.id);

    default:
      return students;
  }
}

export function StudentProvider({ children }) {
  const [students, dispatch] = useReducer(studentsReducer, []);

  return (
    <StudentsContext.Provider value={students}>
      <StudentsDispatchContext.Provider value={dispatch}>
        {children}
      </StudentsDispatchContext.Provider>
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentsContext);
}

export function useStudentsDispatch() {
  return useContext(StudentsDispatchContext);
}

