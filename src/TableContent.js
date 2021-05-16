import React from 'react'

import './Table.css';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function TableContent(props) {

    return (
        <div className="item">
            <div className="item__info">
                <h3 className="item__directionName">{props.name}</h3>
                <p className="item__directionData">{props.direction}</p>
                <p className="item__directionData">{props.county}</p>
                <p className="item__directionData">{props.number}</p>
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
