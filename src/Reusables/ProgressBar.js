import React from 'react';

const ProgressBar = ({ bgcolor, completed }) => {

    const containerStyles = {
      height: 4,
      width: "100%",
      alignSelf: "center",
      backgroundColor: "rgba(204, 204, 204, .5)",
      borderRadius: 50,
      position: "relative",
      margin: "0rem 0rem 0rem 0rem"
    };
  
    const fillerStyles = {
      height: "100%",
      width: `${completed > 100 ? 100 : completed}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      textAlign: "right",
      transition: "1s ease 0.3s",
      };
  
    const iconStyles = {
      height: "6rem",
      width: "6rem",
      marginLeft: "-6rem",   
      position: "absolute",
      bottom: "-300%",
      left: `${completed}%`,
      color: completed <= 0 ? "#CCCCCC" : bgcolor,    
    }
  
    const labelStyles = {
      padding: 7,
      color: "white",
      fontWeight: "bold",
    };
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;