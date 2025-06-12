const CLIENTVERSION = require("shared/model/versions.json");
const gameService = require("shared/services/game");
// const gameService = new GameService();

const defaultDescription =
    "Play or develop your own competitive online web game.  The platform supports realtime Turn-based and Trivia style games.  You must first become a developer in the acosgames GitHub Organization. Simply go to Developer Zone on ACOS to start.";
const defaultAbstract =
    "Play or develop your own competitive online web game on the ACOS serverless platform.";
const defaultPage = {
    url: "",
    title: "",
    description: "",
    abstract: "",
    author: "",
    keywords: "",
    image_src: "",
    canonical: "",
    site_name: "",
    update_time: "",
    published_time: "",
    modified_time: "",
};

async function getGameMeta(urlpath) {
    try {
        let parts = urlpath.split("/");
        let game_slug = parts[2];
        if (!game_slug) throw "Not valid game_slug";

        let result = await gameService.findGame(game_slug, true);
        let game = result;
        if (!game) throw "Game not found";

        let page = {
            url: "https://acos.games" + urlpath,
            title: game.name + " on ACOS",
            description: game.longdesc || defaultDescription,
            abstract: game.shortdesc || defaultAbstract,
            keywords:
                "Web Games,Web Dev,Game Dev,Serverless,Competitive,Ranking,Leaderboard,Item Store,Timers,Free Hosting",
            author: game.displayname,
            image_src: `https://assets.acos.games/g/${game_slug}/preview/${game.preview_images}`,
            canonical: "https://acos.games" + urlpath,
            site_name: "ACOS",
            update_time: game.tsupdate.toISOString(),
            published_time: game.tsinsert.toISOString(),
            modified_time: game.tsupdate.toISOString(),
        };

        return page;
    } catch (e) {
        console.error(e);
        return getPageMeta(urlpath);
    }
}

function getPageMeta(urlpath) {
    // var formatedMysqlString = (new Date((new Date((new Date(new Date())).toISOString())).getTime() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, 19).replace('T', ' ');

    let formattedDate = new Date();
    formattedDate = formattedDate.toISOString();

    let page = {
        url: "https://acos.games" + urlpath,
        title: "ACOS Competitive Multiplayer Web Games",
        description:
            "Play or develop your own competitive online web game.  The platform supports realtime Turn-based and Trivia style games.  You must first become a developer in the acosgames GitHub Organization. Simply go to Developer Zone on ACOS to start.",
        abstract:
            "Play or develop your own competitive online web game on the ACOS serverless platform.",
        author: "A cup of skill",
        keywords:
            "Web Games,Web Dev,Game Dev,Serverless,Competitive,Ranking,Leaderboard,Item Store,Timers,Free Hosting",
        image_src: "https://assets.acos.games/acos-logo-2025.webp",
        canonical: "https://acos.games" + urlpath,
        site_name: "ACOS",
        update_time: formattedDate,
        published_time: formattedDate,
        modified_time: formattedDate,
    };

    return page;
}

