import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-button',
  templateUrl: './playlist-button.component.html',
  styleUrls: ['./playlist-button.component.scss'],
})
export class PlaylistButtonComponent implements OnInit {
  playlistImage: string =
    'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fHNwb3RpZnl8ZW58MHx8fHwxNjQ2MjE2MDQ2&ixlib=rb-1.2.1&q=80&w=2000';
  playlistName: string = 'TRAP & EARGASMS';

  constructor() {}

  ngOnInit(): void {}
}
