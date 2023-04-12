export interface Movie {
    id: {
        timestamp: number;
        date: string;
    };
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    poster: string;
    genres: string[];
    backdrops: string[];
    reviewIds: string[];
}

export interface Props {
    movies: Movie[];
}
