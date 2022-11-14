import React from "react";
import Card from "./card";
import cardInfo from "./cardinfo";

function App() {
  return (
    <div>
      <Card
        name={cardInfo[0].name}
        profImg={cardInfo[0].profImg}
        age={cardInfo[0].age}
        location={cardInfo[0].loc}
        follows={cardInfo[0].folNum}
        likes={cardInfo[0].likeNum}
        photos={cardInfo[0].photoNum}
      />
    </div>
  );
}

export default App;
