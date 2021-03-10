module.exports = function reverse (n) {
        if(n<0){
          n*=(-1);
        }
         let str = String(n);
         let reverStr = "";
         for (let i = (str.length-1); i>=0; i--){
              reverStr+=str[i];
         }
         return Number(reverStr);
       }
      

