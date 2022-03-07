const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();

//Duplicate code which probably could be replaced rather easily if i really wanted to do it
//For now it'll stay and we'll see if i'll fix it.
//It is rather unappealing though.
const homepage = fs.readFileSync("./public/pages/home.html").toString();
const jspage = fs.readFileSync("./public/pages/javascript.html").toString();
const restapi = fs.readFileSync("./public/pages/restapi.html").toString();
const node = fs.readFileSync("./public/pages/node.html").toString();
const codeconv = fs.readFileSync("./public/pages/codeconv.html").toString();
const ssr = fs.readFileSync("./public/pages/ssr.html").toString();

//Same as above comments
const homeDisp = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to mandatory 1") + homepage;
const jsDisp = nav.replace("%%DOCUMENT_TITLE%%", "Javascript") + jspage;
const restDisp = nav.replace("%%DOCUMENT_TITLE%%", "Restapi") + restapi;
const nodeDisp = nav.replace("%%DOCUMENT_TITLE%%", "Node") + node;
const ssrDisp = nav.replace("%%DOCUMENT_TITLE%%", "SSR") + ssr;
const codeDisp = nav.replace("%%DOCUMENT_TITLE%%", "Code Conventions") + codeconv;

app.get("/", (req, res) => {
    res.send(homeDisp);
});

app.get("/javascript", (req, res) => {
    res.send(jsDisp);
});

app.get("/restapi", (req, res) => {
    res.send(restDisp);
});

app.get("/node", (req, res) => {
    res.send(nodeDisp);
});

app.get("/ssr", (req, res) => {
    res.send(ssrDisp);
});

app.get("/cleancode", (req, res) => {
    res.send(codeDisp);
});


app.listen(8080, () => {
    console.log(`listening on: 8080`);
});
