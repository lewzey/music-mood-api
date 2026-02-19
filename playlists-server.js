const express = require('express');
const app = express();

const supabase = require('./scripts/playlist-supabase.js')
const routes = require('./scripts/playlist-router.js')

//grouped routes I thought could go together, didn't want functions too bulky
routes.handleArtists(supabase,app);
routes.handleArtistAverage(supabase,app);
routes.handleGenres(supabase,app);
routes.handleSongs(supabase,app);
routes.handleSongsContain(supabase,app);
routes.handlePlaylist(supabase,app);

//mood routes
routes.handleMoodDancing(supabase,app);
routes.handleMoodHappy(supabase,app);
routes.handleMoodCoffee(supabase, app);
routes.handleMoodStudying(supabase,app);
routes.handleOtherMoods(supabase,app);

let port = process.env.PORT
app.listen(port, () => {
    
    console.log("Server running at port= " + port);
    /* if running on local server: 
    console.log('http://localhost:8080/api/artists');
    console.log('http://localhost:8080/api/artists/129');
    console.log('http://localhost:8080/api/artists/averages/129');
    console.log('http://localhost:8080/api/genres');
    console.log('http://localhost:8080/api/songs');
    console.log('http://localhost:8080/api/songs/1010');
    console.log('http://localhost:8080/api/songs/sort/artist');
    console.log('http://localhost:8080/api/songs/sort/year');
    console.log('http://localhost:8080/api/songs/sort/duration');
    console.log('http://localhost:8080/api/songs/search/begin/love');
    console.log('http://localhost:8080/api/songs/search/any/love');
    console.log('http://localhost:8080/api/songs/search/year/2017');
    console.log('http://localhost:8080/api/songs/search/year/2016/2018');
    console.log('http://localhost:8080/api/songs/artist/149');
    console.log('http://localhost:8080/api/songs/genre/115');
    console.log('http://localhost:8080/api/playlists');
    console.log('http://localhost:8080/api/playlists/3');
    console.log('http://localhost:8080/api/mood/dancing/5');
    console.log('http://localhost:8080/api/mood/dancing/500');
    console.log('http://localhost:8080/api/mood/happy/8');
    console.log('http://localhost:8080/api/mood/happy');
    console.log('http://localhost:8080/api/mood/coffee/10');
    console.log('http://localhost:8080/api/mood/studying/15');

    console.log('errors:')
    console.log('http://localhost:8080/api/artists/sdfjkhsdf');
    console.log('http://localhost:8080/api/songs/sjdkfhsdkjf');
    console.log('http://localhost:8080/api/songs/search/begin/sdjfhs');
    console.log('http://localhost:8080/api/songs/search/any/sdjfhs');
    console.log('http://localhost:8080/api/songs/search/year/2027');
    console.log('http://localhost:8080/api/songs/search/year/2019/2016');
    console.log('http://localhost:8080/api/songs/artist/7834562');
    console.log('http://localhost:8080/api/playlists/35362');
    console.log('http://localhost:8080/api/mood/boo');
    */
});