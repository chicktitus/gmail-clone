import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './Emaillist.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import Section from './Section';
import EmailRow from './EmailRow';

function Emaillist() {
    return (
        <div className="emaillist">
            <div className="emaillist__settings">
                <div className="emaillist__settingLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emaillist__settingsRight">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                </div>
            </div>
            <div className="emaillist__sections">
                <Section Icon={InboxIcon} title='primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='#1a73e8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className="emaillist_list">
                <EmailRow
                title="twitch" subject="hey there fellows" description="this is test" time="10pm"
                 />
            </div>
        </div>
    );
}

export default Emaillist;
