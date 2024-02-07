import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playlist-track',
  templateUrl: './playlist-track.component.html',
  styleUrls: ['./playlist-track.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistTrackComponent {}
