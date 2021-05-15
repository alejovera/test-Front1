import React from 'react'

import './Table.css';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function TableContent() {
    return (
        <div className="item">
            <div className="item__info">
                <h3 className="item__directionName">Hola</h3>
                <p className="item__directionData">Buenos Aires</p>
                <p className="item__directionData">San Diego</p>
                <p className="item__directionData">5463-4938</p>
            </div>
            <div className="item__iconsRow">
                <div className="item__icons">
                    <AccessAlarmIcon />
                    <p className="item__iconNumber">14</p>
                </div>
                <div className="item__icons">
                    <AccessAlarmIcon />
                    <p className="item__iconNumber">14</p>
                </div>
                <div className="item__icons">
                    <AccessAlarmIcon />
                    <p className="item__iconNumber">14</p>
                </div>
            </div>
        </div>
    )
}

export default TableContent
