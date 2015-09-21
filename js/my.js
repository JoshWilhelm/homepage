function appear(){
    sitesdiv = document.getElementById("sites");
    searchdiv = document.getElementById("search");

    var config =
    {
        "sites":
        [
            { "url": "http://xkcd.com/",                       "text": "xkcd",         "color":"#96A8C8" },
            { "url": "http://youtube.com/",                     "text": "yt",         "color":"" },
            { "url": "http://boards.4chan.org/g/",              "text": "/g/",        "color":"" },
            { "url": "https://news.ycombinator.com/",           "text": "hn",         "color":"" },
            { "url": "http://facebook.com/",                    "text": "fb",         "color":"" },
            { "url": "http://github.com/",                      "text": "git",        "color":"" },
            { "url": "https://news.ycombinator.com/",           "text": "hn",         "color":"" },
            { "url": "http://facebook.com/",                    "text": "fb",         "color":"" },
            { "url": "http://github.com/",                      "text": "git",        "color":"" }
        ],
        "search":
        {
            "url"  : "https://duckduckgo.com/",
            "name" : "Search...",
            "query": "q"
        }
    }, d = document;

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        
        $("<li>")
            .attr({
                id: "li-"+i,
                // class: "list"
                class: "list text-centered"
            })
            .css({
                backgroundColor:config.sites[i].color,
                height:"100px",
            })
            .append(
                $('<a>')
                    .attr({
                        id:config.sites[i].text,
                        class:"link",
                        href:config.sites[i].url
                    })
                    .css({
                        display: "block",
                        height: "100%",
                    })
                    .html(config.sites[i].text)
            )
            .appendTo(
                document.getElementById("sites").firstElementChild
            )

        // li = d.createElement("li");
        // site = d.createElement("a");
        // site.href = config.sites[i].url;
        // site.textContent = config.sites[i].text;
        // li.appendChild(site);

        // sitesdiv.firstElementChild.appendChild(li);
    }
};

window.onload = appear;