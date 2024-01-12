export default function com_Card({ cardName, profession }) {
    return (
        <div className="shadow-2xl w-80">
            <img className="w-80" src="https://www.w3schools.com/howto/img_avatar.png"></img>
            <div className="p-3">
                <h3 className="font-bold pb-4">{cardName}</h3>
                <p>{profession}</p>
            </div>
        </div>
    )
}
