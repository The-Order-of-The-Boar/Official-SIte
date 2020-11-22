
////////////////////////////////////Pages Exchange///////////////////////////////////////




var c_div = "Home";
document.getElementById(c_div).style.display = "block";

function RenderSubPage(new_element){
    document.getElementById(c_div).style.display = "none";
    c_div = new_element;
    document.getElementById(c_div).style.display = "block";

    if(new_element=="Eyeeeder"){
        GetEyeeederRank();
    }

}

////////////////////////////////////Ajax Requests///////////////////////////////////////

function GetEyeeederRank(){
    var req = new XMLHttpRequest();
    url = "https://cors-anywhere.herokuapp.com/"+ "http://highestboar.pythonanywhere.com/ranking"
    req.open("GET",url,true);
    req.send();

    var rank;
    req.onreadystatechange = function(){
        console.log(this.responseText);
        rank = JSON.parse(this.responseText)["ranking"];
        console.log(typeof(rank));
    }
    rank = [["Leonardo",6656],["Javalonardo",5442],["Hentaldo",123]];

    var a = document.getElementById("Ranking");
    if (a!= null){
        a.remove();
    }

    var table = document.createElement("TABLE");   
    table.id = "Ranking";

    var title = document.createElement("TR");
    
    var col1 = document.createElement("TH");
    col1.innerHTML = "Jogador";
    col1.style.fontSize = "120%";
    col1.style.color = "black";
    var col2 = document.createElement("TH");
    col2.innerHTML = "Pontuação";
    col2.style.fontSize = "120%";
    col2.style.color = "black";

    title.appendChild(col1);
    title.appendChild(col2);

    table.appendChild(title);

    for(var i=0;i<rank.length;i++){
        
        var line = document.createElement("TR");

        var name = document.createElement("TH");
        name.innerHTML = rank[i][0];
        var points = document.createElement("TH");
        points.innerHTML = rank[i][1].toString();

        line.appendChild(name);
        line.appendChild(points);
        table.appendChild(line);

    }

    document.getElementById("Eyeeeder").appendChild(table);


}

