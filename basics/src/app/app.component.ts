import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name = 'Luis';
  imgURL = 'https://picsum.photos/id/237/500/500';

  getName(): string {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = e.target.value;
  }
}
