import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/app/model/language.model';

@Component({
  selector: 'zelo-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  currentLang: string;
  languages: Array<Languages>;

  @ViewChild('appMenu', { static: true }) appMenu: MatMenu;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.setLanguages();
    this.getCurrentLanguage();
  }

  setLanguages() {
    this.languages = [
      {
        label: "",
        value: "en"
      }, 
      {
      label: "English",
      value: "en"
    }, 
    {
    label: "French",
    value: "fr"
  }];
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
