function appear(){

    // get sites from json file
    var sites;
    $.ajax({
        'async': false,
        'global': false,
        'url': "favorites.json",
        'dataType': "json",
        'success': function (data) {
            sites = data;
        }
    });

    // set up config object
    var config =
    {
        "sites":sites,
        "search":
        {
            "url"  : "https://duckduckgo.com/",
            "name" : "Search...",
            "query": "q"
        }
    };

    var d = document;

    // loop through all the sites and make links for all of them
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
                lineHeight: "100px",
                display: "inline-block"
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
                        height: "100%"
                    })
                    .html(config.sites[i].text)
            )
            .appendTo(
                document.getElementById("sites").firstElementChild
            )
    }

    var form = d.querySelector("#search form"), text = form.querySelector("input");
    form.action      = config.search.url;
    text.name        = config.search.query;
    text.placeholder = config.search.name;
};

window.onload = appear;