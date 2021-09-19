import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routing';
import { ZeloModule } from 'src/@zelo';
import { HeaderComponent } from './header/header.component';
import { ZeloNavigationComponent } from './zelo-navigation/zelo-navigation.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';




const routerConfig: ExtraOptions = {
  onSameUrlNavigation: 'reload', // TODO: Confirm a use case fo this
  scrollPositionRestoration: 'enabled', // maintain scroll position on navigating back
  preloadingStrategy: PreloadAllModules// TODO: reconsider when app grows in size
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ZeloNavigationComponent




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ZeloModule,

    RouterModule.forRoot(appRoutes, routerConfig),

    StoreModule.forRoot(reducers, {
      metaReducers
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }












