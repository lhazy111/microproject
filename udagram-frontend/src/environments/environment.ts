// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  //apiHost: 'http://localhost:8080/api/v0'
  apiHost: 'http://a4620a178bff64f9b94f17c877135f8c-183267707.eu-west-2.elb.amazonaws.com:8080/api/v0'
  //abbea3372f48247a7aa781e21178fa0b-1936198396.eu-west-2.elb.amazonaws.com
  //apiHost: 'http://aa81b626eb9854f7eb592097db7d95b6-818601733.echoeu-west-2.elb.amazonaws.com:8080/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
