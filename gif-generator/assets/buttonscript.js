$( document ).ready(function() {
    
    $("#button").on("click", function() {
        document.getElementById("gif").setAttribute("style", "display: flex; justify-content: center; overflow: hidden;");
        document.getElementById("button").setAttribute("style", "padding-bottom: none;");
        var APIKey = "tgtaTKl78n8p3aGqwAqKB2S4sWrBoNG5";
        var giphyURL = "https://api.giphy.com/v1/gifs/random?api_key=" + APIKey + "&tag=pokemon";

        $.ajax({
            url: giphyURL,
            method: "GET"
          }) .then(function(response) {

            $("#gif").empty();

            var gifURL = response.data.image_original_url;
            var gifImage = $("<img>");

            gifImage.attr("src", gifURL);
            gifImage.attr("alt", "random pokemon GIF");
            $("#gif").append(gifImage);
    });
        $("#pokeball").css({"height": "10%", "width": "10%"});
        $("#button").css({"margin-top": "20px"});
    });
});