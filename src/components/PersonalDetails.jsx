/* eslint-disable react/prop-types */
import { InputBar } from "./inputbar";

function PersonalDetails({
  nameValue = "",
  handleNameChange,
  emailValue = "",
  handleEmailChange,
  phoneNumberValue,
  handlePhoneNumberChange,
  addressValue,
  handleAddressValueChange,
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
      <h2 className="builder__personal-details__label">Phone Number</h2>
      <InputBar
        inputType="tel"
        inputPlaceholder="Phone Number Here"
        inputValue={phoneNumberValue}
        handleChange={handlePhoneNumberChange}
      />
      <h2 className="builder__personal-details__label">Address</h2>
      <InputBar
        inputType="text"
        inputPlaceholder="Enter Address Here"
        inputValue={addressValue}
        handleChange={handleAddressValueChange}
      />
    </div>
  );
}

export { PersonalDetails };
