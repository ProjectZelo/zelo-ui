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
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.languageSubsription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }

  ngOnDestroy() {
    this.languageSubsription.unsubscribe();
  }
}
