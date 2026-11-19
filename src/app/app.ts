
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected isDark = signal(true);

  protected toggleTheme(): void {
    this.isDark.update(value => !value);
  }
}
