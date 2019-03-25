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

    for (title in mySong){
        //console.log(mySong[artist]); //just the key (property name)
        //console.log(mySong[title].title);
        let songinput = document.getElementById("song").value;
        var allSongs = mySong[title].title.toLowerCase();
        let songcontains = (allSongs.indexOf(songinput) > -1);
        console.log(allSongs);
        console.log(songcontains);

           if(songcontains == true){
          let artistinput = document.getElementById("artist").value;
          let songinput = document.getElementById("song").value;
          let td = document.createElement("TD");
           let br = document.createElement("BR");
           document.getElementById("thesong").appendChild(td);
           td.innerText = songinput;
           let a = document.createElement("A");
           a.appendChild(br);
            a.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+songinput+"&a="+artistinput+",");
           a.innerText = "Start learning "+songinput+"";
            a.setAttribute("target", "_blank");
            document.getElementById("songpagelink").appendChild(a);
           break;
            }
      }

      var allArtists = [];

      for(artist in mySong){

        var allArtists = mySong[artist].artist.nameWithoutThePrefix.toLowerCase();
        let artistinput= document.getElementById("artist").value;
        let artcontains = (allArtists.indexOf(artistinput) > -1);
        //console.log(allArtists);
        if(artcontains == true){
         let art = document.getElementById("artist").value;
          let th = document.createElement("TH");
           document.getElementById("theband").appendChild(th);
           th.innerText = art.toUpperCase() + ": ";
           break;
          }
      }







    // let list = document.getElementid("heading");
    // let li = document.createElement("LI");
    //   if(artist === apiCall[artist].artist){

    //   }



  }

