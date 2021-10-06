import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'zelo-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  currentLang: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.getCurrentLanguage();
  }
  getCurrentLanguage() {
    this.currentLang = this.translate.currentLang;
  }

  languageChange(lang: string) {
    let useLanguage = lang === 'en' ? 'fr' : 'en';
    this.translate.use(useLanguage);
    this.getCurrentLanguage();
  }




}
