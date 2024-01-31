import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITrack } from 'src/app/interfaces/ITrack';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentMusic: ITrack;
  artistsString: string;
  isPlaying: boolean;
  showPlayButton: boolean = true;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.isMusicPlaying();
    this.getCurrentTrackData();
  }

  async getCurrentTrackData() {
    this.currentMusic = await this.spotifyService.getPlayingSongData();
    const artistNames = this.currentMusic.artists.map((artist) => artist.name);
    this.artistsString = artistNames.join(', ');
  }

  logout() {
    this.spotifyService.logout();
  }

  play() {
    this.spotifyService.play();
    this.isPlaying = true;
  }

  stop() {
    this.spotifyService.stop();
    this.isPlaying = false;
  }

  async isMusicPlaying() {
    this.isPlaying = await this.spotifyService.isMusicPlaying();
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    this.showPlayButton = !this.isPlaying;
  }
}
