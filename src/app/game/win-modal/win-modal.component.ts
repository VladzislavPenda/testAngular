import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.css']
})
export class WinModalComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log("winModal init.");
  }

  public close(event: any) {
    this.closeModal.emit(event);
  }

  ngOnDestroy() {
    console.log("WinModal cmp destroyed.");
  }
}
