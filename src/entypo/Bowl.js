import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Bowl';

let EntypoBowl = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M16.949,7.472c-2.176,2.902-4.095,3.002-7.046,3.152H9.802c-3.591-0.002-6.138-1.336-6.138-1.832C3.662,8.321,5.962,7.095,9.269,6.973l0.59-1.473c-0.019,0-0.037-0.002-0.057-0.002c-4.908,0-7.791,1.562-7.791,3.051v2c0,0.918,0.582,8.949,7.582,8.949s8-8.031,8-8.949v-2c0-0.391-0.201-0.787-0.584-1.158L16.949,7.472z M17.589,2.702c-0.441-0.33-1.069-0.242-1.399,0.201l-3.608,4.809l2.336-5.838c0.206-0.512-0.044-1.094-0.557-1.301c-0.508-0.205-1.096,0.043-1.3,0.559L9.802,9.274c2.882-0.147,4.277-0.227,6.067-2.611c1.789-2.387,1.919-2.561,1.919-2.561C18.12,3.661,18.031,3.034,17.589,2.702z"/>
    </EntypoIcon>
);

export default EntypoBowl;