# Friend Finder

## A fast 10 question quiz to find a compatible friend! Simply answer the questions to the best of your ability and we will do the rest!


## Check it out!: 
[Open Here](#Herokulink "Friend Finder")

## Code Example:

``` 
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
        friends.push(req.body);
    });
}
```

## Built With:
*  HTML
* Javascript
* JQuery 
* Bootstrap
* Node
* Express


## Future Development: 
> Finish up the functionality so it will show the best match.
> Add data persistence to the site so that the user can see others that have matched best with.


## Authors: 
* Alison Kelly