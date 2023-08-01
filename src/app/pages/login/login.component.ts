import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.verifyUrlToken();
  }

  verifyUrlToken() {
    const token = this.spotifyService.getUrlTokenCallback();

    if (!!token) {
      this.spotifyService.setAccessToken(token);
      this.router.navigate(['/player']);
    }
  }

  login() {
    window.location.href = this.spotifyService.getUrlLogin();
  }
}
