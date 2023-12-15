import { useState } from "react";
import { PersonalDetails } from "./components/PersonalDetails";

function App() {
  const [userName, setUserName] = useState("Martin Rodriguez");
  const [userEmail, setUserEmail] = useState("aguy@gmail.com");
  return (
    <>
      <PersonalDetails
        handleNameChange={setUserName}
        nameValue={userName}
        emailValue={userEmail}
        handleEmailChange={setUserEmail}
      />
    </>
  );
}

export default App;
