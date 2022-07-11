import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showToolbar: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width > 380) {
      this.showToolbar = true;

    }
  }

  onShowToolbar() {
    this.showToolbar = !this.showToolbar;
  }

}
