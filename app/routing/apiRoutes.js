// Dependencies
var friends = require('../data/friends.js');

// Export the function
module.exports = function(app) {

    // Sets the get for the api/friends route
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });



    // Set the post for the api/friends route
    app.post("/api/friends", function(req, res) {
        // This adds the new users sent data object to friends.js
        // add this line below at the end so the user doesn't become their own best friend
        for (var i = 0; i < friends.length; i++) {
            // console.log(req.body.name);
            // console.log(friends[i].name);
            for (var j = 0; j < req.body.scores.length; j++) {
                // parseInt for scores
                // console.log(parseInt(req.body.scores[j]));
                // console.log(friends[i].scores[j]);
            }
        }

        var bestFriendIndex = 0;
        var minimumDifference = 40;

        for (var i = 0; i < friends[i].length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.score[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
            if(totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }
        friends.push(req.body);

        // send back to browser the best friend match
    res.json(friends[bestFriendIndex]);
    });
}

