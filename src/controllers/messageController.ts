import WSTransport, {
  WS_EVENTS,
} from 'src/lib/websocket-transport/websocket-transport';
import { ACTIONS, store } from 'src/utils/store';

export class MessageController {
  private clients: Map<string, WSTransport> = new Map();

  static __instance: MessageController;

  constructor() {
    if (MessageController.__instance) {
      return MessageController.__instance;
    }

    MessageController.__instance = this;
  }

  async connect(userId: string, chatId: string, chatToken: string) {
    if (this.clients.has(chatId)) {
      this.getOldMessages(chatId);
      return;
    }

    const client = new WSTransport(userId, chatId, chatToken);

    this.clients.set(chatId, client);

    await client.connect();

    client.on(WS_EVENTS.Message, (data) => {
      if (data && data.type === 'message') {
        store.dispatch(ACTIONS.ADD_MESSAGES, { chatId, messages: data });
      }
      if (Array.isArray(data)) {
        store.dispatch(ACTIONS.ADD_MESSAGES, {
          chatId,
          messages: data?.reverse(),
        });
      }
    });

    this.getOldMessages(chatId);
  }

  sendMessage(chatId: string, message: string) {
    const client = this.clients.get(chatId);

    if (!client) {
      throw new Error('Нет соединения с чатом');
    }

    client.send(
      JSON.stringify({
        type: 'message',
        content: message,
      }),
    );
  }

  getOldMessages(chatId: string) {
    const client = this.clients.get(chatId);

    if (!client) {
      throw new Error('Нет соединения с чатом');
    }

    client.send(
      JSON.stringify({
        type: 'get old',
        content: '0',
      }),
    );
  }

  close(chatId: string) {
    this.clients.delete(chatId);
  }
}

export default new MessageController();
