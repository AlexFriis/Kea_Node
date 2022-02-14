const express = require("express");
const app = express();
const router = express.Router();
const db = require("./db.js");

app.use(express.json());

router.get("/movies", (req, res) => {
    const movies = db.findall();
    res.send(movies);
});

router.get("/movies/:id", (req, res) => {
    const movie = db.findbyid(req.params.id);
    res.send(movie);
});

router.post("/movies", (req, res) => {
    const result = db.create(req.body);
    res.send(result);
});

router.put("/movies/:id", (req, res) => {
    const result = db.update(req.body, req.params.id);
    res.send(result);
});

router.delete("/movies/:id", (req, res) => {
    const del = db.delete(req.params.id);
    res.send(del)
});

app.use("/api", router);

app.listen(8080, () => {
    console.log(`listening on: 8080`);
});
