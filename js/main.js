
let trackNames = ['sawsquarenoise - Tittle Screen', 'Shaolin Dub - Growing Resistance'];
let tracks = [];
let currSong = null;


function setup() {
    //song = loadSound.loadSound("sawsquarenoise - Tittle Screen.mp3");
    tracks[0].setVolume(0.3);

}

function preload() {
    soundFormats('mp3', 'ogg');

    loadTracks();

    // load tracks
    //trackNames.forEach(trackName => {
    //let track = loadSound(`assets/audio/${trackName}`, addToTracks(track));

    //let track = await loadTrack(trackName);
    /*
            fetch(loadTrack())
                .then(track => tracks.push(track))
                .then(console.log(`Loaded ${trackName}`))
                .catch(err => console.error(err)));
                */

    // tracks.push(track);
    //console.log(`Loaded ${trackName}`)


    // for (let index = 0; index < trackNames.length; index++) {
    //     let track = loadSound(`assets/audio/${trackNames[index]}`);

    //     tracks.push(track);
    //     console.log(`Loaded ${trackNames[index]}`)
    // }

}

async function loadTracks(track_name) {
    // let track = loadSound(`assets/audio/${track_name}`)
    // return track;

    trackNames.forEach(trackName => {
        //let track = loadSound(`assets/audio/${trackName}`, addToTracks(track));

        let track = await loadSound(`assets/audio/${trackName}`);

        tracks.push(track);

    });
}

function addToTracks(t) {
    tracks.push(t);
}

function test(text) {
    alert('test function called! ' + text);
    song0.play();
}

function toggleTrack(trackNumber) {

    if (currSong != null && currSong.isPlaying()) {
        currSong.stop();

        // Pause music only if button was pressed for the same track
        // meaning that the user wanted to pause the music
        if (currSong === tracks[trackNumber]) return;
    }



    isValidTrack = trackNumber < tracks.length;

    // Check if valid trackNumber is provided
    if (!isValidTrack) return console.error(`Invalid trackNumber: $(trackNumber)`);

    tracks[trackNumber].play();

    // Keep track of the current song.
    currSong = tracks[trackNumber];

    //console.log(`Played trackNumber ${trackNumber}`);

}

function replayTrack(trackNumber) {



}