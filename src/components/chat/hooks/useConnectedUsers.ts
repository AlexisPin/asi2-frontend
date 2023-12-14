import { UserType } from '~/type/user';

export const useConnectedUsers = (): Partial<UserType>[] => {
  const tempData:Partial<UserType>[] = [
    {
      id: 1,
      surName: 'Ladrien',
    },
    {
      id: 2,
      surName: 'Coskar',
    },
    {
      id: 3,
      surName: 'Palexis',
    },
    {
      id: 4,
      surName: 'Géo',
    },
  ];

  return tempData;
};
