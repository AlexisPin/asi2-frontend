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
    const isUser = message.userSenderId === userId;
  
    return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isUser ? "flex-start" : "flex-end",
      }}> 
      <Typography variant="caption">{dayjs(message.date).format("HH:mm DD/MM/YYYY")}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: isUser ? "flex-start" : "flex-end",
          mb: 2,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 1,
            backgroundColor: isUser ? "primary" : "secondary",
          }}
        >
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
      </Box>
      </Box>
    );
  };

export default Message;