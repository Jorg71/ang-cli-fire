import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  //title = 'app works!';

  constructor(af: AngularFire) {
    af.database.list('items').subscribe(items => console.log(items));
  }
  
}
