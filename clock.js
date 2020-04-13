
  function startTime() {
    var now = new Date();
    var h = ((now.getHours() + 11) % 12 + 1);
    var m = now.getMinutes();
    var s = now.getSeconds();
    m = addZerostoNumberslessThanten(m);
    s = addZerostoNumberslessThanten(s);

  var string = h + ":" + m + ":" + s;
  var img = numberToimagesOfyou(string, h);
  document.getElementById('clock').innerHTML = img;

  var t = setTimeout(startTime, 1000);
}

function addZerostoNumberslessThanten(i) {
  if (i < 10) {
    i = "0" + i
  } 
  return i;
}

function numberToimagesOfyou(s, h) {
  var canvas = ""
  if (h >= 10) {
    w = '12.5%'
  }
  else {
    w='14%'
  }
  for (var i = 0; i < s.length; i++) {
    canvas = canvas + "<img width=" + w + "' src='" + img[s[i]] + "'/>"
  }
  return canvas
}


var img = {
  "1": "1.png",
  "2": "2.png",
  "3": "3.png",
  "4": "4.png",
  "5": "5.png",
  "6": "6.png",
  "7": "7.png",
  "8": "8.png",
  "9": "9.png",
  "0": "0.png",
  ":": "colon.png"
}

//code in part derived from https://stackoverflow.com/questions/42964421/digital-clock-with-images
