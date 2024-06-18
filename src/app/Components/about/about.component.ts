import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor() { }

  handleImageClick() {
    const heartEmoji = document.querySelector('.heart-emoji');

    if (heartEmoji) {
      heartEmoji.classList.add('pulse');
      setTimeout(() => {
        heartEmoji.classList.remove('pulse');
      }, 10000); // 10 segundos
    }
  }
}
