import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template: `
  <header id="header">
  <a class="home-link" href="/">
    <img class="logo" src="https://i.imgur.com/J303pQ4.png">
  </a>
  <div class="header-text">
    <div class="left">
      <h1 class="name">
        <a href="/">Josh Dinndorf</a>
      </h1>
      Things that are interesting to me around the web
    </div>
    <div class="right">
      <a href="https://linkedin.com/in/josh-dinndorf/" style="none">Contact</a>
    </div>
  </div>
</header>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
