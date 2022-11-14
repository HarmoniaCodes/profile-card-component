import React from "react";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <img
          className="circle-img"
          src={require("./image-victor.jpg")}
          alt="avatar_img"
        />
        <h1 className="name">
          {props.name} <span className="age">{props.age}</span>
        </h1>
        <p className="location">{props.location}</p>
      </div>
      <hr></hr>
      <div className="stats">
        <div>
          <h1 className="info">{props.follows}</h1>
          <span className="subtext">Followers</span>
        </div>
        <div>
          <h1 className="info">{props.likes}</h1>
          <span className="subtext">Likes</span>
        </div>
        <div>
          <h1 className="info">{props.photos}</h1>
          <span className="subtext">Photos</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
