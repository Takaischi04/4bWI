import React from 'react'

export default function com_List() {

    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023").then(
            (result) => result.json().then((data) => {
                console.log(data);
                fillTable(data);
            })
        );
    }, [])

    return (
        <div>
        </div>
    )
}
