// http://www.songsterr.com/a/wa/bestMatchForQueryString?s=song&a=artist

window.onload = function() {
  document.getElementById("fetchartist").addEventListener("click", function() {
    let artist = document.getElementById("artist").value;
    let songTitle = document.getElementById("song").value;

    sendAjax("https://www.songsterr.com/a/ra/songs/byartists.json?artists="+artist+"", tabs)
  });
}


  //url is target request, and func is the CALL BACK function invoked upon completion of request
function sendAjax(url, func) {
  // step 1: obtain xhr //second param microsoft only used for internet explorer lulz
    let xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.HTTPRequest");
  // step 2: define my readystatechange function using func
  // readyState of 4 means request is complete
  //status of 200 means 200 means that everything is ok (server error/status codes)
    xhr.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        func(this);
    }
  };
  // step 3: prepare the request with .open()
    xhr.open("GET", url, true);

  // step 4: send request with .send()
  xhr.send();

}


function tabs(xhr) {
  let apiCall = JSON.parse(xhr.responseText); //this is all the info back from the api
   console.log(apiCall.slice(0, 1000));

   let mySong = apiCall.slice(0, 1000);
   var allSongs = [];


      var allArtists = [];

      for(artist in mySong){

        let allArtists = mySong[artist].artist.nameWithoutThePrefix.toLowerCase();
        let artistinput= document.getElementById("artist").value;
        let artcontains = (allArtists.indexOf(artistinput) > -1);//our input matches the artist name in the api call
        let spacecontains = (allArtists.indexOf())
        // console.log (allArtists);

        // if(hasWhiteSpace(artistinput) == true){
        //   let art = document.getElementById("artist").value;
        //   let newinput = art.join(" ");
        //   band = document.getElementById("theband");
        //   let spaceband = document.createElement("a");
        //   spaceband.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+songinput+"&a="+newinput+",");
        //   band.appendChild(spaceband);
        // }

      // let band = document.getElementById("artist").value;
      // let songinput = document.getElementById("song").value;
      // let spaces = document.createElement("A");
      // spaces.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+songinput+"&a="+band+",");
      // document.getElementById("thesong").appendChild(spaces);


        if(artcontains == true){
         let art = document.getElementById("artist").value;
         band = document.getElementById("theband");
          band.innerText = art.toUpperCase() + ": ";
          break;
          }
        }

      for (title in mySong){

   const capitalize = (song) => {
              if (typeof song !== 'string') return ''
              return song.charAt(0).toUpperCase() + song.slice(1)
            }
        // console.log(mySong[artist]); //just the key (property name)
        // console.log(mySong[title].title);
        let songinput = document.getElementById("song").value;
        let allSongs = mySong[title].title.toLowerCase();
        let songcontains = (allSongs.indexOf(songinput) > -1);//out song input matches a song in api call
        console.log(allSongs);
        console.log(songcontains);

           if(songcontains == true){
            let artistinput = document.getElementById("artist").value;
          let songinput = document.getElementById("song").value;
            // if(hasWhiteSpace(artistinput == true)){
            //   return artistinput.join(" ");
            // }
          let h4 = document.createElement("h4");
          h4.innerText = capitalize(songinput);;
            capitalize(songinput);
          document.getElementById("theband").appendChild(h4);
           let a = document.createElement("A");
            a.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+songinput+"&a="+artistinput+"");
           a.innerText = "Start learning "+songinput.toUpperCase()+"";
            a.setAttribute("target", "_blank");
            document.getElementById("theband").appendChild(a);
            break;

            }
      }


//bug found.  "," at end of query api request, returns ALL artist that start with artistinput
//"lights", returned "lights champions" & "lights"


    // let list = document.getElementid("heading");
    // let li = document.createElement("LI");
    //   if(artist === apiCall[artist].artist){

    //   }



  }

