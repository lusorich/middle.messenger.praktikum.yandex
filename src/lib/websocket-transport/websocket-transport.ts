import EventBus from 'src/utils/Event-bus';

const BASE_WS_PATH = 'wss://ya-praktikum.tech/ws/chats/';

export const enum WS_EVENTS {
  Open = 'open',
  Error = 'error',
  Message = 'message',
  Close = 'close',
}

export default class WSTransport extends EventBus {
  protected endpoint: string;

  protected socket: WebSocket | null = null;

  private pingInterval: number = 0;

  constructor(userId: string, public chatId: string, tokenValue: string) {
    super();

    this.endpoint = `${BASE_WS_PATH}/${userId}/${chatId}/${tokenValue}`;
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send(JSON.stringify({ type: 'ping' }));
    }, 5000);

    this.on(WS_EVENTS.Close, () => {
      clearInterval(this.pingInterval);

      this.pingInterval = 0;
    });
  }

  connect(): Promise<void> {
    this.socket = new WebSocket(this.endpoint);

    this.subscribe(this.socket);

    this.setupPing();

    this.on(WS_EVENTS.Open, () => {
      console.log('open event', '');
    });

    this.on(WS_EVENTS.Close, () => {
      console.log('close event', '');
    });

    this.on(WS_EVENTS.Message, () => {
      console.log('message event');
    });

    this.on(WS_EVENTS.Error, () => {
      console.log('error event', '');
    });

    return new Promise((resolve) => {
      this.on(WS_EVENTS.Open, () => {
        resolve();
      });
    });
  }

  close() {
    this.socket?.close();
  }

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    if (!this.socket) {
      throw new Error('Нету активного соединения');
    }

    this.socket.send(data);
  }

  subscribe(socket: WebSocket) {
    socket.onopen = () => {
      this.emit(WS_EVENTS.Open);
    };

    socket.onmessage = (e) => {
      this.emit(WS_EVENTS.Message, e?.data ? JSON.parse(e.data) : '');
    };

    socket.onerror = () => {
      this.emit(WS_EVENTS.Error);
    };

    socket.onclose = () => {
      this.emit(WS_EVENTS.Close);
    };
  }
}
