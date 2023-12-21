import {
  useEffect,
  useState,
} from 'react';

import { messageType } from '~/type/message';

export const useGetMessages = (userId1: number, userId2: number | null) => {
  const [data, setData] = useState<messageType[]>([]);

  useEffect(() => {
    if (userId2) {
      fetch(`http://localhost:8083/messages/${userId1}/${userId2}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((err) => {
          throw new Error('Something went wrong to send the new message to DB : ', err);
        });
    }
  }, [userId1, userId2]);

  return data;
};

export const sendMessage = ({
  receiverId,
  senderId,
  message,
}: {
  receiverId: number;
  senderId: number;
  message: string;
}) => {
  const body = {
    content: message,
    sender_id: senderId,
    receiver_id: receiverId,
  };

  fetch('http://localhost:3000/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('Something went wrong to send the new message to DB : ', err);
    });
};
