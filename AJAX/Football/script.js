const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        });
    });
};

const loadDataForContent = (teamID) => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            buttonClicked(data, teamID);
        });
    });
};

let teamID = 0;

const fillTable = (data) => {
    let html = "";
    let count = 0;

    data.forEach((element) => {
        if (count % 2 === 0) {
            html += `<button class='darkerBack' id='teamButton${teamID}' onClick='loadDataForContent(${teamID})'>${element.teamName}</button>`;
            count++;
            teamID++;
        } else {
            html += `<button class='lighterBack' id='teamButton${teamID}' onClick='loadDataForContent(${teamID})'>${element.teamName}</button>`;
            count++;
            teamID++;
        }
    });
    document.getElementById("teams").innerHTML = html;
};

loadData();

const buttonClicked = (data, teamID) => {
    let html = "";
    var randomNum1 = Math.floor(Math.random() * 11);
    var randomNum2 = Math.floor(Math.random() * 11);

    if (data[teamID]) {
        const dataElementAtTeamID = data[teamID];
        const dataElementAtTeamID2 = data[randomNum1];
        const dataElementAtTeamID3 = data[randomNum2];

        html += "<div class='logoWithName'>";
        html +=     "<img class='imageSize' src=" + dataElementAtTeamID.teamIconUrl + ">";
        html +=     "<div>" + dataElementAtTeamID.teamName + "</div>";
        html += "</div>";
        
        html += "<div class='statsback'>";
        html +=     "<div class='statsfront'>";
        html +=         "<div class='headerStats'>" + "Stats:" + "</div>";
        html +=         "<div class='stat'>" + "Matches: " +dataElementAtTeamID.matches + "</div>";
        html +=         "<div class='stat'>" + "Wins: " + dataElementAtTeamID.won + "</div>";
        html +=         "<div class='stat'>" + "Lost: " + dataElementAtTeamID.lost + "</div>";
        html +=         "<div class='stat'>" + "Draw: " + dataElementAtTeamID.draw + "</div>";
        html +=     "</div>";
        html += "</div>";

        html += "<div class='nextMatch'>";
        html += "<h1>Umcoming matches</h1>";
        html +=     "<div class='nextMatchBox1Back'>";
        html +=         "<div class='nextMatchBoxFront'>";
        html +=             "<img class='icon' src=" + dataElementAtTeamID.teamIconUrl + ">";
        html +=             "<img class='icon' src=" + dataElementAtTeamID2.teamIconUrl + ">";
        html +=         "</div>";
        html +=     "</div>";
        html +=     "<div class='nextMatchBox2Back'>";
        html +=         "<div class='nextMatchBoxFront'>";
        html +=             "<img class='icon' src=" + dataElementAtTeamID.teamIconUrl + ">";
        html +=             "<img class='icon' src=" + dataElementAtTeamID3.teamIconUrl + ">";
        html +=         "</div>";
        html +=     "</div>";
        html += "</div>";
    }

    document.getElementById("content").innerHTML = html;
};


