import React from 'react';
import { useSelectedTeam } from './CustomHookAtom.js';

export default function Content_TeamPictureAtom() {
  const selectedTeam = useSelectedTeam.singleTeam;

  return (
    <div>
      {selectedTeam && ( 
        <div>
          <img
            className="w-48 h-48"
            src={selectedTeam.teamIconUrl}
          />
        </div>
      )}
    </div>
  );
}
