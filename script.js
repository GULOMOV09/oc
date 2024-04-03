
function num(unlilar) {
    var num = 0;
    var unlilar = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < unlilar.length; i++) {
      var harf = matn[i].toLowerCase();
      
      if (unlilar.includes(harf)) {
        num++;
      }
    }
    return num;
  }
var matn = prompt('Matn kiriting:');
var num = num(matn);
console.log('Matnda', num, 'ta harf unli.')
