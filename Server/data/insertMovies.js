const { sequelize, Movie, ProductionCompany } = require('./model.js');
const movies = require('./movies.js');

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
        return insertMovies();
    })
    .catch(err => console.error('Unable to create tables:', err));

async function insertMovies() {
    try {
        for (const movie of movies) {
            const createdMovie = await Movie.create({
                id: movie.id,
                adult: movie.adult,
                backdrop_path: movie.backdrop_path,
                budget: movie.budget,
                homepage: movie.homepage,
                original_language: movie.original_language,
                original_title: movie.original_title,
                overview: movie.overview,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                runtime: movie.runtime,
                status: movie.status,
                tagline: movie.tagline,
                title: movie.title,
                vote_average: movie.vote_average
            });

            for (const company of movie.production_companies) {
                await ProductionCompany.create({
                    id: company.id,
                    logo_path: company.logo_path,
                    name: company.name,
                    origin_country: company.origin_country,
                    movie_id: createdMovie.id
                });
            }
        }

        console.log('Movies and Production Companies inserted!');
    } catch (err) {
        console.error('Error inserting movies:', err);
    }
}
