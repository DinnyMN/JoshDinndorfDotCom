import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <div id="footer">
  <p>Source:
    <a href="https://github.com/DinnyMN/JoshDinndorfDotCom" target="_blank">
      GitHub
    </a>
  | Based off:
    <a href="https://github.com/housseindjirdeh/angular2-hn" target="_blank">
      GitHub
    </a>
  </p>
</div>`
})

export class FooterComponent {
  constructor() { }
}
