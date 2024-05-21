import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ISavedTrack } from 'src/app/interfaces/ISavedTrack';
import { ITrack } from 'src/app/interfaces/ITrack';

@Component({
  selector: 'app-playlist-track',
  templateUrl: './playlist-track.component.html',
  styleUrls: ['./playlist-track.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistTrackComponent implements OnInit {
  @Input()
  track: ISavedTrack;
  @Input()
  index: number;
  count: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getArtistsNames(track: ITrack): string {
    return track.artists.map((artist) => artist.name).join(', ');
  }

  formatDuration(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  formatDate(isoString: string): string {
    const date = new Date(isoString);
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    } as const;
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  }
}
