import { Component } from '@angular/core';
import { NewCmpComponent } from './new-cmp'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NewCmpComponent]
})
export class AppComponent {
  title = 'app works!';
}
