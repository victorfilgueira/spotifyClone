import { Injectable } from '@angular/core';
import { spotifyConfig } from 'src/environments/environment';
import SpotifyWebApi from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import {
  spotifyPlaylistToPlaylist,
  spotifyUserToUser,
} from '../Utils/SpotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotify: SpotifyWebApi.SpotifyWebApiJs = null;
  user: IUser;

  constructor() {
    this.spotify = new SpotifyWebApi();
  }

  async initializer() {
    if (!!this.user) {
      return true;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      this.setAccessToken(token);
      await this.getSpotifyUser();
      return !!this.user;
    } catch (error) {
      return false;
    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotify.getMe();
    this.user = spotifyUserToUser(userInfo);
    console.log(this.user);
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
  }

  async getUserPlaylists(): Promise<IPlaylist[]> {
    console.log(this.user);
    const playlists = await this.spotify.getUserPlaylists(this.user.id);
    console.log(playlists);
    return playlists.items.map(spotifyPlaylistToPlaylist);
  }
}
