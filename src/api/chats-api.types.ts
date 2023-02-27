export type GetChatsQueryParams = {
  offset?: number;
  limit?: number;
  title?: string;
};

export type CreateChatBodyParams = {
  title: string;
};

export type DeleteChatBodyParams = {
  chatId: number;
};

export type ChatAddUsersParams = {
  users: number[];
  chatId: number;
};

export type ChatDeleteUsersParams = ChatAddUsersParams;
