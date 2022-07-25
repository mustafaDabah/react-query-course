import React from 'react'
import {parseISO , formatDistanceToNow} from 'date-fns';


function TimeAgo({timesTamp}) {
    let timeAgo = ''
    if (timesTamp) {
        const date = parseISO(timesTamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`
    }

  return (
    <span title={timesTamp}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo