import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "warning";
  style?: object;
  disabled?: boolean;
  children: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{
          width: "100%",
          outline: "none",
          padding: "1rem",
          border: "none",
          color: "white",
          borderRadius: "0.25rem",
          backgroundColor: "#6147ff",
          "&:hover": {
            backgroundColor: "#efefef",
          },
          "&:last-child": {
            borderRight: "solid 1px #cccccc",
          },
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
