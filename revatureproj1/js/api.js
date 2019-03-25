// http://www.songsterr.com/a/wa/bestMatchForQueryString?s=song&a=artist

window.onload = function() {
  document.getElementById("fetchartist").addEventListener("click", function() {
    let artist = document.getElementById("artist").value;
    // let songTitle = document.getElementById("song").value;
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
    for (title in mySong){
        // console.log(title); //just the key (property name)
        console.log(mySong[title].title);
        var myarr = mySong[title].title.toLowerCase();
        let arrcontains = (myarr.indexOf("Children of Bodom") > -1);
         console.log(arrcontains);
        console.log(myarr);
    }

    console.log(myarr);


    while(document.getElementById("artist").value === "kiss"){

   let bandimage= document.getElementById("bandimage");
   bandimage.setAttribute("class", "img-fluid");
   bandimage.setAttribute("src", "https://wallpapercave.com/wp/wp2202990.jpg"); //make sure all images are jpg
   let art = document.getElementById("artist").value;
   let li = document.createElement("LI");
   document.getElementById("heading").appendChild(li);
   li.innerText = art.toUpperCase() + ": " + apiCall[70].title;
   let a = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[70].title;
   a.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   a.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   a.innerText = "Start learning "+song+"";
   a.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(a);

   let bd = document.createElement("LI");
   document.getElementById("heading").appendChild(bd);
   bd.innerText = art.toUpperCase() + ": " + apiCall[281].title;
   let bda = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[281].title;
   bda.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   bda.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   bda.innerText = "Start learning "+song+"";
   bda.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(bda);

   let ij = document.createElement("LI");
   document.getElementById("heading").appendChild(ij);
   ij.innerText = art.toUpperCase() + ": " + apiCall[83].title;
   let ija = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[83].title;
   ija.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   ija.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   ija.innerText = "Start learning "+song+"";
   ija.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(ija);
   break;
    }

    while(document.getElementById("artist").value === "scorpions"){


   let bandimage= document.getElementById("bandimage");
   bandimage.setAttribute("class", "img-fluid");
   bandimage.setAttribute("src", "https://static.247tickets.com/o_1cod3dmf816i21m561jq5mei19pl29.jpg");
   let art = document.getElementById("artist").value;
   let li = document.createElement("LI");
   document.getElementById("heading").appendChild(li);
   li.innerText = art.toUpperCase() + ": " + apiCall[4].title;
   let a = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[4].title;
   a.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   a.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   a.innerText = "Start learning "+song+"";
   a.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(a);

   let zoo = document.createElement("LI");
   document.getElementById("heading").appendChild(zoo);
   zoo.innerText = art.toUpperCase() + ": " + apiCall[6].title;
   let zooa = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[6].title;
   zooa.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   zooa.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   zooa.innerText = "Start learning "+song+"";
   zooa.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(zooa);

   let ij = document.createElement("LI");
   document.getElementById("heading").appendChild(ij);
   ij.innerText = art.toUpperCase() + ": " + apiCall[12].title;
   let ija = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[12].title;
   ija.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   ija.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   ija.innerText = "Start learning "+song+"";
   ija.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(ija);

   let ng = document.createElement("LI");
   document.getElementById("heading").appendChild(ng);
    ng.innerText = art.toUpperCase() + ": " + apiCall[13].title;
   let nga = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[13].title;
   nga.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   nga.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   nga.innerText = "Start learning "+song+"";
   nga.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(nga);
   break;
    }


    while(document.getElementById("artist").value === "metallica"){

   let bandimage= document.getElementById("bandimage");
   bandimage.setAttribute("class", "img-fluid");
   bandimage.setAttribute("src", "https://i.axs.com/2017/10/45195-image_59f25b5c27622.jpg");
   let art = document.getElementById("artist").value;
   let li = document.createElement("LI");
   document.getElementById("heading").appendChild(li);
   li.innerText = art.toUpperCase() + ": " + apiCall[7].title;
   let a = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[7].title;
   a.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   a.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   a.innerText = "Start learning "+song+"";
   a.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(a);

   let zoo = document.createElement("LI");
   document.getElementById("heading").appendChild(zoo);
   zoo.innerText = art.toUpperCase() + ": " + apiCall[25].title;
   let zooa = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[25].title;
   zooa.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   zooa.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   zooa.innerText = "Start learning "+song+"";
   zooa.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(zooa);

   let ij = document.createElement("LI");
   document.getElementById("heading").appendChild(ij);
   ij.innerText = art.toUpperCase() + ": " + apiCall[448].title;
   let ija = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[448].title;
   ija.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   ija.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   ija.innerText = "Start learning "+song+"";
   ija.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(ija);

   let ng = document.createElement("LI");
   document.getElementById("heading").appendChild(ng);
    ng.innerText = art.toUpperCase() + ": " + apiCall[100].title;
   let nga = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[100].title;
   nga.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   nga.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   nga.innerText = "Start learning "+song+"";
   nga.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(nga);
   break;
 }

  while(document.getElementById("artist").value === "eagles"){


   let bandimage= document.getElementById("bandimage");
   bandimage.setAttribute("class", "img-fluid");
   bandimage.setAttribute("src", "https://eastgatearts.com/wp-content/uploads/2017/04/Eagles-845-1.jpg");
   let art = document.getElementById("artist").value;
   let li = document.createElement("LI");
   document.getElementById("heading").appendChild(li);
   li.innerText = art.toUpperCase() + ": " + apiCall[0].title;
   let a = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[0].title;
   a.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   a.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   a.innerText = "Start learning "+song+"";
   a.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(a);

   let zoo = document.createElement("LI");
   document.getElementById("heading").appendChild(zoo);
   zoo.innerText = art.toUpperCase() + ": " + apiCall[10].title;
   let zooa = document.createElement("A");
   artist = document.getElementById("artist").value;
   song = apiCall[10].title;
   zooa.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",");
   zooa.innerHTML = "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+song+"&a="+artist+",";
   zooa.innerText = "Start learning "+song+"";
   zooa.setAttribute("target", "_blank");
   document.getElementById("heading").appendChild(zooa);
   break;
    }
}


