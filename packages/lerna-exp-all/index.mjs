import toUpper from 'lerna-exp-uppercase';
import toLower from 'lerna-exp-lowercase';

const arg = process.argv[2];
console.log(`Received argument: ${arg}`);

const upper = toUpper(arg);
console.log(`Upper-cased: ${upper}`);

const lower = toLower(arg);
console.log(`Lower-cased: ${lower}`);

console.log('Done.');
