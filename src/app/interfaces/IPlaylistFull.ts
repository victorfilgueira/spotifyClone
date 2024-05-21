import { ITrack } from './ITrack';

export interface IPlaylistFull {
  id: string;
  name: string;
  imageUrl: string;
  tracks: ITrack[];
}
