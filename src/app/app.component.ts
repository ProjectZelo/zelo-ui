import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'zelo-ui';
  lang: string;
  languageSubsription: Subscription;
  isDarkModeOn: boolean;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.languageSubsription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }

  getMode(e: boolean) {
    this.isDarkModeOn = e;
  }

  ngOnDestroy() {
    this.languageSubsription.unsubscribe();
  }
}
