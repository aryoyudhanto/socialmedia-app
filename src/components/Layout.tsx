import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-row overflow-auto">
      {children}
    </div>
  );
};

export default Layout;
