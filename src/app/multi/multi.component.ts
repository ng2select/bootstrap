import { Component, Directive, ElementRef, EventEmitter, Input, Output, OnInit, Host, HostBinding, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'multi-select',
  template: `
  <button (click)="toggle = !toggle" class="btn btn-select">select</button>
  <div [hidden]="!toggle">
  <select #select multiple (change)="change($event)" (blur)="toggle = false">
    <ng-content select="option"></ng-content>
  </select>
  </div>
  `,
  styleUrls: ['multi.component.css']
})
export class MultiComponent implements OnInit, AfterViewInit {
  @Input() ngModel: any[] = [];
  @Output() onChange = new EventEmitter<any>();
  @ViewChild('select') selectElRef;
  public toggle: boolean = false;

  constructor(private elem: ElementRef) {
    
  }

  ngOnInit() {

  }
  
  ngAfterViewInit(){
    this.logSelect();
    this.updateSelectList();
  }
  
  change($event){
    this.logSelect();
    var newVals = Array.apply(null, $event.target.options)  // convert to real Array
         .filter(option => option.selected)
         .map(option => option.value);
    this.onChange.emit(newVals);
  }
  
  // change(options) {
  //   this.selectedValues = Array.apply(null, options)  // convert to real Array
  //     .filter(option => option.selected)
  //     .map(option => option.value)
  // }
  
  logSelect(){
    console.log('#select', this.selectElRef);
  }
  
  updateSelectList() {
    let options = this.selectElRef.nativeElement.options;
    for (let i = 0; i < options.length; i++) {
      options[i].selected = this.ngModel.indexOf(options[i].value) > -1;
    }
  }

}