async function renderHTML(req, res) {
    let urlpath = req.originalUrl;
    console.log(urlpath);
    let page = {};

    if (urlpath.indexOf("/g/") > -1) {
        page = await getGameMeta(urlpath);
    } else page = getPageMeta(urlpath) || defaultPage;

    let output = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="${page.author}" />
                <meta name="description" content="${page.description}">
                <meta name="abstract" content="${page.abstract}">
                <meta name="keywords" content="${page.keywords}">
                <link rel="image_src" href="${page.image_src}">
                <link rel="canonical" href="${page.canonical}">
                <meta property="og:type" content="game">
                <meta property="og:site_name" content="${page.site_name}">
                <meta property="og:title" content="${page.title}">
                <meta property="og:description" content="${page.description}">
                <meta property="og:url" content="${page.url}">
                <meta property="og:updated_time" content="${page.update_time}">
                <meta property="og:image" content="${page.image_src}">
                <meta property="og:image:width" content="500">
                <meta property="og:image:height" content="500">
                <meta property="og:region" content="United States">
                <meta property="og:country_name" content="United States">
                <meta property="og:locale" content="en_US">
                <meta name="twitter:url" content="${page.url}">
                <meta name="twitter:title" content="${page.title}">
                <meta name="twitter:image" content="${page.image_src}">
                <meta property="article:published_time" content="${page.published_time}">
                <meta property="article:modified_time" content="${page.modified_time}">
                <meta itemprop="name" content="${page.title}">
                <meta itemprop="image" content="${page.image_src}">
                <title>${page.title}</title>
                <!-- <meta http-equiv="Content-Security-Policy" content="default-src ws://localhost http://localhost 'self' 'unsafe-inline' https://cdn.acos.games;" /> -->
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,800;1,500&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Inter:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-HC09PY1QY2"></script>
                <script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-HC09PY1QY2');</script>
                <style>
                    html, body { background-color: #060606}
                    #root { width:100%; height:100%; display:flex; flex-direction: column; justify-items: center; align-items: center;}
                    .loadingTxt{color:white; display:block; margin-top:0rem; margin-bottom:2rem; font-size:36px; font-weight:bold; font-family:'Arial'}
                    .ldr-1 .ball1 {  animation: grow 0.8s infinite ease-in-out; animation-delay: 0.08s; z-index:1; }
                    .ldr-1 .ball2 {  animation: grow1 0.8s infinite ease-in-out;  animation-delay: 0.13s; }
                    .ldr-1 .ball3 {  animation: grow2 0.8s infinite ease-in-out; animation-delay: 0.18s; }
                    .ldr-1 .ball4 {  animation: grow3 0.8s infinite ease-in-out; animation-delay: 0.22s;  }
                    .loader {
                        font-size: 10px;
                        margin: 50px auto;
                        text-indent: -9999em;
                        width: 11em;
                        height: 11em;
                        border-radius: 50%;
                        background: #ffffff;
                        background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
                        background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
                        background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
                        background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
                        background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
                        position: relative;
                        -webkit-animation: load3 1.4s infinite linear;
                        animation: load3 1.4s infinite linear;
                        -webkit-transform: translateZ(0);
                        -ms-transform: translateZ(0);
                        transform: translateZ(0);
                      }
                      .loader:before {
                        width: 50%;
                        height: 50%;
                        background: #ffffff;
                        border-radius: 100% 0 0 0;
                        position: absolute;
                        top: 0;
                        left: 0;
                        content: '';
                      }
                      .loader:after {
                        background: #0dc5c1;
                        width: 75%;
                        height: 75%;
                        border-radius: 50%;
                        content: '';
                        margin: auto;
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                      }
                      @-webkit-keyframes load3 {
                        0% {
                          -webkit-transform: rotate(0deg);
                          transform: rotate(0deg);
                        }
                        100% {
                          -webkit-transform: rotate(360deg);
                          transform: rotate(360deg);
                        }
                      }
                      @keyframes load3 {
                        0% {
                          -webkit-transform: rotate(0deg);
                          transform: rotate(0deg);
                        }
                        100% {
                          -webkit-transform: rotate(360deg);
                          transform: rotate(360deg);
                        }
                      }
                </style>
            </head>
            <body>
            <div class="loader">Loading...</div>
                
                <script src='https://assets.acos.games/static/bundle.${CLIENTVERSION.client.version}.js'></script>
            </body>
        </html>`;

    res.send(output);
}

async function getGameURLs() {
    try {
        let games = await gameService.getGameSiteMap();

        if (!games) throw "No games found.";

        let output = "";
        for (var i = 0; i < games.length; i++) {
            output += "https://acos.games/g/" + games[i].game_slug + "\n";
        }

        return output;
    } catch (e) {
        return "";
    }
}

async function renderSITEMAP(req, res) {
    let gameURLs = await getGameURLs();

    let output = `https://acos.games
${gameURLs}https://acos.games/dev/login
https://acos.games/login
https://acos.games/privacy
https://acos.games/terms`;

    res.send(output);
}

async function renderRobotsTxt(req, res) {
    let output = `User-agent: *
Allow: /
    
Sitemap: https://acos.games/sitemap.txt`;

    res.send(output);
}

module.exports = { renderHTML, renderSITEMAP, renderRobotsTxt };
