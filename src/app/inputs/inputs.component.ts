import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() placeholderfromheader : string='';
  @Output() childToParent = new EventEmitter();
  handleInputEvent(event:Event){
    this.childToParent.emit(event);
  }
}
