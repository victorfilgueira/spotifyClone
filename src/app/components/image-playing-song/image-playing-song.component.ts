import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-image-playing-song',
  templateUrl: './image-playing-song.component.html',
  styleUrls: ['./image-playing-song.component.scss'],
})
export class ImagePlayingSongComponent implements OnInit {
  imageUrl: string;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getCurrentTrackImage();
  }

  async getCurrentTrackImage() {
    this.imageUrl = await this.spotifyService.getPlayingSongImageUrl();
  }
}
