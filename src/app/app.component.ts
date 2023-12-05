import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Angular Themes';

  // storedTheme = "theme-light";
  storedTheme: string = localStorage.getItem('theme-color')!;

  constructor() {}

  ngOnInit() {}

  setTheme(theme: string) {
    // this.storedTheme = theme;
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color')!;
  }
}
