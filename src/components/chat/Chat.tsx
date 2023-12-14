import { useState } from 'react';

import {
  MessageCircle,
  SendIcon,
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { AppState } from '~/store';

import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';

import { Header } from './components/Header';
import Message from './components/Message';
import {
  useGetMessages,
  useSendMessage,
} from './hooks/useMessages';

export const Chat = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [userDiscussionId, setUserDiscussionId] = useState(1);

  const userId = useSelector((state: AppState) => state.user.current_user_id);

  const messages = useGetMessages({userId1: userId, userId2: userDiscussionId})

  const handleSend = useSendMessage;

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  if (!isOpen) {
    return (
      <IconButton
        aria-label="messagecircle"
        color="inherit"
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MessageCircle
          style={{
            backgroundColor: '#313131',
            padding: '10px',
            borderRadius: '20px',
          }}
        />
      </IconButton>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        backgroundColor: '#d8dfec',
        height: '90%',
        width: '500px',
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
        <Header setIsOpen={setIsOpen} userDiscussionId={userDiscussionId} setUserDiscussionId={setUserDiscussionId}/>
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </Box>
        <Box sx={{ p: 2, backgroundColor: "#ecf0f5"}}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                placeholder="Type a message"
                value={input}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                size="large"
                color="primary"
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => handleSend({userDiscussionId: userDiscussionId, message: input})}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
    </div>
  );
};

export default Chat;
