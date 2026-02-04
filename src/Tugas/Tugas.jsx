import { useState } from "react";

function Tugas() {
  const [inputValue, setInputValue] = useState("");
  const [listNama, setListNama] = useState([]);

  const handleTambah = () => {
    if (inputValue.trim() === "") return;

    setListNama([...listNama, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Input Nama</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleTambah}>Tambah Nama</button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((nama, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tugas;
