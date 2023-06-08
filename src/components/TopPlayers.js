import React, { useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

const TopPlayers = ({ players }) => {


    return (
        <div>
            <h3>10 Top Players---</h3>
            {players
                .map((player, index) => (
                    <div key={index} >
                        {player}
                    </div>
                ))}
        </div>

    );
}

export default TopPlayers;