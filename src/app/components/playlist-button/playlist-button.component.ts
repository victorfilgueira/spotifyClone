import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-button',
  templateUrl: './playlist-button.component.html',
  styleUrls: ['./playlist-button.component.scss'],
})
export class PlaylistButtonComponent implements OnInit {
  @Input()
  playlistImage: string;
  @Input()
  playlistName: string;

  constructor() {}

  ngOnInit(): void {}
}
