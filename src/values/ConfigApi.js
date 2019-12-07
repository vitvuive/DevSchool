const KEY_AUTH = 'vietdeptrai';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTc1MzQyNTU3LCJqdGkiOiIzMzM2YTZiOWVhNjE0NzZhOWM3NTkyZGJjMDgzOWI0MyIsInVzZXJfaWQiOjF9.vOalCmLE8UWYckoGFoZFNkByAriJ7mBzq-xfX3bbv1A';
//for emulator
// const portIP = '10.0.2.2:8000';
// const portIP = '127.0.0.1';

//for device, get from IPv4
const portIP = '192.168.26.114:6969';
// const portIP = '172.16.10.199:6969';
// const portIP = '192.168.1.6:6969';
export default { token, portIP, KEY_AUTH, };
