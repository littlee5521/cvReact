import { InputBar } from "./inputbar";

function PersonalDetails({
  nameValue = "",
  handleNameChange,
  emailValue = "",
  handleEmailChange,
}) {
  return (
    <div className="builder__personal-details">
      <h1 className="builder__personal-details__title">Personal Details</h1>
      <h2 className="builder__personal-details__label">Full Name</h2>
      <InputBar
        inputType="text"
        inputPlaceholder="Enter Name Here"
        inputValue={nameValue}
        handleChange={handleNameChange}
      />
      <h2 className="builder__personal-details__label">Email</h2>
      <InputBar
        inputType="email"
        inputPlaceholder="Enter Email Here"
        inputValue={emailValue}
        handleChange={handleEmailChange}
      />
    </div>
  );
}

export { PersonalDetails };
