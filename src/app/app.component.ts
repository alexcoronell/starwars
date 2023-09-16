import { Component, OnInit, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';
  togleSidenavButton: ElementRef = new ElementRef('togleSidenavButton');
  showFiller: boolean = false;
}
