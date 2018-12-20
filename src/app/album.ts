import { Track } from './track';

// Interface to define the data of type Album
export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
