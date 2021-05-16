import React from 'react'

import AnnouncementIcon from '@material-ui/icons/Announcement';
import RouterIcon from '@material-ui/icons/Router';

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
                    <AnnouncementIcon color="secondary" />
                    <p className="item__iconNumber">12</p>
                </div>
                <div className="item__icons">
                    <RouterIcon style={{color: 'green'}} />
                    <p className="item__iconNumber">4</p>
                </div>
                <div className="item__icons">
                    <AccessAlarmIcon />
                    <p className="item__iconNumber">156</p>
                </div>
            </div>
        </div>
    )
}

export default TableContent
