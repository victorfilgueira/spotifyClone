export interface ISavedTrack {
  id: string;
  title: string;
  addedDate: string;
  artists: {
    id: string;
    name: string;
  }[];
  album: {
    id: string;
    name: string;
    imageUrl: string;
  };
  tempo: number;
}
