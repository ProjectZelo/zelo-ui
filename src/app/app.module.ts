import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routing';
import { ZeloModule } from 'src/@zelo';
import { HeaderComponent } from './header/header.component';
import { ZeloNavigationComponent } from './zelo-navigation/zelo-navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ApiService } from './api-store/services/api.service';
import { SharedModule } from './shared/shared.module';
import { IconsModule } from './core/icons/icons.module';
import { FooterComponent } from './footer/footer.component';
import { LanguagesComponent } from './shared/languages/languages.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export function loadLocale(): string {
  // TODO: get user's preffered language
  return 'en';
}

const routerConfig: ExtraOptions = {
  onSameUrlNavigation: 'reload', // TODO: Confirm a use case fo this
  scrollPositionRestoration: 'enabled', // maintain scroll position on navigating back
  preloadingStrategy: PreloadAllModules// TODO: reconsider when app grows in size
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ZeloNavigationComponent,
    FooterComponent,
    LanguagesComponent



  ],
  imports: [
    BrowserModule,
    IconsModule,
    BrowserAnimationsModule,
    ZeloModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    StoreModule.forRoot(reducers, {
      metaReducers
    }),

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en')
  }
}












