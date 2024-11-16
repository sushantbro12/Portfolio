/* eslint-disable react/prop-types */
import styledComponents from "../Images/styledComponentsIcon.png";

export default function StyledComponentsIcon({ className }) {
  return (
    <img
      src={styledComponents}
      alt={"styled component image icon"}
      className={className}
    />
  );
}
