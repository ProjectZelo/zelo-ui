import { Component, OnInit } from '@angular/core';
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

}
