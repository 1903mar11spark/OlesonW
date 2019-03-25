window.onload = function(){
    document.getElementById('fetchadv').addEventListener('click', getAdvice);
};

const apiUrl = "https://api.adviceslip.com/advice";

let state = {
    advice: " ",
    id: ""
} // semicolon injection - if JIT compiler percieves the end of a line
    // as the end of a statement, it will inject a semicolon

let updateContent = function() {
    if(state.id === "34"){ //29, 114, 33, 203, 80
      return alert("censored");
      } else if (state.id ==="29"){
        return alert("censored");
      }else if(state.id ==="114"){
        return alert("censored");
      }else if(state.id ==="33"){
        return alert("censored");
      }else if(state.id ==="203"){
        return alert("censored");
      }else if(state.id ==="80"){
        return alert("censored");
      }else if(state.id ==="51"){
        return alert(state.advice+""+"....what.....?");
      }else if(state.id ==="120"){
        return alert(state.advice+""+"....not true.  nods say a lot");
      }else if(state.id ==="38"){
        return alert("not good advice");
      }else if(state.id ==="144"){
        return alert("boring");
      }


    document.getElementById('theadvice');
    let li = document.createElement("LI");
    document.getElementById("theadvice").appendChild(li);
    li.innerText = state.advice;
    li.setAttribute("style","font-size: 30px;")
      // }
     //set all the bottom nav buttons to the same id
    // return alert(state.advice);//set this equal to each navbar
}

function getAdvice() {
    fetch(apiUrl, {method: "GET", headers:{"Accept":"application/json"}})
    //define behavior for when response returns
    .then((response) => {
        //return unwrapped promise object for the next chained operation
        return response.json();
    })
    //utilize unwrapped promise as a JS object
    .then((data) => {
        console.log(data);
        state.advice = data.slip.advice;
        state.id = data.slip.slip_id;

        updateContent();
    })
    //what if there's a problem?
    .catch((error) => {
        alert('oh no :(');
        console.log(error);
    });
}
