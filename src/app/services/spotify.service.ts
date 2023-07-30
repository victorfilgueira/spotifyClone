import { Injectable } from '@angular/core';
import { spotifyConfig } from 'src/environments/environment';
import SpotifyWebApi from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotify: SpotifyWebApi.SpotifyWebApiJs = null;

  constructor() {
    this.spotify = new SpotifyWebApi();
  }

  getUrlLogin() {
    const authEndpoint = `${spotifyConfig.authEndpoint}?`;
    const clientId = `client_id=${spotifyConfig.clientId}&`;
    const redirectUrl = `redirect_uri=${spotifyConfig.redirectUrl}&`;
    const scopes = `scope=${spotifyConfig.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getUrlTokenCallback() {
    if (!window.location.hash) return '';

    const params = window.location.hash.substring(1).split('&');

    return params[0].split('=')[1];
  }

  setAccessToken(token: string) {
    this.spotify.setAccessToken(token);
    localStorage.setItem('token', token);
    this.spotify.skipToNext();
  }
}
