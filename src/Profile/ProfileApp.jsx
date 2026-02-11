import { useState } from "react";
import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import ProfileForm from "./ProfileForm";
import AddressForm from "./AddressForm";
import "./ProfileApp.css";

export default function ProfileApp() {
  const [name, setName] = useState("Zhafran");
  const [address, setAddress] = useState("Bandung");

  return (
    <div className="container">
      <ProfileContext.Provider value={{ name, setName, address, setAddress }}>
        <h1>Profile App</h1>

        <div className="form-box">
          <ProfileForm />
        </div>

        <div className="form-box">
          <AddressForm />
        </div>

        <div className="card">
          <Profile />
          <ProfileAddress />
        </div>
      </ProfileContext.Provider>
    </div>
  );
}
