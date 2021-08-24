export interface gameForm {
  playingUnits: PlayingUnit[];
}

export interface PlayingUnit {
  name: string;
  throwings: Throwings[];
}

export interface Throwings {
  multiplier: number;
  points: number;
}
