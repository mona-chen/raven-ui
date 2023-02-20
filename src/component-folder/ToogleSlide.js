import React from 'react'

const ToogleSlide = () => {
  return (
   <>
     <div style={{ display: "flex", gap: "2rem" }} className="">
          {/* <!-- toggle wrap start --> */}
          <div className="toggle-wrap">
            <input
              type="checkbox"
              name=""
              id="toggle-slide-one"
              className="toggle-input"
            />
            <label
              for="toggle-slide-one"
              className="toggle-label toggle-label__green-light"
            >
              <span className="child-one"></span>
              <span className="child-two"></span>
            </label>
          </div>
          {/* <!-- toggle wrap end --> */}
          {/* <!-- toggle wrap start --> */}
          <div className="toggle-wrap">
            <input
              type="checkbox"
              name=""
              id="toggle-slide-two"
              className="toggle-input"
            />
            <label
              for="toggle-slide-two"
              className="toggle-label toggle-label__purple-light"
            >
              <span className="child-one"></span>
              <span className="child-two"></span>
            </label>
          </div>
          {/* <!-- toggle wrap end --> */}
          {/* <!-- toggle wrap start --> */}
          <div className="toggle-wrap">
            <input
              type="checkbox"
              name=""
              id="toggle-slide-three"
              className="toggle-input"
            />
            <label
              for="toggle-slide-three"
              className="toggle-label toggle-label__black-light"
            >
              <span className="child-one"></span>
              <span className="child-two"></span>
            </label>
          </div>
          {/* <!-- toggle wrap end --> */}
          {/* <!-- toggle wrap start --> */}
          <div className="toggle-wrap">
            <input
              type="checkbox"
              name=""
              id="toggle-slide-four"
              className="toggle-input"
            />
            <label
              for="toggle-slide-four"
              className="toggle-label toggle-label__deep-green-light"
            >
              <span className="child-one"></span>
              <span className="child-two"></span>
            </label>
          </div>
          {/* <!-- toggle wrap end --> */}
          {/* <!-- toggle wrap start --> */}
          <div className="toggle-wrap">
            <input
              type="checkbox"
              name=""
              id="toggle-slide-five"
              className="toggle-input"
            />
            <label
              for="toggle-slide-five"
              className="toggle-label toggle-label__orange-light"
            >
              <span className="child-one"></span>
              <span className="child-two"></span>
            </label>
          </div>
          {/* <!-- toggle wrap end --> */}
          {/* <!-- toggle wrap start --> */}
          <div className="toggle-wrap">
            <input
              type="checkbox"
              name=""
              id="toggle-slide-six"
              className="toggle-input"
            />
            <label
              for="toggle-slide-six"
              className="toggle-label toggle-label__blue-light"
            >
              <span className="child-one"></span>
              <span className="child-two"></span>
            </label>
          </div>
          {/* <!-- toggle wrap end --> */}
        </div>
   </>
  )
}

export default ToogleSlide