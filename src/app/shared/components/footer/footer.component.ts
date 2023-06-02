import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/share-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isDarkMode = false;

  constructor(private shareDataService: ShareDataService) {}

  ngOnInit() {
    this.shareDataService.subject.subscribe((isDarkMode) => {
      this.isDarkMode = !this.isDarkMode;
    });
  }
}
