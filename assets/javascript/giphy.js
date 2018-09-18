// Initial array of animals
var animals = ["dog", "cat", "rabbit", "bird", "lion", "chicken"];

function displayAnimalInfo() {

    var animal = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=D2JWHM3zl3NtzjkI09tm0XnLu5QYET6s";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#gif-view").empty();

        for (var i = 0; i < 100; i++) {

            //rating
            var animalDiv = $("<div class='animal col-4 img-fluid'>");

            var ratingHere = response.data[i].rating;

            var ratingPost = $("<p class='ratingcool'>").text("Rating: " + ratingHere);

            animalDiv.append(ratingPost);

            //gif
            var gifURL = response.data[i].images.original_still.url;

            var gifURLstill = response.data[i].images.original_still.url;

            var gifURLanimate = response.data[i].images.original.url;


            var gif = $("<img class='gifcool'>").attr("src", gifURL);

            gif.addClass("gifcool");

            gif.attr("data-still", gifURLstill);

            gif.attr("id", "gifNum" + [i]);

            gif.attr("data-animate", gifURLanimate)

            gif.attr("data-state", "still");

            gif.on('click', function () {

                var state = $(this).attr("data-state");

                if (state === "still") {

                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");


                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            })

            $(".animal").hide();

            $(".animal").slice(0, 9).show();

            animalDiv.append(gif);

            $("#gif-view").prepend(animalDiv);


            $("#load-more").on('click', function (e) {
                e.preventDefault();
                $(".animal:hidden").slice(0, 9).slideDown();
                // if ($(".animal:hidden").length == 0) {
                //     $("#load").fadeOut('slow');
                // }
                $('html,body').animate({
                    scrollTop: $("#gifNum6").offset().top
                }, 700);

                $('a[href=#top]').click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });

                $(window).scroll(function () {
                    if ($("#gifNum0").scrollTop() > 50) {
                        $('.totop a').fadeIn();
                    } else {
                        $('.totop a').fadeOut();
                    }
                });

            })



        }

    })
}

function renderButtons() {

    $("#button-view").empty();

    for (var i = 0; i < animals.length; i++) {


        var a = $("<button>");

        a.addClass("animal-btn");

        a.attr("data-name", animals[i]);

        a.text(animals[i]);

        $("#button-view").append(a);
    }
}

$("#add-animal").on("click", function (event) {

    if ($("#animal-input").val() === "") {
        alert("Please type a kind of animal!")
    } else {

        event.preventDefault();

        var animal = $("#animal-input").val().trim();

        animals.push(animal);

        renderButtons();


    }
});

$(document).on("click", ".animal-btn", displayAnimalInfo);

renderButtons();