import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent {
  sideBarOpen = true;
  isDarkMode = false;
constructor(private overlayContainer:OverlayContainer){}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    // if (this.isDarkMode) {
    //   document.body.classList.remove('darkMode');
    // } else {
    //   document.body.classList.add('darkMode');
    // }
  }

  }

