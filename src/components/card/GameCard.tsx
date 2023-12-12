import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import React from 'react';
import { AppState } from '../../store';
import { CardType } from '../../type/card';
import { useCardInfo } from './hooks/useCardInfo';

interface CardProps {
  id: number;
  type?: 'cardBuy' | 'cardSell' | 'login';
}

export const GameCard = ({ id }: CardProps) => {
  const card: CardType | undefined = useCardInfo({ id });

  const shopState = useSelector((state: AppState) => {
    return state.shop.shop_state;
  });

  if (!card) {
    return null;
  }
  return (
    <Card
      sx={{
        width: 345,
        margin: '24px',
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={card.imgUrl ?? 'https://daveceddia.com/images/beware-undefined-state.jpg'}
        title={card.name}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.primary">
            {'Energy: ' + card?.energy}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {'HP: ' + card?.hp}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {card.name ?? 'undefined'}
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
        <Button variant="contained" size="medium">
          {shopState === 'buy' ? 'Buy ($' + card.price + ')' : 'Sell'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
