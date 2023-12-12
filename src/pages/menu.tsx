import { Button, Divider, Stack } from '@mui/material';
import { navigation } from '../core/navigation';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Stack
      direction="column"
      alignContent="center"
      alignItems="center"
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
      margin={'10px'}
    >
      {navigation.map((item, index) => (
        <Link to={item.link} key={index}>
          <Button size={'large'} startIcon={item.icon}>
            <span>{item.name}</span>
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default Menu;
