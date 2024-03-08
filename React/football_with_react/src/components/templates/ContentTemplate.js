import Stats from '../molecules/StatsMolecule.js';
import TeamPicture from '../molecules/TeamPictureMolecule.js';
import Upcoming from '../molecules/UpcomingMolecule.js'

export default function Content() {

    return (
        <div className="w-contentWidth bg-backgroundContent text-white m-14 flex">
            <TeamPicture />
            <Stats />
            <Upcoming />
            <Upcoming />
        </div>
    )
}
