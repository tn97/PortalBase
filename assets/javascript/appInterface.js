// *TEMPORARY*
// IDs are subject to change
$(document).ready(function () {

  //begin search bar

  var $component = $('#component1')

  $component.hide();
  
  $('#s').on('input propertychange', function () {

    $component.slideDown("slow");
    var content = $(this).val().trim();
    $component.html("<div class='container'><div class='row'>"+
    "<div style='font-size:70px;color:#36393f;top:30px;font-weight: bold' class='item col-6'>" + content + 
    "</div><div style='margin-right:20px' class='image'><img id='imageSearch'style='margin-top:5px;' src='assets/image/" + content + 
    ".png' alt='" + content +"'></div></div></div>");
    
    $(document).on("click","#imageSearch",function(){
      switch(content){
        case 'wiki':
          wikiPedia();
          break;
        case 'giphy':
          giphy();
          break;
        case 'calculator':
          calculator();
          break;
        case 'new york times':
          newYorkTimes();
          break;
        case 'checklist':
          checklist();
          break;
      }

      $(".fa-search-minus").click();
      
    })

  });

  $(function () {
    var $searchlink = $('#searchtoggl i');
    var $searchbar = $('#searchbar');

    $('ul li a').on('click', function (e) {
      e.preventDefault();

      if ($(this).attr('id') == 'searchtoggl') {
        if (!$searchbar.is(":visible")) {
          // if invisible we switch the icon to appear collapsable
          $searchlink.removeClass('fa-search').addClass('fa-search-minus');
        } else {
          // if visible we switch the icon to appear as a toggle
          $searchlink.removeClass('fa-search-minus').addClass('fa-search');
        }

        $searchbar.slideToggle(300, function () {
          // callback after search bar animation
        });
      }
    });


  });

  //End search bar

  // Begin homepage HTML

  // Begin jQuery Calc HTML
  $(document).on("click", "#btnHome",  function () {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Calculator
    var home = ("<div class='row'><img style='height:100%; width:100%;margin-left:auto;margin-right:auto' src='assets/image/bw.jpeg' alt='homepage'class='img-fluid col-12'></div>")

    $("#appContainer").append(home);
  })

  // End homepage HTML
 
  // Begin Checklist HTML

  $(document).on("click", "#btnChecklist", function () {
    checklist()
  });

  function checklist(){

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Calculator
    var checklist = ("<div id='particles-js'>" +
      "<div class='containerChecklist'><h1 class='display-4 title-display'> Checklist </h1>" +
      "<p class='lead lead-text'>This is a simple checklist that you'll be able to use on the go. Unfortunately, it  doesn't have cloud storage as of yet, but it does have local!</p>" +
      "<form><span id='todo-items'>To Do Items: <input class='form-control col-12' id='to-do' type='text'><input style='margin-top:10px;' class='btn btn-light' id='add-to-do' value='Add Item' type='submit'></span></form><br>" +
      "<div id='to-dos'></div></div></div>")


    $("#appContainer").append(checklist);
    renderChecklist();
    Fparticles();
    appF();

  };


  // End Checklist HTML
  // Begin Checklist Script

  function renderChecklist() {
    function renderTodos(list) {
      $("#to-dos").empty(); // This will empty the html

      // Creating a for loop so that we can dynamically create our todos onto the page
      for (var i = 0; i < list.length; i++) {

        // Create a new variable that will hold a <p> tag.
        // Set the value of the list at "i" as text to the "<p>" element.
        var p = $("<p id='p-color'>");
        p.text(list[i]);

        // Create a button based off of the number at i, which will cause it to be unique at every iteration.
        // Give button an attribute of "data-to-do" at i and a class called "checkbox".
        // Add a checkmark as the text of the button.
        var btnCheck = $("<button>");
        btnCheck
          .attr("data-to-do", i)
          .addClass("btn btn-checkbox checkbox")
          .text("✓");

        // Append the button to the todo item
        p = p.prepend(btnCheck);

        // Add the button and the p tag to the todos div 
        $("#to-dos").append(p);
      }
    }

    $("#add-to-do").on("click", function (event) {
      event.preventDefault();

      // Obtain value from textbox and store it as a variable
      var toDoTask = $("#to-do").val().trim();

      // Add new todo to localStorage
      list.push(toDoTask);

      // Update ToDo's
      renderTodos(list);

      // Save the todos into local storage.
      // We need JSON.stringify to convert them into a string inside the storage.
      localStorage.setItem("todoList", JSON.stringify(list));

      // Clear the textbox when finished.
      $("#to-do").val("");
    });

    // When user clicks the checkbox, that respective thing will disappear 
    $(document).on("click", ".checkbox", function () {

      // Get the unique number of the specified button and hold it in a variable.
      var toDeleteNumber = $(this).attr("data-to-do");

      // Deletes specified ID number of button
      list.splice(toDeleteNumber, 1);

      // Update the todos on the page.
      renderTodos(list);

      // Save the todos into local storage
      // JSON.stringify again

      localStorage.setItem("todoList", JSON.stringify(list));
    });

    // Load the todos from the localStorage so if it's a returning user, it shall display
    // JSON.parse is needed to re-string the array that gets received.
    var list = JSON.parse(localStorage.getItem("todoList"));

    // Checks to see if todolist exists in localStorage and is already an array. 
    // If not, then set the array to empty.
    // Otherwise, our list of arrays shows
    if (!Array.isArray(list)) {
      list = [];
    }

    // Update the todos!!!
    renderTodos(list);
  }

  // End Checklist Script
  

  // Begin jQuery Calc HTML
  $(document).on("click", "#btnCalc", function () {
    calculator()
  });
  function calculator(){
    // Clear container
    $("#appContainer").empty();

    // importing HTML for Calculator
    var calculator = ("<div id='particles-js'><div class='container containerCalc calcApp'><div class='row'>" +
      "<!-- Calculator Panel --><div class='col-lg-4'><div style='background: #36393fb0'class='card'>" +
      "<h3 style='color:#f2f2f2;'class='card-header'>Calculator</h3><div class='card-body'><button id='button-1' class='btn btn-primary number' value='1'>" +
      "<h1>1</h1></button> <a> </a><button id='button-2' class='btn btn-primary number' value='2'><h1>2</h1></button><a> </a>" +
      "<button id='button-3' class='btn btn-primary number' value='3'><h1>3</h1></button><a> </a>" +
      "<button id='button-plus' class='btn btn-danger operator' value='plus'><h1>+</h1></button><br><br>" +
      "<button id='button-4' class='btn btn-primary number' value='4'><h1>4</h1></button><a> </a>" +
      "<button id='button-5' class='btn btn-primary number' value='5'><h1>5</h1></button><a> </a>" +
      "<button id='button-6' class='btn btn-primary number' value='6'><h1>6</h1></button><a> </a>" +
      "<button id='button-minus' class='btn btn-danger operator' value='minus'><h1>&minus;</h1></button><br><br>" +
      "<button id='button-7' class='btn btn-primary number' value='7'><h1>7</h1></button><a> </a>" +
      "<button id='button-8' class='btn btn-primary number' value='8'><h1>8</h1></button><a> </a>" +
      "<button id='button-9' class='btn btn-primary number' value='9'><h1>9</h1></button><a> </a>" +
      "<button id='button-multiply' class='btn btn-danger operator' value='times'><h1>&times;</h1></button><br><br>" +
      "<button id='button-0' class='btn btn-primary number' value='0'><h1>0</h1></button><a> </a>" +
      "<button id='button-.' class='btn btn-primary number' value='.'><h1>.</h1></button><a> </a>" +
      "<button id='button-divide' class='btn btn-danger operator' value='divide'><h1>&divide;</h1></button><a> </a>" +
      "<button id='button-power' class='btn btn-danger operator' value='power'><h1>^</h1></button><br><br>" +
      "<button id='button-clear' class='btn btn-dark clear' value='clear'><h1>clear</h1></button><a> </a>" +
      "<button id='button-equal' class='btn btn-success equal' value='equals'><h1>=</h1></button></div></div></div>" +
      "<div class='col-lg-6'><div style='background: #36393fb0' class='card'><h3 style='color:#f2f2f2;' class='card-header'>Result</h3><div class='card-body'>" +
      "<h1 id='first-number'></h1><h1 id='operator'></h1><h1 id='second-number'></h1><hr><h1 id='result'></h1>" +
      "</div></div></div></div></div></div>")



    $("#appContainer").append(calculator);
    renderCalculator();
    Fparticles();
    appF();
  }


  // End jQuery Calc HTML
  // Begin jQuery Calc Script

  function renderCalculator() {
    var firstNumber = '';
    var secondNumber = '';
    var operator = '';
    var result = '';
    var isOperatorChosen = false;

    $('.number').on('click', function () {

      // check about opperator being picked yet.
      if (result !== '') {
        alert('You have already done an equation, please clear the Calculator');
      }
      else if (isOperatorChosen) {
        secondNumber += $(this).val();
        $('#second-number').text(secondNumber);

      }
      else {
        firstNumber += $(this).val();
        $('#first-number').text(firstNumber);
      }

    });

    $('.operator').on('click', function () {

      if (operator !== '') {

      }
      else if (firstNumber > 0) {

        operator = $(this).val();
        if (operator == 'plus') {
          $('#operator').text('+');
        }
        else if (operator == 'minus') {
          $('#operator').text('-');
        }
        else if (operator == 'times') {
          $('#operator').text('*');
        }
        else if (operator == 'divide') {
          $('#operator').text('\xF7');
        }
        else if (operator == 'power') {
          $('#operator').text('^');
        }
        isOperatorChosen = true;
      }
      else {
        alert('Please insert a number before choosing operator');
      }
    });

    $('.equal').on('click', function () {

      if (secondNumber === '') {
        alert('equation can not be run without 2 numbers & an operator');
      }
      else {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        if (operator === 'plus') {

          result = firstNumber + secondNumber;
        }

        else if (operator === 'minus') {
          result = firstNumber - secondNumber;
        }

        else if (operator === 'times') {
          result = firstNumber * secondNumber;
        }

        else if (operator === 'divide') {
          result = firstNumber / secondNumber;
        }

        else if (operator === 'power') {
          result = Math.pow(firstNumber, secondNumber);
        }

        $('#result').text(result);
      }


    });

    $('.clear').on('click', function () {

      $('#first-number').empty();
      $('#operator').empty();
      $('#second-number').empty();
      $('#result').empty();
      firstNumber = '';
      secondNumber = '';
      operator = '';
      result = '';
      isOperatorChosen = false;
    })
  }


  // End jQuery Calc Script
  // Begin NYTimes HTML
  $("#btnNYT").on("click", function () {
    newYorkTimes()
  });

  function newYorkTimes(){
    // Clear container
    $("#appContainer").empty();

    var newYorkTimes = ("<div id='particles-js'><div class='container containerNYT'><div class='nytFont'>"+
    "<div class='jumbotron gradient'><h1 style='color:#fff;' class='text-center'>"+
    "<strong><i class='far fa-newspaper'></i>\xa0\New York Times Search</strong></h1></div><div class='row'>"+
    "<div class='col-sm-12'><div class='card nytBox'><div class='card-header'><strong><i class='fa fa-list-alt'></i> Search Parameters</strong></div>"+
    "<div class='card-body'><form role='form'><div class='form-group'><label for='search'>Search Term:</label>"+
    "<input type='text' class='form-control' id='search-term'></div><div class='form-group'><label for='pwd'>Number of Records to Retrieve:</label>"+
    "<select id='article-count' class='custom-select' aria-labelledby='dropdownMenuButton'><option selected value='1'>1</option>"+
    "<option value='5' selected>5</option><option value='10'>10</option></select></div><div class='form-group'>"+
    "<label for='start-year'>Start Year (Optional):</label><input type='text' class='form-control' id='start-year'></div>"+
    "<div class='form-group'><label for='end-year'>End Year (Optional):</label><input type='text' class='form-control' id='end-year'></div>"+
    "<button type='submit' class='btn btn-default' id='run-search'><i class='fa fa-search'></i> Search</button>"+
    "<button class='btn btn-default' id='clear-all'><i class='fa fa-trash'></i> Clear Results</button></form></div></div></div></div>"+
    "<div class='row'><div class='col-sm-12'><br><div class='card nytBox'><div class='card-header'><strong><i class='fa fa-table'></i> Top Articles</strong></div>"+
    "<div class='card-body' id='article-section'></div></div></div></div><div class='row'><div class='col-sm-12'><hr><h5 class='text-center'>"+
    "<small>Made with lots and lots of<i class='fa fa-heart'></i></small></h5></div></div></div></div></div>")

    $("#appContainer").append(newYorkTimes)
    renderNYTimes();
    Fparticles();
    appF();
  }
  //  End NYTimes HTML

  // Being NYTimes Java

  function renderNYTimes() {
    /**
* pulls information from the form and build the query URL
* @returns {string} URL for NYT API based on form inputs
*/
    function buildQueryURL() {
      // queryURL is the url we'll use to query the API
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

      // Begin building an object to contain our API call's query parameters
      // Set the API key
      var queryParams = { "api-key": "b9f91d369f59547cd47b931d8cbc56b:0:74623931" };

      // Grab text the user typed into the search input, add to the queryParams object
      queryParamsf.q = $("#search-term")
        .val()
        .trim();

      // If the user provides a startYear, include it in the queryParams object
      var startYear = $("#start-year")
        .val()
        .trim();

      if (parseInt(startYear)) {
        queryParams.begin_date = startYear + "0101";
      }

      // If the user provides an endYear, include it in the queryParams object
      var endYear = $("#end-year")
        .val()
        .trim();

      if (parseInt(endYear)) {
        queryParams.end_date = endYear + "0101";
      }

      // Logging the URL so we have access to it for troubleshooting
      console.log("---------------\nURL: " + queryURL + "\n---------------");
      console.log(queryURL + $.param(queryParams));
      return queryURL + $.param(queryParams);
    }

    /**
     * takes API data (JSON/object) and turns it into elements on the page
     * @param {object} NYTData - object containing NYT API data
     */
    function updatePage(NYTData) {
      // Get from the form the number of results to display
      // API doesn't have a "limit" parameter, so we have to do this ourselves
      var numArticles = $("#article-count").val();

      // Log the NYTData to console, where it will show up as an object
      console.log(NYTData);
      console.log("------------------------------------");

      // Loop through and build elements for the defined number of articles
      for (var i = 0; i < numArticles; i++) {
        // Get specific article info for current index
        var article = NYTData.response.docs[i];

        // Increase the articleCount (track article # - starting at 1)
        var articleCount = i + 1;

        // Create the  list group to contain the articles and add the article content for each
        var $articleList = $("<ul>");
        $articleList.addClass("list-group");

        // Add the newly created element to the DOM
        $("#article-section").append($articleList);

        // If the article has a headline, log and append to $articleList
        var headline = article.headline;
        var $articleListItem = $("<li class='list-group-item articleHeadline'>");

        if (headline && headline.main) {
          console.log(headline.main);
          $articleListItem.append(
            "<span class='label label-primary'>" +
            articleCount +
            "</span>" +
            "<strong> " +
            headline.main +
            "</strong>"
          );
        }

        // If the article has a byline, log and append to $articleList
        var byline = article.byline;

        if (byline && byline.original) {
          console.log(byline.original);
          $articleListItem.append("<h5>" + byline.original + "</h5>");
        }

        // Log section, and append to document if exists
        var section = article.section_name;
        console.log(article.section_name);
        if (section) {
          $articleListItem.append("<h5>Section: " + section + "</h5>");
        }

        // Log published date, and append to document if exists
        var pubDate = article.pub_date;
        console.log(article.pub_date);
        if (pubDate) {
          $articleListItem.append("<h5>" + article.pub_date + "</h5>");
        }

        // Append and log url
        $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
        console.log(article.web_url);

        // Append the article
        $articleList.append($articleListItem);
      }
    }

    // Function to empty out the articles
    function clear() {
      $("#article-section").empty();
    }

    // CLICK HANDLERS
    // ==========================================================

    // .on("click") function associated with the Search Button
    $("#run-search").on("click", function (event) {
      // This line allows us to take advantage of the HTML "submit" property
      // This way we can hit enter on the keyboard and it registers the search
      // (in addition to clicks). Prevents the page from reloading on form submit.
      event.preventDefault();

      // Empty the region associated with the articles
      clear();

      // Build the query URL for the ajax request to the NYT API
      var queryURL = buildQueryURL();

      // Make the AJAX request to the API - GETs the JSON data at the queryURL.
      // The data then gets passed as an argument to the updatePage function
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(updatePage);
    });

    //  .on("click") function associated with the clear button
    $("#clear-all").on("click", clear);

  }

  // End NYtimes Java


  // Begin HMTL for Giphy

  $(document).on("click", "#btnGiphy", function() {
    giphy()
  });
  
  function giphy() {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Giphy
    var giphy = ("<div id='particles-js'><div class='containerGif col-12'><div class='container-fluid row'><div class='container-fluid user-control col-6'>" +
      "<div style='margin-left:50px;font-size:30px;'  class='form-group'><h1 class='display-4 title-display' for='search'><i class='far fa-grimace'></i>\xa0\xa0Gif Search Term</h1><input type='text' class='col-12 form-control' id='search-term-input'></div>" +
      "<button style='margin-left:50px'  type='submit' class='btn search-btn col-3' id='create-search-btn'>Search</button>\xa0\xa0\xa0" +
      "<button class='btn remove-gif-button container btn-container col-3' id='clear-gif'>Clear gifs</button>\xa0\xa0\xa0<button class='btn clear-all-btn container btn-container col-4' id='clear-all'>Clear Everything</button>" +
      "<br><br><div class='row'><div class='container' id='gif-div'></div></div></div><div style='margin-top:75px' class='col-6'><div class='btn-holder'></div></div>" +
      // "<a href='#top'><img src='assets/image/top.png' alt='up2top'  style='margin-left:70px;margin-bottom:10px;width:55px;height:55px;border:0;'</a>"+
      "</div></div></div>")


    $("#appContainer").append(giphy);
    renderGiphy();
    Fparticles();
    appF();
  }

  // End HTML for Giphy


  // Start javaScript for Giphy

  function renderGiphy() {
    var inputSearch = "";
    var searchValue = "";
    var topics = [];
    var usedTopics = [];
    var userBtn;
    var num = 0;

    // dynamically creates buttons with the input of the user
    $(document).on("click", "#create-search-btn", function () {

      // Don't refresh the page :)
      event.preventDefault();

      // checker to see if the input box is empty
      if ($("#search-term-input").val() === "") {

        return false;

      } else {

        // a checker to see if the same value is input 
        inputSearch = $("#search-term-input").val().trim();

        // empties input box
        $("#search-term-input").val("");

        // pushes the value into the array
        topics.push(inputSearch);
        console.log("push complete!");
        console.log(topics);
        btnCreate();
      }

    });

    // this function will dynamically create the search buttons
    function btnCreate() {

      // number counter, used to give each topic a unique identifier
      num++;

      // creation of the dynamic buttons
      userBtn = $("<button>")
      userBtn
        .addClass("btn search-term-btn dynamicElement")
        .appendTo($(".btn-holder"))
        .text(topics)
        .attr("data-name", topics);

      // pushes the topic out of the array, into a new "used" array, this is used as a flag.
      usedTopics.push(topics + num);
      topics = [];
      console.log(num);


      // create space between buttons  ___ Ying
      space = $("<span>")

      space
        .text("\xa0\xa0")
        .appendTo($(".btn-holder"));


    };

    // this function will display the gifs
    $(document).on("click", ".search-term-btn", function () {

      // setting searchValue to the data-name of the button
      searchValue = $(this).attr("data-name");
      console.log(searchValue);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=fz8sHcMEzac0L0N2iePYvyFkSb2JcMgc&limit=10";

      // inputting our ajax
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        var results = response.data;
        console.log(response);

        // empty gif-div   ___ Ying
        $("#gif-div").empty();

        //looping over each result item
        for (var i = 0; i < results.length; i++) {
          // creating a div with class "item"
          var gifDiv = $("<div>");
          gifDiv.addClass("item");

          // clears the gifs shown
          $("#clear-gif").on("click", function () {
            $(".item").remove();
          });

          // removes gifs and buttons
          $("#clear-all").on("click", function () {
            $(".search-term-btn").remove();
            $(".item").remove();
          });

          // storing the result's rating
          var rating = results[i].rating;

          // creating a p tag to display the result's rating
          var ptag = $("<p>").text("Rating: " + rating);

          // creating and storing an image tag
          var image = $("<img>");

          // Giving the image tag a source attribute pulled from the object returned in console.log(response) and then setting it to still
          image
            .addClass("gif")
            .attr("data-state", "still")
            .attr("src", results[i].images.fixed_height_still.url)
            .attr("data-still", results[i].images.fixed_height_still.url)
            .attr("data-animate", results[i].images.fixed_height.url)



          // Appending the image and then the paragraph to the gifDiv.
          gifDiv.append(image);
          gifDiv.append(ptag);

          // Prepending the gifDiv to the #gif-div
          $("#gif-div").prepend(gifDiv);


        }

        attachListeners()


      });


      function attachListeners() {
        $(".gif").on("click", function () {

          // getting/setting the value of attributes on the html element
          var state = $(this).attr("data-state");

          // when clicked, if the image is still, it shall animate
          // otherwise, vise versa
          if (state === "still") {
            console.log('still')
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            return

          } else {
            console.log('else')
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            return

          }
        });
      }

    })

  }

  //End javaScript for Giphy


  // Start HTML for Wikipedia

  $(document).on("click", "#btnWiki", "#imageSearch", function () {
    wikiPedia()
  })

