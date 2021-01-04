import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { Checkbox, IconButton } from '@material-ui/core';

function EmailRow({id, title, subject, description, time}) {
    return (
        <div className="emailrow">
            <div className="emailrow__Options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailrow__title">
                {title}
            </h3>
            <div className="emailrow__message"></div>
            <div className="emailrow__description"></div>
            
        </div>
    );
}

export default EmailRow;
    