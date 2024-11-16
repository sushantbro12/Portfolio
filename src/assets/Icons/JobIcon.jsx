/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function JobIcon({ className, theme = "light" }) {
  const colors = {
    dark: "#e4e5f1",
    light: "#2c3e50",
  };

  const color = colors[theme];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      // class="icon icon-tabler icon-tabler-briefcase"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
      <path d="M12 12l0 .01"></path>
      <path d="M3 13a20 20 0 0 0 18 0"></path>
    </svg>
  );
}
JobIcon.propTypes = {
  className: PropTypes.string,
};
