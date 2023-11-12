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

    if (data[teamID]) {
        const dataElementAtTeamID = data[teamID];
        html += "<div class='logoWithName'>"
        html +=     "<img class='imageSize' src=" + dataElementAtTeamID.teamIconUrl + ">";
        html +=     "<div>" + dataElementAtTeamID.teamName + "</div>";
        html += "</div>"
        
        html += "<div class='statsback'>"
        html +=     "<div class='statsfront'>"
        html +=         "<div>" + "Matches: " +dataElementAtTeamID.matches + "</div>";
        html +=         "<div>" + "Wins: " + dataElementAtTeamID.won + "</div>";
        html +=         "<div>" + "Lost: " + dataElementAtTeamID.lost + "</div>";
        html +=         "<div>" + "Draw: " + dataElementAtTeamID.draw + "</div>";
        html +=     "</div>";
        html += "</div>";
    }

    document.getElementById("content").innerHTML = html;
};
