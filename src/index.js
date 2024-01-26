import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import Appp from "./Sandbox";

// function AnotherStar() {
//   const [para, setPara] = useState(0);
//   return (
//     <div>
//       <StarRating color="grey" maxRating={7} onSetRating={setPara} />
//       <p>the movie was rated {para} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      msg={["terrible", "bad", "good", "okey", "Amezeing"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      className="test"
      size={50}
      defaultRating={4}
    />
    <AnotherStar /> */}
    {/* <Appp/> */}
  </React.StrictMode>
);
