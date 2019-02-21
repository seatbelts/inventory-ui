import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './app-config';
import { environment } from './../../environments/environment';

@Injectable()

export class AppConfigService {

  appConfig: AppConfig;

  constructor(private injector: Injector) {

  }

  load() {
    const http = this.injector.get(HttpClient);

    return http.get(environment.configFile).subscribe((configResponse: AppConfig) => {
      this.appConfig = configResponse;
    });
  }

  get config() {
    return this.appConfig;
  }
}
