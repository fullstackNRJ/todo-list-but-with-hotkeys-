import React, { ChangeEventHandler } from "react";

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  label: string;
};

const Input: React.FC<InputProps> = ({ id, value, onChange, label }) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type="text"
        onChange={onChange as ChangeEventHandler<HTMLInputElement>}
        value={value}
        style={{
          width: "100%",
          height: "35px",
          padding: "0.5rem",
          fontSize: "20px",
          border: "1px solid #343434",
        }}
        autoFocus
      />
    </div>
  );
};

export default Input;
