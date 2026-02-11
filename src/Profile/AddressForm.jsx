import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function AddressForm() {
  const { address, setAddress } = useContext(ProfileContext);

  return (
    <>
      <h3>Form Address</h3>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </>
  );
}

