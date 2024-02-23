import styles from "./styles.module.scss";

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: (isActive: boolean) => void;
}

const ToggleButton = ({ isActive, onToggle }: ToggleButtonProps) => {
  return (
    <span
      id="toggle-button"
      className={`${styles.toggle_button} ${isActive && styles.toggle_active}`}
      onClick={() => onToggle(!isActive)}
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
};

export default ToggleButton;
