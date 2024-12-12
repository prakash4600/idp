import { APP_INITIALIZER, ApplicationConfig, Component, NgModule, OnInit } from '@angular/core';
import { provideRouter,ActivatedRoute, RouterOutlet } from '@angular/router';
// import { KeycloakAngularModule, KeycloakService, KeycloakEventType, KeycloakBearerInterceptor } from 'keycloak-angular';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { routes } from './app.routes';
import { TriggerEnvService } from './trigger-env.service';
// import { appConfig } from './app.config';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    ClipboardModule,
    HttpClientModule,
    FormsModule,
    RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  environment: any;

  constructor(private runtimeConfigService: TriggerEnvService ){

  }

  ngOnInit() {
    console.log("environment",this.runtimeConfigService.getConfig('environment'))
    this.environment = this.runtimeConfigService.getConfig('environment') || 'Unknown';
  }
  title = 'keycloak-angular-example';
  // keycloakService: KeycloakService;
}
