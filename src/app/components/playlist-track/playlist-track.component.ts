import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ITrack } from 'src/app/interfaces/ITrack';

@Component({
  selector: 'app-playlist-track',
  templateUrl: './playlist-track.component.html',
  styleUrls: ['./playlist-track.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistTrackComponent implements OnInit {
  @Input()
  track: ITrack;

  constructor() {}

  ngOnInit(): void {}
}
