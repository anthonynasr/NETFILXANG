import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'nf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {
  @Input() data:any = [];
  @Input() header?:any[];
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(changes['data']?.currentValue?.length > 0 && !this.header){
      this.header = this.getHeadersFromData()
    }
  }

  getHeadersFromData(){
    return Object.keys(this.data[0]);
  }
}
