import { LightningElement } from 'lwc';
export default class parentCustomLookupLWC extends LightningElement {
  // handel custom lookup component event 
    lookupRecord(event){
        alert('value from parent comp is ' +  JSON.stringify(event.detail.selectedRecord));
    }
}
