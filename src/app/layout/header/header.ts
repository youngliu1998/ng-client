import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private https: HttpClient) {}

  testFetch() {
    this.https.get('http://localhost:3005/').subscribe((config) => {
      console.log(config);
    });
  }
}
