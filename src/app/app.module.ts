import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './shared/app-config.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appInitializer = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.load();
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    AppConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializer,
        multi: true,
        deps: [AppConfigService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
