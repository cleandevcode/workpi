import React from "react";
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
  TheMainSidebar,
} from "./index";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheMainSidebar />
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
