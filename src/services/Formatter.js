import moment from 'moment';

export function displayPrice(value: Number | string) {
  if (value == null) {
    throw new Error('Tried to format price with null or undefined value');
  }
  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
  return formatter.format(value);
}

export function displayTime(value: Number | string) {
  return moment(value).format(' HH:mm:ss DD-MM-YYYY');
}
