app.post("/api/friends",  function(req, res) {
    var newRes = req.body;
    console.log(newRes);
    res.json(newRes);
});

app.get("/api/friends", function(req, res) {
    res.json(stuff);
    console.log("sent");
});