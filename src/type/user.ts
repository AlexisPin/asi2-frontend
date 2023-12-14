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
};
