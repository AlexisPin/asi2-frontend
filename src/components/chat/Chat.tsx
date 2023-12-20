import {
  useEffect,
  useState,
} from 'react';

import {
  MessageCircle,
  SendIcon,
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { AppState } from '~/store';
import { messageType } from '~/type/message';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '~/type/socket';

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

export const Chat = ({
  socket,
}: {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [userDiscussionId, setUserDiscussionId] = useState(null);

  const userId = useSelector((state: AppState) => state.user.current_user_id);

  const [messages, setMessages] = useState<messageType[]>([]);

  const initMessages = useGetMessages({ userId1: userId, userId2: userDiscussionId });
  const handleSend = useSendMessage;

  // Load history messages when change of discussion
  useEffect(() => {
    console.log(initMessages, userId, userDiscussionId)
    setMessages(initMessages)
  }, [userDiscussionId]);

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const resetInputValue = () => {
    setInput('');
  };

  const handleSendMessage = () => {
    if (userDiscussionId) {
      resetInputValue();
      handleSend({ senderId: userId, receiverId: userDiscussionId, message: input });
    }
  }

  useEffect(() => {
    socket.on('chat_message', (webSocketMessage) => {
      const formatMessage = {
        date: new Date(webSocketMessage.timestamp),
        content: webSocketMessage.content,
        userSenderId: webSocketMessage.sender_id,
        conversationId: webSocketMessage.conversation_id,
      } satisfies messageType;

      console.log({ formatMessage });

      setMessages((prev) => [...prev, formatMessage]);
    });
    return () => {
      socket.off('chat_message');
    };
  }, [socket]);

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
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        zIndex: 10,
      }}
    >
      <Header
        setIsOpen={setIsOpen}
        userDiscussionId={userDiscussionId}
        setUserDiscussionId={setUserDiscussionId}
        socket={socket}
      />
      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        {messages.length ? messages.map((message, index) => (
          <Message key={index} message={message} />
        )): null}
      </Box>
      <Box sx={{ p: 2, backgroundColor: '#ecf0f5' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              placeholder="Type a message"
              value={input}
              onChange={handleInputChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage()
                }
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => handleSendMessage()}
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
