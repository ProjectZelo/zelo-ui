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
  currentLang: string;
  imageSrc: string;
  currentMode = 'light';

  @Output() isDarkMode: EventEmitter<boolean> = new EventEmitter();

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.getCurrentLanguage();
  }

  getCurrentLanguage() {
    this.currentLang = this.translate.currentLang;
    this.imageSrc = this.currentLang === 'fr' ? '../../assets/images/flags/US.svg' : '../../assets/images/flags/CA.svg'; 
  }

  languageChange(lang: string) {
    let useLanguage = lang === 'en' ? 'fr' : 'en';
    this.translate.use(useLanguage);
    this.getCurrentLanguage();
  }

  themeChange(currentMode: string) {
    const isDarkModeOn = currentMode === 'light' ? true : false;
    this.isDarkMode.emit(isDarkModeOn);
    this.currentMode = isDarkModeOn ? 'dark' : 'light';
  }
}
