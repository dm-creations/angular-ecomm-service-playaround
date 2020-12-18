import { Component } from '@angular/core';

// This library is the 'component decorator' 🤔

// and 👇 this is a decorator function that indicates that the following class is a component and provides Metadata about the component ( including its selector, templates, styles)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {}

// DXLM you can include template literal of raw HTML in @Component({template:`<my-html></my-html>'})

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/