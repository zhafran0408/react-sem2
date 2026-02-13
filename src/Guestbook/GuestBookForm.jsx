export default function GuestBookForm({ name, setName, inputRef }) {
  return (
    <>
      <label htmlFor="name">Name</label><br />
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
    </>
  );
}




