// Used to emit events between React components and Phaser scenes

import { Events } from "phaser";


// Used to emit events between React components and Phaser scenes

let EventBus: Phaser.Events.EventEmitter | null = null;

if (typeof window !== "undefined") {
  EventBus = new Events.EventEmitter();
}

export const getEventBus = (): Phaser.Events.EventEmitter | null => {
  return EventBus;
};

