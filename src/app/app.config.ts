// import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
// // import Keycloak from 'keycloak-js'

// import { routes } from './app.routes';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

// // old code
// function initializeKeycloak(keycloak: KeycloakService) {
//   const realm = localStorage.getItem('userAD');
//   console.log("realm",realm)
//   return () =>
//     keycloak.init({
//       config: {
//         url: "https://40.76.120.158:8443/",
//         realm: "AD",
//         clientId: 'angular_login',
       
//       },
//       initOptions: {
//         checkLoginIframe: false ,
//         onLoad: 'check-sso', // 'login-required' , 'check-sso'
//         // silentCheckSsoRedirectUri:
//         //   window.location.origin + '/assets/silent-check-sso.html'
//       },
//       enableBearerInterceptor: true,
    
//     });
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     {
//       provide: APP_INITIALIZER,
//       useFactory: initializeKeycloak,
//       multi: true,
//       deps: [KeycloakService]
//     },
//     KeycloakService,
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: CredentialsInterceptor,
//       multi: true
//     }
//   ]
// };

// // new code from chatgpt

// export function getRealmFromEmail(email: string): string {
//   const domain = email.split('@')[1].toLowerCase();
//   const realmMapping: { [key: string]: string } = {
//     'centific.com': 'Centific',
//     'anotherdomain.com': 'anotherdomain',
//   };
//   return realmMapping[domain] || 'default'; // Default realm fallback
// }

// // Keycloak base configuration
// // export const keycloakBaseConfig = {
// //   url: 'https://<keycloak-server>/auth', // Keycloak server URL
// //   clientId: 'angular-app',
// //   onLoad: 'login-required' as Keycloak.KeycloakOnLoad,
// // };

// // Initialize Keycloak with dynamic realm selection
// //  function initializeKeycloak(email: string): Promise<Keycloak.KeycloakInstance> {
// //   const realm = getRealmFromEmail(email); // Dynamically select the realm
// //   const keycloakConfig = { ...keycloakBaseConfig, realm };

// //   const keycloak = new Keycloak(keycloakConfig);
// //   return new Promise((resolve, reject) => {
// //     keycloak
// //       .init({ onLoad: keycloakConfig.onLoad })
// //       .then(authenticated => {
// //         if (authenticated) {
// //           resolve(keycloak);
// //         } else {
// //           reject('User is not authenticated');
// //         }
// //       })
// //       .catch(err => {
// //         reject('Keycloak initialization failed: ' + err);
// //       });
// //   });
// // }