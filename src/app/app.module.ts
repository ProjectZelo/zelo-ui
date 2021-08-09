import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routing';
import { FuseModule } from 'src/@fuse';


const routerConfig: ExtraOptions = {
  onSameUrlNavigation: 'reload', // TODO: Confirm a use case fo this
  scrollPositionRestoration: 'enabled', // maintain scroll position on navigating back
  preloadingStrategy: PreloadAllModules// TODO: reconsider when app grows in size
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FuseModule,
    RouterModule.forRoot(appRoutes, routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
