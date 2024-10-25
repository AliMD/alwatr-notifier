export type Category = {
  title: string;
  members: Member[];
};

export type Member = {
  id: number;
  type: 'private' | 'group' | 'supergroup' | 'channel';
  title?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
};

export type NotifyOption = {
  categoryId: string;
  message: string;
  markdown: boolean;
};
