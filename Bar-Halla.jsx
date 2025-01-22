import React from "react";
import { Component } from "./Component";
import image6 from "./image-6.png";
import image7 from "./image-7.png";
import image8 from "./image-8.png";
import image9 from "./image-9.png";
import "./style.css";

export const Registration = () => {
  return (
    <div className="registration">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="sign-up-field">
              <img className="image" alt="Image" src={image6} />

              <img className="img" alt="Image" src={image9} />

              <img className="image-2" alt="Image" src={image7} />

              <img className="image-3" alt="Image" src={image8} />
            </div>

            <div className="text-wrapper">Already have an account?</div>

            <div className="div">Sign in</div>

            <Component
              className="name-component"
              divClassName="component-1"
              property1="username-default"
            />
            <Component
              className="email-component"
              divClassName="component-1"
              property1="username-default"
              text="Email..."
            />
            <Component
              className="pass-component"
              divClassName="component-1"
              property1="username-default"
              text="Password..."
            />
            <Component
              className="con-pass-component"
              divClassName="component-1"
              property1="username-default"
              text="Confirm password..."
            />
          </div>

          <div className="confirm">
            <div className="div-wrapper">
              <div className="text-wrapper-2">CONFIRM</div>
            </div>

            <div className="rectangle" />

            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="rectangle-4" />
          </div>

          <div className="group">
            <div className="overlap-2">
              <div className="text-wrapper-3">SIGN UP</div>
            </div>

            <div className="rectangle-5" />

            <div className="rectangle-6" />

            <div className="rectangle-7" />

            <div className="rectangle-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
