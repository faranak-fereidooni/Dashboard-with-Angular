import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDarkTheme = true;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  
toggleSideBar(){
this.toggleSideBarForMe.emit();
setTimeout(()=>{
  window.dispatchEvent(new Event('resize'));
}, 300)
}
toggleTheme(){
  this.isDarkTheme = !this.isDarkTheme;
}
}
