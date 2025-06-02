//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`;
const [N, ...input] = readLine.split('\n');
const [K, M] = N.split(' ').map((num) => Number(num));
const map = new Map();
const answer = [];

for (const x of input.splice(0, K)) {
  const [siteUrl, password] = x.split(' ');

  map.set(siteUrl, password);
}

for (const siteUrl of input) {
  answer.push(map.get(siteUrl));
}

console.log(answer.join('\n'));
