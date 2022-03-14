import { useState } from "react";
import Character from "./Character";

const Home = (props) => {
  const { characters } = props;
  const [details, setDetails] = useState("");

  //   const clickHandler = (e, index) => {

  //   };

  return (
    <div>
      {characters?.map((character, index) => {
        return (
          <div>
            <Character
              character={character}
              key={index}
              index={index}
              //   clickHandler={clickHandler}
              details={details}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
