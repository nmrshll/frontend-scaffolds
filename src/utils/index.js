/* eslint-disable prefer-promise-reject-errors */
export const delay = delayMilliseconds =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success!');
    }, delayMilliseconds);
    setTimeout(() => {
      reject('noooo :(');
    }, delayMilliseconds * 2 + 1000);
  });

export const randomString = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');

export const nowISOString = () =>
  new Date(
    new Date() - new Date().getTimezoneOffset() * 60 * 1000,
  ).toISOString();
