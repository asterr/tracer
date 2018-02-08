javascript: (function() {
    var links = new Array();
    links[0] = "https://raw.githubusercontent.com/asterr/numbers/master/number01.png?" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[1] = "https://raw.githubusercontent.com/asterr/numbers/master/number02.png?" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[2] = "https://raw.githubusercontent.com/asterr/numbers/master/number03.png?" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[3] = "https://raw.githubusercontent.com/asterr/numbers/master/number04.png?" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[4] = "https://raw.githubusercontent.com/asterr/numbers/master/number05.png?" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[5] = "https://raw.githubusercontent.com/asterr/numbers/master/number06.png?" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    var i = Math.floor(Math.random() * links.length);
    window.open(links[i])
})()
