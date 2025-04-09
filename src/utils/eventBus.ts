type EventCallback = (...args: any[]) => void;

class EventBus {
  private events: Map<string, EventCallback[]>;

  constructor() {
    this.events = new Map();
  }

  on(event: string, callback: EventCallback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)?.push(callback);
  }

  off(event: string, callback: EventCallback) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit(event: string, ...args: any[]) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(...args));
    }
  }

  clear(event?: string) {
    if (event) {
      this.events.delete(event);
    } else {
      this.events.clear();
    }
  }
}

export const eventBus = new EventBus();

// 定义事件类型
export const EVENT_TYPES = {
  USER_PROFILE_VISIT: "USER_PROFILE_VISIT",
  REFRESH_MESSAGES: "REFRESH_MESSAGES",
} as const;

// 定义事件数据类型
export interface UserProfileVisitEvent {
  userId: string;
  fromPage: string;
  timestamp: number;
}
