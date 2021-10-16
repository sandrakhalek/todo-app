import { useState } from "react";

function Form(props) {
  const [value, setValue] = useState(props.value);

  return (
    <form>
      <input
        className="form-lg"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Name"
      />
    </form>
  );
}

export default Form;
