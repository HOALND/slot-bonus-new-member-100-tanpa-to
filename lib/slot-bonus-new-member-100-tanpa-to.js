'use babel';

import SlotBonusNewMember100TanpaToView from './slot-bonus-new-member-100-tanpa-to-view';
import { CompositeDisposable } from 'atom';

export default {

  slotBonusNewMember100TanpaToView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotBonusNewMember100TanpaToView = new SlotBonusNewMember100TanpaToView(state.slotBonusNewMember100TanpaToViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotBonusNewMember100TanpaToView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-bonus-new-member-100-tanpa-to:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotBonusNewMember100TanpaToView.destroy();
  },

  serialize() {
    return {
      slotBonusNewMember100TanpaToViewState: this.slotBonusNewMember100TanpaToView.serialize()
    };
  },

  toggle() {
    console.log('SlotBonusNewMember100TanpaTo was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
