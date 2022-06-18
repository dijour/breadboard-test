import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, ...props }, ref) => {
    return (
      <input
        style={{
          display: "block",
          width: "100%",
          marginTop: 3,
          marginBottom: 4,
          padding: 4,
          fontWeight: "light",
          fontSize: "1rem",
          borderWidth: 1,
          borderRadius: 4,
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

export default FormInput;
