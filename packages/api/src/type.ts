export type Category = {
  title: string;
  members: Member[];
};

export type Member = {
  id: number | string; // e.g. for a channel `id` is: `@sawissgoldmazaneh`
  type: 'private' | 'group' | 'supergroup' | 'channel';
  title?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
};
