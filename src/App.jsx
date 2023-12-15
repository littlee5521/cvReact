import { useState } from "react";
import { PersonalDetails } from "./components/PersonalDetails";

function App() {
  const [userName, setUserName] = useState("Martin Rodriguez");
  const [userEmail, setUserEmail] = useState("aguy@gmail.com");
  const [userPhoneNumber, setUserPhoneNumber] = useState("+1 333 3333");
  const [userAddress, setUserAddress] = useState("California, USA");
  return (
    <>
      <PersonalDetails
        handleNameChange={setUserName}
        nameValue={userName}
        emailValue={userEmail}
        handleEmailChange={setUserEmail}
        phoneNumberValue={userPhoneNumber}
        handlePhoneNumberChange={setUserPhoneNumber}
        addressValue={userAddress}
        handleAddressValueChange={setUserAddress}
      />
    </>
  );
}

export default App;
