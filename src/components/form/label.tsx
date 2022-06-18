import { forwardRef, LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  style?: object;
  isError?: boolean;
  children: ReactNode;
}

const FormLabel = forwardRef<HTMLLabelElement, LabelProps>(
  ({ style, isError, children, ...props }, ref) => {
    return (
      <label
        style={{
          textAlign: "start",
          display: "block",
          width: "100%",
          marginTop: 3,
          marginBottom: 4,
          padding: 4,
          fontWeight: "light",
          fontSize: "1rem",
          ...style,
        }}
        {...props}
        ref={ref}
      >
        {children}
      </label>
    );
  }
);

export default FormLabel;
