import { Component, OnInit } from '@angular/core';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player-content',
  templateUrl: './player-content.component.html',
  styleUrls: ['./player-content.component.scss'],
})
export class PlayerContentComponent implements OnInit {
  userPlaylist: IPlaylist[];
  likedSongsPlaylist: any;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getLikedSongsPlaylist();
  }

  async getLikedSongsPlaylist() {
    this.userPlaylist = await this.spotifyService.getLikedPlaylist();
    console.log(this.userPlaylist);
  }
}
