import { CardType } from './card';

export type UserType = {
  id: number;
  money: number;
  cardList: [CardType];  
  login:	string;
  pwd:	string;
  account:	number;
  lastName:	string;
  surName:	string;
  email:	string;
}

export type User = {
  id: number;
  name: string;
  surName: string;
  profile_picture: string;
  money: number;
  cardList: CardType[]
};

export type ChatUserType = {
  id: number;
  login: string;
  cardList: number[];
  account: number;
}