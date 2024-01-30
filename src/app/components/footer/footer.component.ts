import { Component, OnInit } from '@angular/core';
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

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getCurrentTrackData();
  }

  async getCurrentTrackData() {
    this.currentMusic = await this.spotifyService.getPlayingSongData();
    console.log(this.currentMusic);

    const artistNames = this.currentMusic.artists.map((artist) => artist.name);

    this.artistsString = artistNames.join(', ');
  }
}
