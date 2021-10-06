import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { horizontalNavigation } from '../data/navigation.constant';

@Component({
  selector: 'zelo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationItem = horizontalNavigation;

  currentMode = 'light';

  @Output() isDarkMode: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }



  themeChange(currentMode: string) {
    const isDarkModeOn = currentMode === 'light' ? true : false;
    this.isDarkMode.emit(isDarkModeOn);
    this.currentMode = isDarkModeOn ? 'dark' : 'light';
  }
}
