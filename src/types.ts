export interface MouseLeave {
  handleMouseLeave: () => void;
  setMouseOut: React.Dispatch<React.SetStateAction<boolean>>;
}