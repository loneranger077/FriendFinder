const app = express();

module.exports = function(app) {

app.post("/api/friends",  function(req, res) {
    var newRes = req.body;
    console.log(newRes);
    var score = [];
    for (let i=0; i<10; i++) {
        score = score.append(newRes.scores[i]);
    };
    const diff_tots = [];
    for (let i=0; i<11; i++) {
        var diff_tot;
        for (let j=0; j<10; j++) {
            const diff = Math.abs((friends.js[i].scores[j])-(score[j]));
            diff_tot = diff_tot + diff;
        };
        diff_tots = diff_tots.append(diff_tot);
    };
    match_num = Array.min(diff_tots);
    name = friends.js[match_num].name;
    url = friends.js[match_num].photo;
    $("#match").modal(`Your match is: ${name}`);
    res.json(newRes);
});

app.get("/api/friends", function(req, res) {
    res.json(stuff);
    console.log("sent");
});
}