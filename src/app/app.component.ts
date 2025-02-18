import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from "./frame/frame.component";
import { CommonModule } from '@angular/common';

declare var window: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'hello-ci-cd';
  surprise = false;
  domain: string = '';

  ngOnInit() {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    this.domain = baseUrl
      .replace('http://', '')
      .replace('https://', '')
      .replace(':4200', '');
  }

  surpriseNow() : void{
    this.surprise = !this.surprise;
  }

}
