let dramaGenre = ["https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg", "https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg"];
let comedyGenre = ["https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg"];
$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();
    //Write code for Task Two below this line1
    if (genreInput === "drama") {
        for (let genre of dramaGenre) {
            $(".shows").append("<img src=" + genre + ">");
        }
    } else if (genreInput === "comedy") {
        for (let genre of comedyGenre) {
            $(".shows").append("<img src=" + genre + ">");
        }
    }
});


$(".suggestion-button").click(function() {
    let suggestion = $(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
    //Write code for Task Three below this line!
comedyGenre.push(suggestion);
    dramaGenre.push(suggestion);
    console.log(comedyGenre);
    console.log(dramaGenre);
});