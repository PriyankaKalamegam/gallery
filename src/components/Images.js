import React from "react";
import "./Images.css";
import { Component } from "react";
import Pop from "./Pop";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "/photos/1.jpg",
        "/photos/2.jpg",
        "/photos/3.jpg",
        "/photos/4.jpg",
        "/photos/6.jpg",
        "/photos/7.jpg",
        "/photos/8.jpg",
        "/photos/9.jpg",
        "/photos/10.jpg",
        "/photos/11.jpg",
        "/photos/12.jpg",
        "/photos/13.jpg",
        "/photos/14.jpg",
        "/photos/15.jpg",
        "/photos/16.jpg",
        "/photos/18.jpg",
        "/photos/19.jpg",
        "/photos/20.jpg",
        "/photos/21.jpg",
        "/photos/22.jpg",
        "/photos/23.jpg",
        "/photos/24.jpg",
        "/photos/25.jpg",
        "/photos/26.jpg",
        "/photos/27.jpg",
        "/photos/28.jpg",
        "/photos/29.jpg",
        "/photos/30.jpg",
        "/photos/31.jpg",
        "/photos/32.jpg",
        "/photos/33.jpg",
        "/photos/34.jpg",
        "/photos/35.jpg",
        "/photos/36.jpg",
        "/photos/37.jpg",
        "/photos/38.jpg",
        "/photos/39.jpg",
        "/photos/40.jpg",
        "/photos/41.jpg",
        "/photos/42.jpg",
        "/photos/43.jpg",
        "/photos/44.jpg",
        "/photos/45.jpg",
        "/photos/46.jpg",
        "/photos/47.jpg",
        "/photos/48.jpg",
        "/photos/49.jpg",
      ],
      showModal: "",
      popImageUrl: "",
    };
  }

  handlePopup = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      popImageUrl: url,
    });
  };

  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      return (
        <img
          className="singleImage"
          src={url}
          key={index}
          onClick={() => this.handlePopup(url)}
          alt=""
          width="200px"
          height="200px"
        />
      );
    });
    return (
      <div className="Images">
        {images}
        {this.state.showModal ? (
          <Pop
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
          />
        ) : null}
      </div>
    );
  }
}

export default Images;
