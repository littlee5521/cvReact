/* eslint-disable react/prop-types */
function InputBar({
  inputType = "text",
  inputPlaceholder = "Input text here",
  inputValue = "",
  handleChange,
}) {
  return (
    <input
      className="builder__personal-details__input"
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    ></input>
  );
}
export { InputBar };
