import React from 'react'

export const formattedDate = ({release_date}) => {
    const date = new Date(release_date);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-US", options).replace(/\s/g, " ");

  return formattedDate;
}
