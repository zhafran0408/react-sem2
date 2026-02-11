import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileForm() {
  const { name, setName } = useContext(ProfileContext);

  return (
    <>
      <h3>Form Profile</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ketik nama..."
      />
    </>
  );
}



