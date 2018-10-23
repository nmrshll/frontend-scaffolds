import React from 'react'

// export const delay = delayMilliseconds =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success!");
//     }, delayMilliseconds);
//     setTimeout(() => {
//       reject("noooo :(");
//     }, delayMilliseconds * 2 + 1000);
//   });

export const renderLineBreaks = str =>
  str.split('&br;').map((item, idx) => {
    const key = idx
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    )
  })

const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
const to = 'aaaaeeeeiiiioooouuuunc------'
export const toSlug = str => {
  let str2 = str
    .replace(/^\s+|\s+$/g, '') // trim
    .toLowerCase()

  // remove accents, swap ñ for n, etc
  for (let i = 0, l = from.length; i < l; i += 1) {
    str2 = str2.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }
  return str2
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
}
