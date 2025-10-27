import { Movie, Logger, CastMember as Actor } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";
import * as _ from "lodash";

let inventory: Array<Movie> = Utility.GetAllMovies();

inventory.forEach(movie => console.log(_.snakeCase(movie.title)));