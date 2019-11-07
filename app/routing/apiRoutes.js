var friends = require("../data/friends")

module.exports = function(app){

    app.get("/api/friends", function(req,res){
        res.json(friends)
    })
    app.post("/api/friends", function(req,res){
        var indx = 0;
        minDiff = 40;

            var currentUserScoreArr = [];
            for(var i = 0; i < req.body.scores.length; i++){
                currentUserScoreArr.push(parseInt(req.body.scores[i]))
        } 
        for(var i = 0; i < friends.length; i++){
            var totaldiff = 0;
            for(var k = 0; k < currentUserScoreArr.length; k++){
           var diff = Math.abs(currentUserScoreArr[k] - friends[i].scores[k])
           totaldiff += diff
            }
            if(totaldiff < minDiff){
                indx = i;
                minDiff = totaldiff;
            }
         }
         console.log(indx)
        friends.push(req.body)
        res.json(friends[indx])
    })
}