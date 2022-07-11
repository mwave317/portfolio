import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  position: boolean = false;
  blink: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.showPosition() }, 2500);
  }

  showPosition() {
    this.position = true;
    this.blink = true;
    setTimeout(() => { this.blink = false; }, 3500);
  }

}
