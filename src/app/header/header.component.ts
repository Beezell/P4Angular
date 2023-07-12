import { Component, OnInit, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setTheme();
  }

  mycheck: boolean = false;

  setTheme() {
    const theme = localStorage.getItem('theme');
    this.renderer.setAttribute(
      document.documentElement,
      'data-theme',
      theme || 'mylight'
    );
    this.mycheck = theme === 'mydark';
  }

  swapTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'mylight' ? 'mydark' : 'mylight';
    this.renderer.setAttribute(
      document.documentElement,
      'data-theme',
      targetTheme
    );
    localStorage.setItem('theme', targetTheme);
  }
}
