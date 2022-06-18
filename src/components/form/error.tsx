import { forwardRef, ReactNode } from "react";

interface ErrorProps {
  visible: boolean;
  style?: object;
  isError?: boolean;
  children: ReactNode;
}

const FormError = forwardRef<HTMLSpanElement, ErrorProps>(
  ({ visible, style, isError, children, ...props }, ref) => {
    return (
      <span
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
          textAlign: "start",
          display: "block",
          width: "100%",
          color: "#db373c",
          marginTop: 3,
          marginBottom: 4,
          padding: 4,
          fontWeight: "light",
          fontSize: "0.8rem",
          ...style,
        }}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    );
  }
);

export default FormError;
