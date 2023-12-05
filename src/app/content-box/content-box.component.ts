import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrl: './content-box.component.css'
})
export class ContentBoxComponent implements OnInit{
  @Input() theme: string = "theme-light";

  constructor() { }

  ngOnInit(): void {}
}
