import React, { ChangeEventHandler, useEffect } from "react";

type InputProps = {
  ref: React.MutableRefObject<HTMLInputElement | null>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  label: string;
};

const Input: React.FC<InputProps> = React.forwardRef(({ ref, id, value, onChange, label }) => {
  // const ref: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  // const deFocus = (e: KeyboardEvent) => {
  //   if (e.key === "Escape") {
  //     ref.current!.blur();
  //   }
  // };

  // useEffect(() => {
  //   const input = ref.current;
  //   input!.addEventListener("keydown", deFocus);
  //   return () => {
  //     input!.removeEventListener("keydown", deFocus);
  //   };
  // }, []);

  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        ref={ref}
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
});

export default Input;
