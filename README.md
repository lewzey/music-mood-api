# Music Mood API

This project is a RESTful API built using 

- **`Node.js`**  – runtime environment for fast, scalable server-side execution  
- **`Express.js`**  – handles routing and HTTP requests in a clean, modular way  
- **`Supabase`**  – PostgreSQL database backend with real-time capabilities  

The API exposes endpoints for retrieving and searching **artists, songs, genres, playlists, and mood-based song recommendations**, with support for filtering, sorting, and parameterized queries.  

All endpoints are hosted at: [https://music-mood-api.onrender.com](https://music-mood-api.onrender.com)

---

## API Endpoints

| Route | Method | Description |
|-------|--------|-------------|
| `/api/artists` | GET | Get all artists |
| `/api/artists/:ref` | GET | Get a specific artist by ID (`:ref` is artist ID) |
| `/api/artists/averages/:ref` | GET | Get average song stats for a specific artist (`:ref` is artist ID) |
| `/api/genres` | GET | Get all genres |
| `/api/songs` | GET | Get all songs |
| `/api/songs/:ref` | GET | Get a specific song by ID (`:ref` is song ID) |
| `/api/songs/sort/artist` | GET | Get songs sorted by artist |
| `/api/songs/sort/year` | GET | Get songs sorted by release year |
| `/api/songs/sort/duration` | GET | Get songs sorted by duration |
| `/api/songs/search/begin/:substring` | GET | Search songs whose title **begins with** `:substring` |
| `/api/songs/search/any/:substring` | GET | Search songs whose title **contains** `:substring` |
| `/api/songs/search/year/:year` | GET | Search songs from a specific year (`:year`) |
| `/api/songs/search/year/:start/:end` | GET | Search songs between two years (`:start` and `:end`) |
| `/api/songs/artist/:ref` | GET | Get songs by a specific artist ID (`:ref`) |
| `/api/songs/genre/:ref` | GET | Get songs by a specific genre ID (`:ref`) |
| `/api/playlists` | GET | Get all playlists |
| `/api/playlists/:ref` | GET | Get a playlist by ID (`:ref`) |
| `/api/mood/:mood/:count?` | GET | Get songs by mood (`:mood` is mood type, `:count` optional number of songs) |

---

## Example Test Links

| Endpoint | Example |
|----------|---------|
| Artists | [https://music-mood-api.onrender.com/api/artists](https://music-mood-api.onrender.com/api/artists) |
| Artist by ID | [https://music-mood-api.onrender.com/api/artists/129](https://music-mood-api.onrender.com/api/artists/129) |
| Artist averages | [https://music-mood-api.onrender.com/api/artists/averages/129](https://music-mood-api.onrender.com/api/artists/averages/129) |
| Genres | [https://music-mood-api.onrender.com/api/genres](https://music-mood-api.onrender.com/api/genres) |
| All songs | [https://music-mood-api.onrender.com/api/songs](https://music-mood-api.onrender.com/api/songs) |
| Song by ID | [https://music-mood-api.onrender.com/api/songs/1010](https://music-mood-api.onrender.com/api/songs/1010) |
| Songs sorted by artist | [https://music-mood-api.onrender.com/api/songs/sort/artist](https://music-mood-api.onrender.com/api/songs/sort/artist) |
| Songs sorted by year | [https://music-mood-api.onrender.com/api/songs/sort/year](https://music-mood-api.onrender.com/api/songs/sort/year) |
| Songs sorted by duration | [https://music-mood-api.onrender.com/api/songs/sort/duration](https://music-mood-api.onrender.com/api/songs/sort/duration) |
| Search songs (begin) | [https://music-mood-api.onrender.com/api/songs/search/begin/love](https://music-mood-api.onrender.com/api/songs/search/begin/love) |
| Search songs (any) | [https://music-mood-api.onrender.com/api/songs/search/any/love](https://music-mood-api.onrender.com/api/songs/search/any/love) |
| Search songs by year | [https://music-mood-api.onrender.com/api/songs/search/year/2017](https://music-mood-api.onrender.com/api/songs/search/year/2017) |
| Search songs by year range | [https://music-mood-api.onrender.com/api/songs/search/year/2016/2018](https://music-mood-api.onrender.com/api/songs/search/year/2016/2018) |
| Songs by artist | [https://music-mood-api.onrender.com/api/songs/artist/149](https://music-mood-api.onrender.com/api/songs/artist/149) |
| Songs by genre | [https://music-mood-api.onrender.com/api/songs/genre/115](https://music-mood-api.onrender.com/api/songs/genre/115) |
| Playlists | [https://music-mood-api.onrender.com/api/playlists](https://music-mood-api.onrender.com/api/playlists) |
| Playlist by ID | [https://music-mood-api.onrender.com/api/playlists/3](https://music-mood-api.onrender.com/api/playlists/3) |
| Mood - dancing | [https://music-mood-api.onrender.com/api/mood/dancing/5](https://music-mood-api.onrender.com/api/mood/dancing/5) |
| Mood - happy | [https://music-mood-api.onrender.com/api/mood/happy/8](https://music-mood-api.onrender.com/api/mood/happy/8) |
| Mood - coffee | [https://music-mood-api.onrender.com/api/mood/coffee/10](https://music-mood-api.onrender.com/api/mood/coffee/10) |
| Mood - studying | [https://music-mood-api.onrender.com/api/mood/studying/15](https://music-mood-api.onrender.com/api/mood/studying/15) |

---

## Example Error Links

| Endpoint | Description |
|----------|-------------|
| [https://music-mood-api.onrender.com/api/artists/sdfjkhsdf](https://music-mood-api.onrender.com/api/artists/sdfjkhsdf) | Invalid artist ID |
| [https://music-mood-api.onrender.com/api/songs/sjdkfhsdkjf](https://music-mood-api.onrender.com/api/songs/sjdkfhsdkjf) | Invalid song ID |
| [https://music-mood-api.onrender.com/api/songs/search/begin/sdjfhs](https://music-mood-api.onrender.com/api/songs/search/begin/sdjfhs) | Search with no match (begin) |
| [https://music-mood-api.onrender.com/api/songs/search/any/sdjfhs](https://music-mood-api.onrender.com/api/songs/search/any/sdjfhs) | Search with no match (any) |
| [https://music-mood-api.onrender.com/api/songs/search/year/2027](https://music-mood-api.onrender.com/api/songs/search/year/2027) | Year with no songs |
| [https://music-mood-api.onrender.com/api/songs/search/year/2019/2016](https://music-mood-api.onrender.com/api/songs/search/year/2019/2016) | Invalid year range |
| [https://music-mood-api.onrender.com/api/songs/artist/7834562](https://music-mood-api.onrender.com/api/songs/artist/7834562) | Nonexistent artist |
| [https://music-mood-api.onrender.com/api/playlists/35362](https://music-mood-api.onrender.com/api/playlists/35362) | Nonexistent playlist |
| [https://music-mood-api.onrender.com/api/mood/boo](https://music-mood-api.onrender.com/api/mood/boo) | Invalid mood type |
