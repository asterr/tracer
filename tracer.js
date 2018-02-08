javascript: (function() {
    var links = new Array();
    links[0] = "https://raw.githubusercontent.com/asterr/numbers/master/number01.png";
    links[1] = "https://raw.githubusercontent.com/asterr/numbers/master/number02.png";
    links[2] = "https://raw.githubusercontent.com/asterr/numbers/master/number03.png";
    links[3] = "https://raw.githubusercontent.com/asterr/numbers/master/number04.png";
    links[4] = "https://raw.githubusercontent.com/asterr/numbers/master/number05.png";
    links[5] = "https://raw.githubusercontent.com/asterr/numbers/master/number06.png";
    var i = localStorage.getItem('tracerindex') || 0;
    i = (i+1) % 6
    localStorage.setItem('tracerindex', i);
    window.open(links[i])
})()
