export type User = {
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

export type ChatUserType = {
  id: number;
  login: string;
  cardList: number[];
  account: number;
}