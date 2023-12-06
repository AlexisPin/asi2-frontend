import { Grid } from '@mui/material';
import { Input } from '../components/form/input';
import { Button } from '../components/form/button';
import AddIcon from '@mui/icons-material/Add';

export const Login = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Input label="Name" />
      <Input label="Surname" />
      <Input label="Password" />
      <Input label="Confirm password" />

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={300}
      >
        <Button label="Cancel" variant="outlined" color="warning" />
        <Button label="Ok" variant="contained" color="success" startIcon={<AddIcon />} />
      </Grid>
    </Grid>
  );
};
