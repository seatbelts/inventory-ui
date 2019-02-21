import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomHttpService } from 'src/app/core/custom-http.service';
import { AppConfigService } from './shared/app-config.service';

const appInitializer = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.load();
  };
};

export function customHttpFactory(http: HttpClient) {
  return new CustomHttpService(http);
}

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
    },
    {
      provide: CustomHttpService,
      useFactory: customHttpFactory,
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
