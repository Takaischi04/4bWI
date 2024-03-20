import React from 'react';
import { useSelectedTeam } from './CustomHookAtom.js';

export default function Content_TeamPictureAtom({ image }) {


  return (
    <div>

      <div>
        <img
          className="w-48 h-48"
          src={image}
        />
      </div>

    </div>
  );
}
