const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function() {
    //put grab playlists out from library
    const playlists = this.playlists;
    //create a for in loop to get playListId(p01...)
    for (let playListId in playlists) {
      //find the playlist
      const playlist = playlists[playListId];
      const trackCounts = playlist.tracks.length;
      console.log(`${playlist.id}: ${playlist.name} - ${trackCounts} tracks`);
    }
  },
  printTracks: function() {
    //find the tracks first
    const tracks = this.tracks;
    //for in loop to find the tracks details
    for (let trackId in tracks) {
      //put info into a variable
      const track = tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  printPlaylist: function(playlistId) {
  //get to the playlist first
    const playlists = this.playlists;
    //create a for in loop to get playListId(p01...)
    for (let playListId in playlists) {
    //find the playlist if condition match
      if (playListId === playlistId) {
        const playlist = playlists[playListId];
        const trackCounts = playlist.tracks.length;
        console.log(`${playlist.id}: ${playlist.name} - ${trackCounts} tracks`);
        const tracks = playlist.tracks;
        const trackId = this.tracks;
        for (let id of tracks) {
          console.log(`${trackId[id].id}: ${trackId[id].name} by ${trackId[id].artist} (${trackId[id].album})`);
        }
      }
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  addTrack: function(name, artist, album) {
    //generate new track number
    let trackNum = Object.keys(this.tracks).length + 1;
    //add 0 if it's only single digit
    trackNum = trackNum.toString().padStart(2,"0");
    this.tracks["t" + trackNum] = {id: generateUid(), name: name, artist: artist, album: album};
  },
  addPlaylist: function(name,track) {
    let playlistNum = Object.keys(this.playlists).length + 1;
    playlistNum = playlistNum.toString().padStart(2, "0");
    let newTrackList = [];
    newTrackList.push(track);
    this.playlists["p" + playlistNum] = {id: generateUid(), name: name, tracks:newTrackList};

  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist("p01");


// adds an existing track to an existing playlist
library.addTrackToPlaylist("t02", "p02");
console.log(library.playlists.p02);

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
library.addTrack("Believer", "Imagine Dragons", "Evolve 2017");

console.log(library.tracks);

// adds a playlist to the library
library.addPlaylist("test", "t02");
console.log(library.playlists);
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};