import React from "react";

import "./Images.css";
import { Component } from "react";

class Pop extends Component {
  render() {
    return (
      <div className="popupParent">
        <div className="popupImage">
          <button
            className="imageClosingButton"
            onClick={this.props.closePopup}
          >
            X
          </button>
          <img src={this.props.popImageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Pop;
