import React from 'react'
import errorIcon from "../img/error-toast-icon.svg";
// import successIcon from "../img/toast-success-icon.svg";
import warningIcon from "../img/toast-warning-icon.svg";
import infoIcon from "../img/toast-info-icon.svg";

const ActionBar = (props) => { 
  return (
   <>
       {/* <!-- action bar start --> */}
       <div className="action_bar action_bar__info">
          <figure className="img-box">
            <img src={infoIcon} alt="" className="img" />
          </figure>
          <p className="text">
            Oooopps there’s a mistake Password should have at least 1 capital
            letter 
          </p>
          <div className="action-box">
            <p className="text">Lorem, ipsum.</p>
            <div className="arrow-icon">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
          </div>
          <div className="cancel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
        </div>
        {/* <!-- action bar end --> */}
        <div className="mt-20 mb-20"></div>
        {/* <!-- action bar start --> */}
        <div className="action_bar action_bar__error">
          <figure className="img-box">
            <img src={errorIcon} alt="" className="img" />
          </figure>
          <p className="text">
            Oooopps there’s a mistake Password should have at least 1 capital
            letter
          </p>
          <div className="action-box">
            <p className="text">Lorem, ipsum.</p>
            <div className="arrow-icon">
              <svg
                className="icon"  
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
          </div>
          <div className="cancel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
        </div>
        {/* <!-- action bar end --> */}
        <div className="mt-20 mb-20"></div>
        {/* <!-- action bar start --> */}
        <div className="action_bar action_bar__warning">
          <figure className="img-box">
            <img src={warningIcon} alt="" className="img" />
          </figure>
          <p className="text">
            Oooopps there’s a mistake Password should have at least 1 capital
            letter
          </p>
          <div className="action-box">
            <p className="text">Lorem, ipsum.</p>
            <div className="arrow-icon">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </div>
          </div>
          <div className="cancel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
        </div>
        {/* <!-- action bar end --> */}
   </>
  )
}

export default ActionBar