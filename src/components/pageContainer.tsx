import { forwardRef } from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, ...props }) => (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      {...props}
    >
      {children}
    </div>
  )
);
export default PageContainer;
