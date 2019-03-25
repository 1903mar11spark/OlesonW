window.onload = function() {
  document.getElementById("fetchartist").addEventListener("click", function() {
  });
}



function myFunction() {


  let band = document.getElementById("artist").value;
      let songinput = document.getElementById("song").value;
      let area = document.getElementById("thesong");
      let spaces = document.createElement("A");
      area.appendChild(spaces);
      spaces.setAttribute("href", "javascript:http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+songinput+"&a="+band+",");


             let s = document.getElementById("artist").value;

              if(hasWhiteSpace(band) == true){
         let s = document.getElementById("artist").value;
          let newinput = str.join(" ");
          band = document.getElementById("theband");
          let spaceband = document.createElement("a");
          spaceband.setAttribute("href", "http://www.songsterr.com/a/wa/bestMatchForQueryString?s="+songinput+"&a="+newinput+",");
          band.appendChild(spaceband);

      // }

      function hasWhiteSpace(s) {
              return s.indexOf(' ') >= 0;
            }

}
