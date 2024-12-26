import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  // template: '<h1>hello world</h1>', // we use templateUrl instead
  standalone: true, //depends on the version default true
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
