import { format, parseISO } from 'date-fns';
import React from 'react';

export default function Date({dateString}) {
 
const date = parseISO(dateString)
  return (
    <time >{format((date), "LLL d yyyy")}</time>
  )
}
