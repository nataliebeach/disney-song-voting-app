
$(document).ready(function getDisneyAlbums() {
    $.ajax({
      url: 'https://api.spotify.com/v1/search?q=album:disney&type=track',
      success: function(response) {
        response.tracks.items.forEach( function(i){
            allSongs.songs.push(
                {title: i.name,
                songId: i.id,
                artist: i.artists[0].name,
                upVotes: 0
              }
            )
        })
        formatTemplate(allSongs)
      }
      })
    })


var $main = $("#main")
var allSongs = {songs: []}

function formatTemplate(data){

  var source = $("#song-template").html();

  var templater = Handlebars.compile(source);

  $main.append(templater(data));

  $main.css("display","inline");

}

//Problem Area - when you click the thumb, increment vote count up by 1 and display the changed count

$("body").on("click", "article", function(e) {
  e.preventDefault();
  //set voteCount equal to current html value on this particular song
  var voteCount = 0
  console.log("click");
  voteCount++;
  //insert new voteCount into html for this particular song
  $(".vote-count").html(voteCount);
}
)

//Problem Area 2 - need to store the upVote values so that all users can increase votes over time
// var createSongObj = function () {
//          var Song_NHB = new ParseObjectType("Song_NHB")
//           Song_NHB.create({id: this.songId, votes: this.upVotes}, function(){
//               if (err) {
//                 console.error(err);
//               } else {
//                 console.log(results);
//             }
//           })}


// update vote count and store it

// function updateVote($song) {
//       var songId = $song.data('id');
//       var upVotes = $song.data('upVotes');

//       upVotes += 1;

//       Song_NHB.update(songId, { upVotes: upVotes }, function(err, result) {
//         if (err) {
//           console.error(err);
//         } else {
//           var songObj = {
//             title: $song.find('#title').html(),
//             songId: songId,
//             artist: $song.find('#artist').html(),
//             upVotes: upVotes
//           };
//           var html = compile(songObj);
//           $('[data-id="' + songId + '"]').html(html);
//         }
//       })
//     }






