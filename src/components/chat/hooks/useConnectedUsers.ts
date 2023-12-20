import {
  useEffect,
  useState,
} from 'react';

import { ChatUserType } from '~/type/user';

export const useConnectedUsers = (userChanged: boolean):ChatUserType[] => {
  const [data, setData] = useState<ChatUserType[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((err) => {
      throw new Error('Something went wrong to send the new message to DB : ', err);
    });
  },[userChanged])

  return data;
};
