var Rating;
(function (Rating) {
    Rating[Rating["GOOD"] = 100] = "GOOD";
    Rating[Rating["BETTER"] = 200] = "BETTER";
    Rating[Rating["BEST"] = 300] = "BEST";
})(Rating || (Rating = {}));
var userRating = Rating.BEST;
console.log(userRating);
