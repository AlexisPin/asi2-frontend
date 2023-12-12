import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { useCardInfo } from './hooks/useCardInfo';

import { useSelector } from 'react-redux';
import React from 'react';

interface CardProps {
  id: number;
  type?: 'cardBuy' | 'cardSell' | 'login';
}

export const GameCard = ({ id }: CardProps) => {
  const cardInfo: any = useCardInfo({ id });

  const shopState = useSelector((state) => {
    return state.shop.shop_state;
  });

  if (!id) {
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
        image={cardInfo.imgUrl ?? 'https://daveceddia.com/images/beware-undefined-state.jpg'}
        title={cardInfo.name}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.primary">
            {'Energy: ' + cardInfo?.energy}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {'HP: ' + cardInfo?.hp}
          </Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {cardInfo.name ?? 'undefined'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardInfo?.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="contained" size="medium">
          {shopState === 'buy' ? 'Buy ($' + cardInfo.price + ')' : 'Sell'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
