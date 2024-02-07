import { Injectable } from '@angular/core';
import { spotifyConfig } from 'src/environments/environment';
import SpotifyWebApi from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import {
  spotifyPlaylistToPlaylist,
  spotifyUserToUser,
} from '../Utils/SpotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';
import { ITrack } from '../interfaces/ITrack';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotify: SpotifyWebApi.SpotifyWebApiJs = null;
  user: IUser;

  constructor(private router: Router) {
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
    if (!this.user) {
      await this.getSpotifyUser();
    }
    const playlists = await this.spotify.getUserPlaylists(this.user.id);
    return playlists.items.map(spotifyPlaylistToPlaylist);
  }

  async getPlayingSongImageUrl(): Promise<string> {
    const currentTrack = await this.spotify.getMyCurrentPlayingTrack();
    const lastPlayedTrack = (await this.spotify.getMyRecentlyPlayedTracks())
      .items[0].track;

    if (!currentTrack) {
      return '';
    } else {
      return currentTrack.item.album.images[0].url;
    }
  }

  async getPlayingSongData(): Promise<ITrack> {
    const currentTrack = await this.spotify.getMyCurrentPlayingTrack();

    const currentMusic: ITrack = {
      id: currentTrack.item.id,
      title: currentTrack.item.name,
      artists: [...currentTrack.item.artists],
      album: {
        id: currentTrack.item.album.id,
        name: currentTrack.item.album.name,
        imageUrl: currentTrack.item.album.images[0].url,
      },
      tempo: '',
    };

    return currentMusic;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async play(): Promise<void> {
    this.spotify.play();
  }

  async stop(): Promise<void> {
    this.spotify.pause();
  }

  async isMusicPlaying(): Promise<boolean> {
    const playbackInfo = await this.spotify.getMyCurrentPlaybackState();
    return playbackInfo.is_playing;
  }

  async forward(): Promise<void> {
    this.spotify.skipToNext();
  }

  async back(): Promise<void> {
    this.spotify.skipToPrevious();
  }

  async getLikedPlaylist(): Promise<any> {
    this.spotify.getMySavedTracks();
    if (!this.user) {
      await this.getSpotifyUser();
    }
    const playlist = await this.spotify.getMySavedTracks(this.user.id);
    return playlist;
  }
}
