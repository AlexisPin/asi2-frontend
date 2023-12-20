import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { AppState } from '~/store';
import { messageType } from '~/type/message';

import {
  Box,
  Paper,
  Typography,
} from '@mui/material';

export const Message = ({message}:{message: messageType}) => {
    const userId = useSelector((state: AppState) => state.user.current_user_id);
    const isUser = message.senderId === userId;
  
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isUser ? "flex-end" : "flex-start",
      }}> 
      <Typography variant="caption">{dayjs(message.date).format("HH:mm DD/MM/YYYY")}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          mb: 2,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 1,
            backgroundColor: isUser ? "secondary" : "primary",
          }}
        >
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
      </Box>
      </Box>
    );
  };

export default Message;