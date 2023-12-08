import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputProps {
  label: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={label} variant="standard" />
    </Box>
  );
};
