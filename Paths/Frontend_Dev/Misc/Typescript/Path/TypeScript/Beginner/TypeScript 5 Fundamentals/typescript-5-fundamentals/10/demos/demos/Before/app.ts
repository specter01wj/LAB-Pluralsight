import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";

let inventory: Array<Movie> = Utility.GetAllMovies();

