import { Component, OnInit } from '@angular/core';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { ISavedTrack } from 'src/app/interfaces/ISavedTrack';
import { ITrack } from 'src/app/interfaces/ITrack';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player-content',
  templateUrl: './player-content.component.html',
  styleUrls: ['./player-content.component.scss'],
})
export class PlayerContentComponent implements OnInit {
  tracks: ISavedTrack[];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getLikedSongsPlaylist();
  }

  async getLikedSongsPlaylist() {
    this.tracks = await this.spotifyService.getLikedPlaylist();
  }
}
