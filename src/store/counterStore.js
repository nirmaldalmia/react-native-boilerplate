import { action, observable } from "mobx";

export class CounterStore {
  @observable counter = 0;
  @action incrementCount = () => {
    this.counter = this.counter + 1;
  };
}

export const counterStore = new CounterStore();
