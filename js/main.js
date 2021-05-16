
let trackNames = ['sawsquarenoise - Tittle Screen', 'Shaolin Dub - Growing Resistance'];
let tracks = [];
let currSong = null;
var song1Button = document.getElementById('song1-play-button');
var song2Button = document.getElementById('song2-play-button');


function setup() {
    //song = loadSound.loadSound("sawsquarenoise - Tittle Screen.mp3");
    tracks[0].setVolume(0.3);

}

function preload() {
    soundFormats('mp3', 'ogg');

    let trackNum = 0;

    // Load tracks
    trackNames.forEach(trackName => {
        // media buttons are displayed once done loading
        tracks.push(loadSound(`assets/audio/${trackName}`, showMediaButtons(trackNum)));
        trackNum++;
        console.log(`Loaded ${trackName}`)
    });
}


function addToTracks(t) {
    tracks.push(t);
}

function toggleTrack(trackNumber) {

    if (currSong != null && currSong.isPlaying()) {
        currSong.stop();

        // Pause music only if button was pressed for the same track
        // meaning that the user wanted to pause the music
        if (currSong === tracks[trackNumber]) {

            // TODO: Make it so it pause the track, not stopping it, which restarts it once button is clicked again.

            updatePlayButtons(trackNumber, true);

            return;
        }
    }

    updatePlayButtons(trackNumber, false);


    isValidTrack = trackNumber < tracks.length;

    // Check if valid trackNumber is provided
    if (!isValidTrack) return console.error(`Invalid trackNumber: $(trackNumber)`);

    tracks[trackNumber].play();

    // Keep track of the current song.
    currSong = tracks[trackNumber];

    //console.log(`Played trackNumber ${trackNumber}`);

}

// Update play button to stop or play depending on what was clicked
function updatePlayButtons(trackNumber, isSameTrack) {

    // Make all button text to PLAY.
    //song1Button.innerHTML = 'Play';
    $('#song1-play-button').css('background-image', "url('./assets/img/play-button-arrowhead.svg')");


    song2Button.innerHTML = 'Play';

    if (isSameTrack) return;

    switch (trackNumber) {
        case 0:
            //song1Button.innerHTML = 'Stop';
            // making the image of the button change to Stop
            // TODO: Change to STOP icon
            $('#song1-play-button').css('background-image', "url('./assets/img/pause.svg')");

            console.log('song1button set to STOP');
            break;
        case 1:
            song2Button.innerHTML = 'Stop';
            console.log('song2button set to STOP');
            break;
        case 2:

            break;
        default:
            console.log(`error, trackNumber = ${trackNumber}`);
        // error
    }
}

function replayTrack(trackNum) {

    // Gets length of audio
    // let len = currSong.duration();

    // if (currTrack != null) {
    //     currSong.jump(0);
    //     return;
    // }

    if (currSong != null) currSong.stop();

    // Restart
    currSong = tracks[trackNum];
    currSong.jump(0);
    currSong.play();

    updatePlayButtons(trackNum, false)

}

// Show the media buttons, why? because buttons are hidden when the music is not loaded.
function showMediaButtons(trackNum) {
    //document.getElementById('song1-button').style.visibility = 'visible';


    // jquery slideDown method
    //$("#song1").children().slideDown(900, 'swing');

    $(`#song${trackNum + 1}`).children().slideDown(900, 'swing');
    //$(`#song${trackNum + 1}`).children().fadeIn(900, 'swing');
}