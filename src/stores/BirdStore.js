import { observable, action, computed, decorate } from "mobx";

class BirdStore {
  birds = [];

  addBird = bird => {
    this.birds.push(bird);
  };

  get birdCount() {
    return this.birds.length;
  }
}

decorate(BirdStore, {
  birds: observable,
  addBird: action,
  birdCount: computed
});

const store = new BirdStore();
export default store;
