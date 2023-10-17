import { Component } from '@angular/core';

@Component({
  selector: 'testgen-fourteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-fourteen';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
