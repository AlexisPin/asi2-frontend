import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { useCardInfo } from './hooks/useCardInfo';
import { update_transaction_state } from '~/slices/shopSlice';
import { update_current_user } from '~/slices/userSlice';

export const GameCard = ({
  id,
  setSelectedCard,
}: {
  id: number;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const card = useCardInfo(id);

  const dispatch = useDispatch();

  const shopState = useSelector((state: AppState) => {
    return state.shop.shop_state;
  });

  const user_id = useSelector((state: AppState) => {
    return state.user.current_user_id;
  });

  const handleBuy = async () => {
    const response = await fetch(`http://localhost:8083/store/buy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        card_id: id,
      }),
    });
    const isCardBought = await response.json();
    dispatch(update_transaction_state(isCardBought ? 'success' : 'error'));
    if (isCardBought) {
      setSelectedCard(-1);
      const userResponse = await fetch(`http://localhost:8083/user/${user_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newUser = await userResponse.json();
      dispatch(update_current_user(newUser));
    }

    if (!response.ok) {
      throw new Error('Error buying card');
    }
  };

  const handleSell = async () => {
    const response = await fetch(`http://localhost:8083/store/sell`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        card_id: id,
      }),
    });
    const isCardSold = await response.json();
    dispatch(update_transaction_state(isCardSold ? 'success' : 'error'));

    if (isCardSold) {
      const userResponse = await fetch(`http://localhost:8083/user/${user_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newUser = await userResponse.json();
      dispatch(update_current_user(newUser));
      setSelectedCard(-1);
    }

    if (!response.ok) {
      throw new Error('Error selling card');
    }
  };

  if (!card || id === -1) {
    return null;
  }

  return (
    <Card
      sx={{
        width: 345,
        margin: '24px',
        maxHeight: '400px',
      }}
    >
      <CardMedia sx={{ height: 200 }} image={card.imgUrl} title={card.name} />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.primary">
            {'Energy: ' + card.energy}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {'HP: ' + card.hp}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card?.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          size="medium"
          onClick={shopState === 'buy' ? handleBuy : handleSell}
        >
          {shopState === 'buy' ? 'Buy' : 'Sell'}
        </Button>
      </CardActions>
    </Card>
  );
};
