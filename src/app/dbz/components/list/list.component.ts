import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent  {

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string) :void {

    if( !id ) return;

    console.log({id});

    this.onDelete.emit(id);
  }

}
