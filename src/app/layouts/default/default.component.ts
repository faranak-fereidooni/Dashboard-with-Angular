import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent {
  sideBarOpen = true;
  isDarkMode = false;
  darkMode: boolean | undefined;

  constructor(private shareDataService: ShareDataService) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.shareDataService.subject.next(this.isDarkMode);
    this.darkMode = this.isDarkMode;
  }
}
