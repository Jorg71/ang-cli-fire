import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { defaultFirebase, FIREBASE_PROVIDERS} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyA23abRxJ8OgGJ0dKe-3WB4qOkk6oxeNWA",
    authDomain: "workbest-cap-1011.firebaseapp.com",
    databaseURL: "https://workbest-cap-1011.firebaseio.com",
    storageBucket: "workbest-cap-1011.appspot.com"
  })
]);
