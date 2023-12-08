import MuiButton, { ButtonOwnProps } from '@mui/material/Button';

interface ButtonProps extends ButtonOwnProps {
  label: string;
}

export const Button = ({ color, label, variant, startIcon }: ButtonProps) => {
  return (
    <MuiButton color={color} variant={variant} startIcon={startIcon}>
      {label}
    </MuiButton>
  );
};
