import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { useCardInfo } from './hooks/useCardInfo';

interface CardProps {
    id: number;
    type?: "cardBuy" | "cardSell" | "login";
}

export const GameCard = ({ id, type = "cardBuy" }: CardProps) => {
    const cardInfo: any = useCardInfo({ id });

    switch (type) {
        case "cardBuy":
            return (
                <Card sx={{ 
                    width: 345,
                    margin: '24px',
                }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={cardInfo.imgUrl ?? "https://daveceddia.com/images/beware-undefined-state.jpg"}
                        title={cardInfo.name}
                    />
                    <CardContent>
                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: "space-between"
                        }}>
                            <Typography variant="body2" color="text.primary">
                                {"Energy: " + cardInfo?.energy}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {"HP: " + cardInfo?.hp}
                            </Typography>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {cardInfo.name ?? "undefined"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cardInfo?.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                            <Button variant="contained" size="medium">{"Buy ($" + cardInfo.price + ")"}</Button>
                    </CardActions>
                </Card>
            );
        case "cardSell":
        return (
            <Card sx={{ 
                width: 345,
                margin: '24px',
            }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={cardInfo.imgUrl ?? "https://daveceddia.com/images/beware-undefined-state.jpg"}
                    title={cardInfo.name}
                />
                <CardContent>
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: "space-between"
                    }}>
                        <Typography variant="body2" color="text.primary">
                            {"Energy: " + cardInfo?.energy}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {"HP: " + cardInfo?.hp}
                        </Typography>
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardInfo.name ?? "undefined"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cardInfo?.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                        <Button variant="contained" size="medium">Sell</Button>
                </CardActions>
            </Card>
        );
        case "login":
            return <div>je suis un profil login</div>;
    }
};

export default GameCard;
