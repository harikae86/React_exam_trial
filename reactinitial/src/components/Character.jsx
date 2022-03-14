import { useState } from "react";

const Character = (props) => {
  const { character, index } = props;
  const [open, setOpen] = useState(false);

  const clickHandler = (e, index) => {
    e.preventDefault();
    if (!open) {
      return setOpen(true);
    }
    setOpen(false);
  };
  return (
    <div>
      <p>{character?.name}</p>
      <button
        onClick={(e, index) => {
          clickHandler(e, index);
        }}
      >
        {open ? "Show Less" : "Show More"}
      </button>
      {open && <p>{character.details}</p>}
    </div>
  );
};

export default Character;
