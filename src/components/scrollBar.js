import React from "react";
import "./scrollbar.css";
import  Container  from 'react-bootstrap/Container';

const Scrollbar = () => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (
    <Container>

      <div className="scrollbar my-5 mx-auto" style={scrollContainerStyle}>

      </div>
    </Container>
  );
}
export default Scrollbar;