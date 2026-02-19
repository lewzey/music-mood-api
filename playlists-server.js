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
});
