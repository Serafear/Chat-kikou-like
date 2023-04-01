import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
/* this lines dont work on angular v15
// Then we find all the tests.
const context = (require as any).context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
*/