function wikiPedia(){
  
    // Clear container
    $("#appContainer").empty();

    // importing HTML for wikipedia
    var wiki = ("<div id='particles-js'><div class='containerWiki col-12'><main><div class='row'><div class='col-9'><header class='searchForm-container'>"+
    "<form style='margin-top:20px' class='searchForm'><input type='search' class='wikipediaQuery'><button type='submit'> Search </button>"+
    "<a href='https://en.wikipedia.org/wiki/Special:Random' target='_blank' rel='noreferrer' class='icon randomIcon'>"+
    "<img src='https://image.ibb.co/fR5OX5/random.png' alt='Shuffle Icon'></a></form></header></div>"+
    "<div class='col-3'><img style='width:50%;background:#36393fb0' src='assets/image/wikiLogo.png' alt='wikilogo'></div></div><section style='background:#36393fb0' class='searchResults'></section> </main></div></div>")


    $("#appContainer").append(wiki);
    renderWiki();
    Fparticles();
    appF();
}
  // End HTML for Wikipedia

  // Begin Wiki Java

  function renderWiki() {
    function handleSubmit(event) {
      // prevent page from reloading when form is submitted
      event.preventDefault();
      // get the value of the input field
      const input = document.querySelector(".wikipediaQuery").value;
      // remove whitespace from the input
      const searchQuery = input.trim();
      // call `fetchResults` and pass it the `searchQuery`
      fetchResults(searchQuery);
    }

    function fetchResults(searchQuery) {
      const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          const results = data.query.search;
          displayResults(results);
          console.log(results);
        });
    }



    function displayResults(results) {
      // Store a reference to `.searchResults`
      const searchResults = document.querySelector(".searchResults");
      // Remove all child elements
      searchResults.innerHTML = "";
      // Loop over results array
      results.forEach(result => {
        const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

        searchResults.insertAdjacentHTML("beforeend",
          `<div class="resultItem">
            <h3 class="resultItem-title">
              <a href="${url}" target="_blank" rel="noreferrer">${result.title}</a>
            </h3>
            <span class="resultItem-snippet">${result.snippet}</span><br>
            <a href="${url}" class="resultItem-link" target="_blank" rel="noreferrer">${url}</a>
          </div>`
        );
      });
    }

    const form = document.querySelector(".searchForm");
    form.addEventListener("submit", handleSubmit);

  }

  // End Wiki Java


  // appfile1.js
  // appfile2.js
  // appfile3.js
  // appfile4.js
  // callfile.js
  // 
  // appfile1234 $(container).empty()
  // 
  // $(#buttonID).on('click', runFunctionFromAppFile()
  // can call functions from js filed called before itself.
  // i.e. callfile is listed last above because it'll then be able to access the functions of those about it.

  function Fparticles() {
    var pJS = function (tag_id, params) {

      var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');

      /* particles.js variables with default values */
      this.pJS = {
        canvas: {
          el: canvas_el,
          w: canvas_el.offsetWidth,
          h: canvas_el.offsetHeight
        },
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#fff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#ff0000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: '',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 2,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 20,
            random: false,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 3000,
              rotateY: 3000
            }
          },
          array: []
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 100,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 200,
              size: 80,
              duration: 0.4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          },
          mouse: {}
        },
        retina_detect: false,
        fn: {
          interact: {},
          modes: {},
          vendors: {}
        },
        tmp: {}
      };

      var pJS = this.pJS;

      /* params settings */
      if (params) {
        Object.deepExtend(pJS, params);
      }

      pJS.tmp.obj = {
        size_value: pJS.particles.size.value,
        size_anim_speed: pJS.particles.size.anim.speed,
        move_speed: pJS.particles.move.speed,
        line_linked_distance: pJS.particles.line_linked.distance,
        line_linked_width: pJS.particles.line_linked.width,
        mode_grab_distance: pJS.interactivity.modes.grab.distance,
        mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
        mode_bubble_size: pJS.interactivity.modes.bubble.size,
        mode_repulse_distance: pJS.interactivity.modes.repulse.distance
      };


      pJS.fn.retinaInit = function () {

        if (pJS.retina_detect && window.devicePixelRatio > 1) {
          pJS.canvas.pxratio = window.devicePixelRatio;
          pJS.tmp.retina = true;
        }
        else {
          pJS.canvas.pxratio = 1;
          pJS.tmp.retina = false;
        }

        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

        pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
        pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
        pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
        pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
        pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
        pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

      };



      /* ---------- pJS functions - canvas ------------ */

      pJS.fn.canvasInit = function () {
        pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
      };

      pJS.fn.canvasSize = function () {

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        if (pJS && pJS.interactivity.events.resize) {

          window.addEventListener('resize', function () {

            pJS.canvas.w = pJS.canvas.el.offsetWidth;
            pJS.canvas.h = pJS.canvas.el.offsetHeight;

            /* resize canvas */
            if (pJS.tmp.retina) {
              pJS.canvas.w *= pJS.canvas.pxratio;
              pJS.canvas.h *= pJS.canvas.pxratio;
            }

            pJS.canvas.el.width = pJS.canvas.w;
            pJS.canvas.el.height = pJS.canvas.h;

            /* repaint canvas on anim disabled */
            if (!pJS.particles.move.enable) {
              pJS.fn.particlesEmpty();
              pJS.fn.particlesCreate();
              pJS.fn.particlesDraw();
              pJS.fn.vendors.densityAutoParticles();
            }

            /* density particles enabled */
            pJS.fn.vendors.densityAutoParticles();

          });

        }

      };


      pJS.fn.canvasPaint = function () {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
      };

      pJS.fn.canvasClear = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
      };


      /* --------- pJS functions - particles ----------- */

      pJS.fn.particle = function (color, opacity, position) {

        /* size */
        this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
        if (pJS.particles.size.anim.enable) {
          this.size_status = false;
          this.vs = pJS.particles.size.anim.speed / 100;
          if (!pJS.particles.size.anim.sync) {
            this.vs = this.vs * Math.random();
          }
        }

        /* position */
        this.x = position ? position.x : Math.random() * pJS.canvas.w;
        this.y = position ? position.y : Math.random() * pJS.canvas.h;

        /* check position  - into the canvas */
        if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;
        else if (this.x < this.radius * 2) this.x = this.x + this.radius;
        if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;
        else if (this.y < this.radius * 2) this.y = this.y + this.radius;

        /* check position - avoid overlap */
        if (pJS.particles.move.bounce) {
          pJS.fn.vendors.checkOverlap(this, position);
        }

        /* color */
        this.color = {};
        if (typeof (color.value) == 'object') {

          if (color.value instanceof Array) {
            var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
            this.color.rgb = hexToRgb(color_selected);
          } else {
            if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
              this.color.rgb = {
                r: color.value.r,
                g: color.value.g,
                b: color.value.b
              }
            }
            if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
              this.color.hsl = {
                h: color.value.h,
                s: color.value.s,
                l: color.value.l
              }
            }
          }

        }
        else if (color.value == 'random') {
          this.color.rgb = {
            r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
            g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
            b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
          }
        }
        else if (typeof (color.value) == 'string') {
          this.color = color;
          this.color.rgb = hexToRgb(this.color.value);
        }

        /* opacity */
        this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
        if (pJS.particles.opacity.anim.enable) {
          this.opacity_status = false;
          this.vo = pJS.particles.opacity.anim.speed / 100;
          if (!pJS.particles.opacity.anim.sync) {
            this.vo = this.vo * Math.random();
          }
        }

        /* animation - velocity for speed */
        var velbase = {}
        switch (pJS.particles.move.direction) {
          case 'top':
            velbase = { x: 0, y: -1 };
            break;
          case 'top-right':
            velbase = { x: 0.5, y: -0.5 };
            break;
          case 'right':
            velbase = { x: 1, y: -0 };
            break;
          case 'bottom-right':
            velbase = { x: 0.5, y: 0.5 };
            break;
          case 'bottom':
            velbase = { x: 0, y: 1 };
            break;
          case 'bottom-left':
            velbase = { x: -0.5, y: 1 };
            break;
          case 'left':
            velbase = { x: -1, y: 0 };
            break;
          case 'top-left':
            velbase = { x: -0.5, y: -0.5 };
            break;
          default:
            velbase = { x: 0, y: 0 };
            break;
        }

        if (pJS.particles.move.straight) {
          this.vx = velbase.x;
          this.vy = velbase.y;
          if (pJS.particles.move.random) {
            this.vx = this.vx * (Math.random());
            this.vy = this.vy * (Math.random());
          }
        } else {
          this.vx = velbase.x + Math.random() - 0.5;
          this.vy = velbase.y + Math.random() - 0.5;
        }

        // var theta = 2.0 * Math.PI * Math.random();
        // this.vx = Math.cos(theta);
        // this.vy = Math.sin(theta);

        this.vx_i = this.vx;
        this.vy_i = this.vy;



        /* if shape is image */

        var shape_type = pJS.particles.shape.type;
        if (typeof (shape_type) == 'object') {
          if (shape_type instanceof Array) {
            var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
            this.shape = shape_selected;
          }
        } else {
          this.shape = shape_type;
        }

        if (this.shape == 'image') {
          var sh = pJS.particles.shape;
          this.img = {
            src: sh.image.src,
            ratio: sh.image.width / sh.image.height
          }
          if (!this.img.ratio) this.img.ratio = 1;
          if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
            pJS.fn.vendors.createSvgImg(this);
            if (pJS.tmp.pushing) {
              this.img.loaded = false;
            }
          }
        }



      };


      pJS.fn.particle.prototype.draw = function () {

        var p = this;

        if (p.radius_bubble != undefined) {
          var radius = p.radius_bubble;
        } else {
          var radius = p.radius;
        }

        if (p.opacity_bubble != undefined) {
          var opacity = p.opacity_bubble;
        } else {
          var opacity = p.opacity;
        }

        if (p.color.rgb) {
          var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
        } else {
          var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
        }

        pJS.canvas.ctx.fillStyle = color_value;
        pJS.canvas.ctx.beginPath();

        switch (p.shape) {

          case 'circle':
            pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
            break;

          case 'edge':
            pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
            break;

          case 'triangle':
            pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
            break;

          case 'polygon':
            pJS.fn.vendors.drawShape(
              pJS.canvas.ctx,
              p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
              p.y - radius / (2.66 / 3.5), // startY
              radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
              pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
              1 // sideCountDenominator
            );
            break;

          case 'star':
            pJS.fn.vendors.drawShape(
              pJS.canvas.ctx,
              p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), // startX
              p.y - radius / (2 * 2.66 / 3.5), // startY
              radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
              pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
              2 // sideCountDenominator
            );
            break;

          case 'image':

            function draw() {
              pJS.canvas.ctx.drawImage(
                img_obj,
                p.x - radius,
                p.y - radius,
                radius * 2,
                radius * 2 / p.img.ratio
              );
            }

            if (pJS.tmp.img_type == 'svg') {
              var img_obj = p.img.obj;
            } else {
              var img_obj = pJS.tmp.img_obj;
            }

            if (img_obj) {
              draw();
            }

            break;

        }

        pJS.canvas.ctx.closePath();

        if (pJS.particles.shape.stroke.width > 0) {
          pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
          pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
          pJS.canvas.ctx.stroke();
        }

        pJS.canvas.ctx.fill();

      };


      pJS.fn.particlesCreate = function () {
        for (var i = 0; i < pJS.particles.number.value; i++) {
          pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
        }
      };

      pJS.fn.particlesUpdate = function () {

        for (var i = 0; i < pJS.particles.array.length; i++) {

          /* the particle */
          var p = pJS.particles.array[i];

          // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
          // var f = -BANG_SIZE / d;
          // if ( d < BANG_SIZE ) {
          //     var t = Math.atan2( dy, dx );
          //     p.vx = f * Math.cos(t);
          //     p.vy = f * Math.sin(t);
          // }

          /* move the particle */
          if (pJS.particles.move.enable) {
            var ms = pJS.particles.move.speed / 2;
            p.x += p.vx * ms;
            p.y += p.vy * ms;
          }

          /* change opacity status */
          if (pJS.particles.opacity.anim.enable) {
            if (p.opacity_status == true) {
              if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
              p.opacity += p.vo;
            } else {
              if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
              p.opacity -= p.vo;
            }
            if (p.opacity < 0) p.opacity = 0;
          }

          /* change size */
          if (pJS.particles.size.anim.enable) {
            if (p.size_status == true) {
              if (p.radius >= pJS.particles.size.value) p.size_status = false;
              p.radius += p.vs;
            } else {
              if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
              p.radius -= p.vs;
            }
            if (p.radius < 0) p.radius = 0;
          }

          /* change particle position if it is out of canvas */
          if (pJS.particles.move.out_mode == 'bounce') {
            var new_pos = {
              x_left: p.radius,
              x_right: pJS.canvas.w,
              y_top: p.radius,
              y_bottom: pJS.canvas.h
            }
          } else {
            var new_pos = {
              x_left: -p.radius,
              x_right: pJS.canvas.w + p.radius,
              y_top: -p.radius,
              y_bottom: pJS.canvas.h + p.radius
            }
          }

          if (p.x - p.radius > pJS.canvas.w) {
            p.x = new_pos.x_left;
            p.y = Math.random() * pJS.canvas.h;
          }
          else if (p.x + p.radius < 0) {
            p.x = new_pos.x_right;
            p.y = Math.random() * pJS.canvas.h;
          }
          if (p.y - p.radius > pJS.canvas.h) {
            p.y = new_pos.y_top;
            p.x = Math.random() * pJS.canvas.w;
          }
          else if (p.y + p.radius < 0) {
            p.y = new_pos.y_bottom;
            p.x = Math.random() * pJS.canvas.w;
          }

          /* out of canvas modes */
          switch (pJS.particles.move.out_mode) {
            case 'bounce':
              if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
              else if (p.x - p.radius < 0) p.vx = -p.vx;
              if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
              else if (p.y - p.radius < 0) p.vy = -p.vy;
              break;
          }

          /* events */
          if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
            pJS.fn.modes.grabParticle(p);
          }

          if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
            pJS.fn.modes.bubbleParticle(p);
          }

          if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
            pJS.fn.modes.repulseParticle(p);
          }

          /* interaction auto between particles */
          if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
            for (var j = i + 1; j < pJS.particles.array.length; j++) {
              var p2 = pJS.particles.array[j];

              /* link particles */
              if (pJS.particles.line_linked.enable) {
                pJS.fn.interact.linkParticles(p, p2);
              }

              /* attract particles */
              if (pJS.particles.move.attract.enable) {
                pJS.fn.interact.attractParticles(p, p2);
              }

              /* bounce particles */
              if (pJS.particles.move.bounce) {
                pJS.fn.interact.bounceParticles(p, p2);
              }

            }
          }


        }

      };

      pJS.fn.particlesDraw = function () {

        /* clear canvas */
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

        /* update each particles param */
        pJS.fn.particlesUpdate();

        /* draw each particle */
        for (var i = 0; i < pJS.particles.array.length; i++) {
          var p = pJS.particles.array[i];
          p.draw();
        }

      };

      pJS.fn.particlesEmpty = function () {
        pJS.particles.array = [];
      };

      pJS.fn.particlesRefresh = function () {

        /* init all */
        cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        pJS.tmp.source_svg = undefined;
        pJS.tmp.img_obj = undefined;
        pJS.tmp.count_svg = 0;
        pJS.fn.particlesEmpty();
        pJS.fn.canvasClear();

        /* restart */
        pJS.fn.vendors.start();

      };


      /* ---------- pJS functions - particles interaction ------------ */

      pJS.fn.interact.linkParticles = function (p1, p2) {

        var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

        /* draw a line between p1 and p2 if the distance between them is under the config distance */
        if (dist <= pJS.particles.line_linked.distance) {

          var opacity_line = pJS.particles.line_linked.opacity - (dist / (1 / pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

          if (opacity_line > 0) {

            /* style */
            var color_line = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
            pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
            //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

            /* path */
            pJS.canvas.ctx.beginPath();
            pJS.canvas.ctx.moveTo(p1.x, p1.y);
            pJS.canvas.ctx.lineTo(p2.x, p2.y);
            pJS.canvas.ctx.stroke();
            pJS.canvas.ctx.closePath();

          }

        }

      };


      pJS.fn.interact.attractParticles = function (p1, p2) {

        /* condensed particles */
        var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= pJS.particles.line_linked.distance) {

          var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
            ay = dy / (pJS.particles.move.attract.rotateY * 1000);

          p1.vx -= ax;
          p1.vy -= ay;

          p2.vx += ax;
          p2.vy += ay;

        }


      }


      pJS.fn.interact.bounceParticles = function (p1, p2) {

        var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy),
          dist_p = p1.radius + p2.radius;

        if (dist <= dist_p) {
          p1.vx = -p1.vx;
          p1.vy = -p1.vy;

          p2.vx = -p2.vx;
          p2.vy = -p2.vy;
        }

      }


      /* ---------- pJS functions - modes events ------------ */

      pJS.fn.modes.pushParticles = function (nb, pos) {

        pJS.tmp.pushing = true;

        for (var i = 0; i < nb; i++) {
          pJS.particles.array.push(
            new pJS.fn.particle(
              pJS.particles.color,
              pJS.particles.opacity.value,
              {
                'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
                'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
              }
            )
          )
          if (i == nb - 1) {
            if (!pJS.particles.move.enable) {
              pJS.fn.particlesDraw();
            }
            pJS.tmp.pushing = false;
          }
        }

      };


      pJS.fn.modes.removeParticles = function (nb) {

        pJS.particles.array.splice(0, nb);
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }

      };


      pJS.fn.modes.bubbleParticle = function (p) {

        /* on hover event */
        if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {

          var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
            ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

          function init() {
            p.opacity_bubble = p.opacity;
            p.radius_bubble = p.radius;
          }

          /* mousemove - check ratio */
          if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {

            if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {

              /* size */
              if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {

                if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
                  var size = p.radius + (pJS.interactivity.modes.bubble.size * ratio);
                  if (size >= 0) {
                    p.radius_bubble = size;
                  }
                } else {
                  var dif = p.radius - pJS.interactivity.modes.bubble.size,
                    size = p.radius - (dif * ratio);
                  if (size > 0) {
                    p.radius_bubble = size;
                  } else {
                    p.radius_bubble = 0;
                  }
                }

              }

              /* opacity */
              if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {

                if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
                  var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
                  if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                    p.opacity_bubble = opacity;
                  }
                } else {
                  var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
                  if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                    p.opacity_bubble = opacity;
                  }
                }

              }

            }

          } else {
            init();
          }


          /* mouseleave */
          if (pJS.interactivity.status == 'mouseleave') {
            init();
          }

        }

        /* on click event */
        else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {


          if (pJS.tmp.bubble_clicking) {
            var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

            if (time_spent > pJS.interactivity.modes.bubble.duration) {
              pJS.tmp.bubble_duration_end = true;
            }

            if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
              pJS.tmp.bubble_clicking = false;
              pJS.tmp.bubble_duration_end = false;
            }
          }


          function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {

            if (bubble_param != particles_param) {

              if (!pJS.tmp.bubble_duration_end) {
                if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                  if (p_obj_bubble != undefined) var obj = p_obj_bubble;
                  else var obj = p_obj;
                  if (obj != bubble_param) {
                    var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                    if (id == 'size') p.radius_bubble = value;
                    if (id == 'opacity') p.opacity_bubble = value;
                  }
                } else {
                  if (id == 'size') p.radius_bubble = undefined;
                  if (id == 'opacity') p.opacity_bubble = undefined;
                }
              } else {
                if (p_obj_bubble != undefined) {
                  var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                    dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
                  if (id == 'size') p.radius_bubble = value;
                  if (id == 'opacity') p.opacity_bubble = value;
                }
              }

            }

          }

          if (pJS.tmp.bubble_clicking) {
            /* size */
            process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
            /* opacity */
            process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
          }

        }

      };


      pJS.fn.modes.repulseParticle = function (p) {

        if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

          var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

          var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse },
            repulseRadius = pJS.interactivity.modes.repulse.distance,
            velocity = 100,
            repulseFactor = clamp((1 / repulseRadius) * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);

          var pos = {
            x: p.x + normVec.x * repulseFactor,
            y: p.y + normVec.y * repulseFactor
          }

          if (pJS.particles.move.out_mode == 'bounce') {
            if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
            if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
          } else {
            p.x = pos.x;
            p.y = pos.y;
          }

        }


        else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

          if (!pJS.tmp.repulse_finish) {
            pJS.tmp.repulse_count++;
            if (pJS.tmp.repulse_count == pJS.particles.array.length) {
              pJS.tmp.repulse_finish = true;
            }
          }

          if (pJS.tmp.repulse_clicking) {

            var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);

            var dx = pJS.interactivity.mouse.click_pos_x - p.x,
              dy = pJS.interactivity.mouse.click_pos_y - p.y,
              d = dx * dx + dy * dy;

            var force = -repulseRadius / d * 1;

            function process() {

              var f = Math.atan2(dy, dx);
              p.vx = force * Math.cos(f);
              p.vy = force * Math.sin(f);

              if (pJS.particles.move.out_mode == 'bounce') {
                var pos = {
                  x: p.x + p.vx,
                  y: p.y + p.vy
                }
                if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
                else if (pos.x - p.radius < 0) p.vx = -p.vx;
                if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
                else if (pos.y - p.radius < 0) p.vy = -p.vy;
              }

            }

            // default
            if (d <= repulseRadius) {
              process();
            }

            // bang - slow motion mode
            // if(!pJS.tmp.repulse_finish){
            //   if(d <= repulseRadius){
            //     process();
            //   }
            // }else{
            //   process();
            // }


          } else {

            if (pJS.tmp.repulse_clicking == false) {

              p.vx = p.vx_i;
              p.vy = p.vy_i;

            }

          }

        }

      }


      pJS.fn.modes.grabParticle = function (p) {

        if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {

          var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
            dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

          /* draw a line between the cursor and the particle if the distance between them is under the config distance */
          if (dist_mouse <= pJS.interactivity.modes.grab.distance) {

            var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

            if (opacity_line > 0) {

              /* style */
              var color_line = pJS.particles.line_linked.color_rgb_line;
              pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
              pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
              //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

              /* path */
              pJS.canvas.ctx.beginPath();
              pJS.canvas.ctx.moveTo(p.x, p.y);
              pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
              pJS.canvas.ctx.stroke();
              pJS.canvas.ctx.closePath();

            }

          }

        }

      };



      /* ---------- pJS functions - vendors ------------ */

      pJS.fn.vendors.eventsListeners = function () {

        /* events target element */
        if (pJS.interactivity.detect_on == 'window') {
          pJS.interactivity.el = window;
        } else {
          pJS.interactivity.el = pJS.canvas.el;
        }


        /* detect mouse pos - on hover / click event */
        if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {

          /* el on mousemove */
          pJS.interactivity.el.addEventListener('mousemove', function (e) {

            if (pJS.interactivity.el == window) {
              var pos_x = e.clientX,
                pos_y = e.clientY;
            }
            else {
              var pos_x = e.offsetX || e.clientX,
                pos_y = e.offsetY || e.clientY;
            }

            pJS.interactivity.mouse.pos_x = pos_x;
            pJS.interactivity.mouse.pos_y = pos_y;

            if (pJS.tmp.retina) {
              pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
              pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
            }

            pJS.interactivity.status = 'mousemove';

          });

          /* el on onmouseleave */
          pJS.interactivity.el.addEventListener('mouseleave', function (e) {

            pJS.interactivity.mouse.pos_x = null;
            pJS.interactivity.mouse.pos_y = null;
            pJS.interactivity.status = 'mouseleave';

          });

        }

        /* on click event */
        if (pJS.interactivity.events.onclick.enable) {

          pJS.interactivity.el.addEventListener('click', function () {

            pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
            pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
            pJS.interactivity.mouse.click_time = new Date().getTime();

            if (pJS.interactivity.events.onclick.enable) {

              switch (pJS.interactivity.events.onclick.mode) {

                case 'push':
                  if (pJS.particles.move.enable) {
                    pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                  } else {
                    if (pJS.interactivity.modes.push.particles_nb == 1) {
                      pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                    }
                    else if (pJS.interactivity.modes.push.particles_nb > 1) {
                      pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                    }
                  }
                  break;

                case 'remove':
                  pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
                  break;

                case 'bubble':
                  pJS.tmp.bubble_clicking = true;
                  break;

                case 'repulse':
                  pJS.tmp.repulse_clicking = true;
                  pJS.tmp.repulse_count = 0;
                  pJS.tmp.repulse_finish = false;
                  setTimeout(function () {
                    pJS.tmp.repulse_clicking = false;
                  }, pJS.interactivity.modes.repulse.duration * 1000)
                  break;

              }

            }

          });

        }


      };

      pJS.fn.vendors.densityAutoParticles = function () {

        if (pJS.particles.number.density.enable) {

          /* calc area */
          var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
          if (pJS.tmp.retina) {
            area = area / (pJS.canvas.pxratio * 2);
          }

          /* calc number of particles based on density area */
          var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

          /* add or remove X particles */
          var missing_particles = pJS.particles.array.length - nb_particles;
          if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
          else pJS.fn.modes.removeParticles(missing_particles);

        }

      };


      pJS.fn.vendors.checkOverlap = function (p1, position) {
        for (var i = 0; i < pJS.particles.array.length; i++) {
          var p2 = pJS.particles.array[i];

          var dx = p1.x - p2.x,
            dy = p1.y - p2.y,
            dist = Math.sqrt(dx * dx + dy * dy);

          if (dist <= p1.radius + p2.radius) {
            p1.x = position ? position.x : Math.random() * pJS.canvas.w;
            p1.y = position ? position.y : Math.random() * pJS.canvas.h;
            pJS.fn.vendors.checkOverlap(p1);
          }
        }
      };


      pJS.fn.vendors.createSvgImg = function (p) {

        /* set color to svg element */
        var svgXml = pJS.tmp.source_svg,
          rgbHex = /#([0-9A-F]{3,6})/gi,
          coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
            if (p.color.rgb) {
              var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
            } else {
              var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
            }
            return color_value;
          });

        /* prepare to create img with colored svg */
        var svg = new Blob([coloredSvgXml], { type: 'image/svg+xml;charset=utf-8' }),
          DOMURL = window.URL || window.webkitURL || window,
          url = DOMURL.createObjectURL(svg);

        /* create particle img obj */
        var img = new Image();
        img.addEventListener('load', function () {
          p.img.obj = img;
          p.img.loaded = true;
          DOMURL.revokeObjectURL(url);
          pJS.tmp.count_svg++;
        });
        img.src = url;

      };


      pJS.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(pJS.fn.drawAnimFrame);
        canvas_el.remove();
        pJSDom = null;
      };


      pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {

        // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
        var sideCount = sideCountNumerator * sideCountDenominator;
        var decimalSides = sideCountNumerator / sideCountDenominator;
        var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for (var i = 0; i < sideCount; i++) {
          c.lineTo(sideLength, 0);
          c.translate(sideLength, 0);
          c.rotate(interiorAngle);
        }
        //c.stroke();
        c.fill();
        c.restore();

      };

      pJS.fn.vendors.exportImg = function () {
        window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
      };


      pJS.fn.vendors.loadImg = function (type) {

        pJS.tmp.img_error = undefined;

        if (pJS.particles.shape.image.src != '') {

          if (type == 'svg') {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', pJS.particles.shape.image.src);
            xhr.onreadystatechange = function (data) {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  pJS.tmp.source_svg = data.currentTarget.response;
                  pJS.fn.vendors.checkBeforeDraw();
                } else {
                  console.log('Error pJS - Image not found');
                  pJS.tmp.img_error = true;
                }
              }
            }
            xhr.send();

          } else {

            var img = new Image();
            img.addEventListener('load', function () {
              pJS.tmp.img_obj = img;
              pJS.fn.vendors.checkBeforeDraw();
            });
            img.src = pJS.particles.shape.image.src;

          }

        } else {
          console.log('Error pJS - No image.src');
          pJS.tmp.img_error = true;
        }

      };


      pJS.fn.vendors.draw = function () {

        if (pJS.particles.shape.type == 'image') {

          if (pJS.tmp.img_type == 'svg') {

            if (pJS.tmp.count_svg >= pJS.particles.number.value) {
              pJS.fn.particlesDraw();
              if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
              else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            } else {
              //console.log('still loading...');
              if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            }

          } else {

            if (pJS.tmp.img_obj != undefined) {
              pJS.fn.particlesDraw();
              if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
              else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            } else {
              if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            }

          }

        } else {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      };


      pJS.fn.vendors.checkBeforeDraw = function () {

        // if shape is image
        if (pJS.particles.shape.type == 'image') {

          if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
            pJS.tmp.checkAnimFrame = requestAnimFrame(check);
          } else {
            //console.log('images loaded! cancel check');
            cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
            if (!pJS.tmp.img_error) {
              pJS.fn.vendors.init();
              pJS.fn.vendors.draw();
            }

          }

        } else {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }

      };


      pJS.fn.vendors.init = function () {

        /* init canvas + particles */
        pJS.fn.retinaInit();
        pJS.fn.canvasInit();
        pJS.fn.canvasSize();
        pJS.fn.canvasPaint();
        pJS.fn.particlesCreate();
        pJS.fn.vendors.densityAutoParticles();

        /* particles.line_linked - convert hex colors to rgb */
        pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

      };


      pJS.fn.vendors.start = function () {

        if (isInArray('image', pJS.particles.shape.type)) {
          pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
          pJS.fn.vendors.loadImg(pJS.tmp.img_type);
        } else {
          pJS.fn.vendors.checkBeforeDraw();
        }

      };




      /* ---------- pJS - start ------------ */


      pJS.fn.vendors.eventsListeners();

      pJS.fn.vendors.start();



    };

    /* ---------- global functions - vendors ------------ */

    Object.deepExtend = function (destination, source) {
      for (var property in source) {
        if (source[property] && source[property].constructor &&
          source[property].constructor === Object) {
          destination[property] = destination[property] || {};
          arguments.callee(destination[property], source[property]);
        } else {
          destination[property] = source[property];
        }
      }
      return destination;
    };

    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();

    window.cancelRequestAnimFrame = (function () {
      return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
    })();

    function hexToRgb(hex) {
      // By Tim Down - http://stackoverflow.com/a/5624139/3493650
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };

    function clamp(number, min, max) {
      return Math.min(Math.max(number, min), max);
    };

    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }


    /* ---------- particles.js functions - start ------------ */

    window.pJSDom = [];

    window.particlesJS = function (tag_id, params) {

      //console.log(params);

      /* no string id? so it's object params, and set the id with default id */
      if (typeof (tag_id) != 'string') {
        params = tag_id;
        tag_id = 'particles-js';
      }

      /* no id? set the id to default id */
      if (!tag_id) {
        tag_id = 'particles-js';
      }

      /* pJS elements */
      var pJS_tag = document.getElementById(tag_id),
        pJS_canvas_class = 'particles-js-canvas-el',
        exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

      /* remove canvas if exists into the pJS target tag */
      if (exist_canvas.length) {
        while (exist_canvas.length > 0) {
          pJS_tag.removeChild(exist_canvas[0]);
        }
      }

      /* create canvas element */
      var canvas_el = document.createElement('canvas');
      canvas_el.className = pJS_canvas_class;

      /* set size canvas */
      canvas_el.style.width = "100%";
      canvas_el.style.height = "100%";

      /* append canvas */
      var canvas = document.getElementById(tag_id).appendChild(canvas_el);

      /* launch particle.js */
      if (canvas != null) {
        pJSDom.push(new pJS(tag_id, params));
      }

    };

    window.particlesJS.load = function (tag_id, path_config_json, callback) {

      /* load json config */
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path_config_json);
      xhr.onreadystatechange = function (data) {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            var params = JSON.parse(data.currentTarget.response);
            window.particlesJS(tag_id, params);
            if (callback) callback();
          } else {
            console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
            console.log('Error pJS - File config not found');
          }
        }
      };
      xhr.send();

    };
  }

  function appF() {
    particlesJS('particles-js',

      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );
  }

});

