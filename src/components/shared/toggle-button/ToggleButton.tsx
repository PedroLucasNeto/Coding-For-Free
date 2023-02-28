import "./ToggleButton.scss";

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: (isActive: boolean) => void;
}

const ToggleButton = ({ isActive, onToggle }: ToggleButtonProps) => {
  return (
    <span
      id="toggleButton"
      className={isActive ? "toggle_button toggle_active" : "toggle_button"}
      onClick={() => onToggle(!isActive)}
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
};

export default ToggleButton;
