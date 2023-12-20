import { CardType } from "./card";

export type User = {
  id: number;
  name: string;
  surName: string;
  profile_picture: string;
  money: number;
  cardList: CardType[]
};
