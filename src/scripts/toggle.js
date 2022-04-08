import React  from "react";

const ToggleState = (initialState=false) => {
  const [state, setState] = React.useState(initialState);
  const togglestate = () => {
    setState(!state);
  };

  return [state, togglestate];

}

export default ToggleState;