import { IPlaylist } from '../interfaces/IPlaylist';
import { IPlaylistFull } from '../interfaces/IPlaylistFull';
import { ISavedTrack } from '../interfaces/ISavedTrack';
import { ITrack } from '../interfaces/ITrack';
import { IUser } from '../interfaces/IUser';

export function spotifyUserToUser(
  user: SpotifyApi.CurrentUsersProfileResponse
): IUser {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url,
  };
}

export function spotifyPlaylistToPlaylist(
  playlist: SpotifyApi.PlaylistObjectSimplified
): IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop().url,
  };
}

export function spotifySavedTrackToITrack(
  savedTrack: SpotifyApi.SavedTrackObject
): ISavedTrack {
  return {
    id: savedTrack.track.id,
    title: savedTrack.track.name,
    artists: savedTrack.track.artists,
    addedDate: savedTrack.added_at,
    album: {
      id: savedTrack.track.album.id,
      name: savedTrack.track.album.name,
      imageUrl: savedTrack.track.album.images[0].url,
    },
    tempo: savedTrack.track.duration_ms,
  };
}
