const ToggleButton = ({ toggle }) => {
  return <button onClick={toggle((prev) => !prev)}>Click</button>;
};
export default ToggleButton;
