'use babel';

export default class SlotBonusNewMember100TanpaToView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('slot-bonus-new-member-100-tanpa-to');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The SlotBonusNewMember100TanpaTo package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
