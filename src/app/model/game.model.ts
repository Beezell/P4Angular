class Streams {
    streamer!: String;
    title!: String;
    language!: String;
    viewerCount!: Number;
  }

  class ViewerHistory {
    date!: Date;
    viewers!: Number;
  };


export class Game{
    _id!: String;
    name!: String;
    firstDayInTop!: Date;
    igdbId!: String;
    cover!: String;
    firstReleaseDate!: Date;
    genres!: [];
    summary!: String;
    platforms!: [];
    involvedCompanies!: [];
    streams!: Streams[];
    viewerHistory!: ViewerHistory[];
}

