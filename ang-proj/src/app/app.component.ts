import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-proj';
  selectedNumber: number = 0; // Default value
  wishes: string[] = [
    'Happy Birthday! 🎉 Wishing you a year full of blessings!',
    'May your birthday be filled with joy and laughter! 🥳',
    'Wishing you health, happiness, and success! 🎂',
    'Have a fantastic birthday celebration! 🎈',
    'Enjoy your special day to the fullest! 🎁'
  ];
  selectedWish: string = this.wishes[0]; // Default wish

  // Remove parameter and use the existing selectedNumber
  selectWish(): void {
    this.selectedWish = this.wishes[this.selectedNumber % this.wishes.length];
  }
}
