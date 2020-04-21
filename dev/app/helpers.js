/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const helpers = {
  isObjectEmpty(obj) {
    for (const key in obj) {
      return false;
    }
    return true;
  },
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  /** Промисифицированный таймер
   * delay(1000).then(/* ... do whatever
   * doSomething().then(function(){ return delay(1000); }).then(doSomethingElse);
   *
   * */
  delay(ms) {
    let ctr;
    let rej;
    const p = new Promise((resolve, reject) => {
      ctr = setTimeout(resolve, ms);
      rej = reject;
    });
    p.cancel = function() {
      clearTimeout(ctr);
      rej(Error('Cancelled'));
    };
    return p;
  },
};

export default helpers;
