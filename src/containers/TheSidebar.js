import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSidebar, CSidebarNav, CSidebarMinimizer } from "@coreui/react";

const TheSidebar = () => {
  const [hover, setHover] = useState(true);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);
  console.log("show???->", show);
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarNav>
        <div
          className="c-item-card"
          style={{ display: hover ? "unset" : "none" }}
        >
          <h3>Title</h3>
          <h5>Content</h5>
        </div>
        <div
          className="c-item-card"
          style={{ display: hover ? "unset" : "none" }}
        >
          <h3>Title</h3>
          <h5>Content</h5>
        </div>
      </CSidebarNav>
      <div
        className="c-sidebar-minimizer-container"
        style={{
          marginRight: hover ? -10 : 0,
          right: hover ? 0 : 10,
          position: hover ? "unset" : "absolute",
        }}
        onClick={() => setHover(!hover)}
      >
        <CSidebarMinimizer className="c-d-md-down-none" />
      </div>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
