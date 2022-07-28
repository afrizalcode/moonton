import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({ auth, featuredMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    // console.log(featureMovies);

    return (
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>

            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {featuredMovies.map((featuredMovies) => (
                                            
                        <FeatureMovie 
                            key={featuredMovies.id} 
                            slug={featuredMovies.slug} 
                            name={featuredMovies.name} 
                            category={featuredMovies.category} 
                            thumbnail={featuredMovies.thumbnail} 
                            rating={featuredMovies.rating} 
                        />
                    ))}
                </Flickity>
                
            </div>

            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                
                <Flickity className="gap-[30px]" options={flickityOptions}>

                    {movies.map((movie) => (
                        <MovieCard 
                            key={movie.id} 
                            slug={movie.slug} 
                            name={movie.name} 
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>

        </Authenticated>
    );

}