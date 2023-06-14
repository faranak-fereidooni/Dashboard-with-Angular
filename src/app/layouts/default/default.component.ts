import { OverlayContainer } from '@angular/cdk/overlay';
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

  constructor(
    private shareDataService: ShareDataService,
    private overlayContainer:OverlayContainer
    ) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.shareDataService.subject.next(this.isDarkMode);
    
    // for overlay
    const darkModeClass = 'darkMode'
    const classes = this.overlayContainer.getContainerElement().classList;
    if(this.isDarkMode){
    classes.add(darkModeClass)
    }
    else{
      classes.remove(darkModeClass)
    }
  }
}
