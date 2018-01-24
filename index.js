export default function formatVersionNumber(verNum, length) {
    if(!verNum)
        verNum = '0';

    let num = verNum.replace(/[^0-9]/g, '');

    if(length) {
        if(num.length > length) {
            num = num.substring(0,4);
          }

          if(num.length < length) {
            while(num.length < length)
            num = num + '0';
          }
    }
    return parseInt(num);
}