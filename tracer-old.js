javascript: (function() {
    var links = new Array();
    links[0] = "http://lorempixel.com/800/800/cats/" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[1] = "http://lorempixel.com/800/800/cats/" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[2] = "http://lorempixel.com/800/800/cats/" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[3] = "http://lorempixel.com/800/800/cats/" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[4] = "http://lorempixel.com/800/800/cats/" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[5] = "http://lorempixel.com/800/800/cats/" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    links[6] = "http://lorempixel.com/800/800/cats/" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    var i = Math.floor(Math.random() * links.length);
    window.open(links[i])
})()
