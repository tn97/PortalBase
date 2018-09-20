// *TEMPORARY*
// IDs are subject to change
$(document).ready(function () {
  // Begin homepage HTML

    // Begin jQuery Calc HTML
    $(document).on("click", "#btnHome", function () {

      // Clear container
      $("#appContainer").empty();
  
      // importing HTML for Calculator
      var home = ("<div class='row'><img style='margin-left:auto;margin-right:auto' src='assets/image/bw.jpeg' alt='homepage'class='img-fluid col-12'></div>")
    
      $("#appContainer").append(home);
    })

  // End homepage HTML

  // Begin Checklist HTML

  $(document).on("click", "#btnChecklist", function () {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Calculator
    var checklist = ("<div class='row'>"+
    "<div class='container'><h1 class='display-4 title-display'> Checklist </h1>"+
    "<p class='lead lead-text'>This is a simple checklist that you'll be able to use on the go. Unfortunately, it  doesn't have cloud storage as of yet, but it does have local!</p>"+
    "<form><span id='todo-items'>To Do Items: <input class='form-control col-12' id='to-do' type='text'><input style='margin-top:10px;' class='btn btn-light' id='add-to-do' value='Add Item' type='submit'></span></form><br>"+
    "<div id='to-dos'></div></div></div>")


    $("#appContainer").append(checklist);
    renderChecklist();
  })


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

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Calculator
    var calculator = ("<div class='container calcApp'><div class='row'><!-- Calculator Panel --><div class='col-lg-4'><div class='card'><h3 class='card-header'>Calculator</h3><div class='card-body'><button id='button-1' class='btn btn-primary number' value='1'><h1>1</h1></button> <a> </a><button id='button-2' class='btn btn-primary number' value='2'><h1>2</h1></button><a> </a><button id='button-3' class='btn btn-primary number' value='3'><h1>3</h1></button><a> </a><button id='button-plus' class='btn btn-danger operator' value='plus'><h1>+</h1></button><br><br><button id='button-4' class='btn btn-primary number' value='4'><h1>4</h1></button><a> </a><button id='button-5' class='btn btn-primary number' value='5'><h1>5</h1></button><a> </a><button id='button-6' class='btn btn-primary number' value='6'><h1>6</h1></button><a> </a><button id='button-minus' class='btn btn-danger operator' value='minus'><h1>&minus;</h1></button><br><br><button id='button-7' class='btn btn-primary number' value='7'><h1>7</h1></button><a> </a><button id='button-8' class='btn btn-primary number' value='8'><h1>8</h1></button><a> </a><button id='button-9' class='btn btn-primary number' value='9'><h1>9</h1></button><a> </a><button id='button-multiply' class='btn btn-danger operator' value='times'><h1>&times;</h1></button><br><br><button id='button-0' class='btn btn-primary number' value='0'><h1>0</h1></button><a> </a><button id='button-.' class='btn btn-primary number' value='.'><h1>.</h1></button><a> </a><button id='button-divide' class='btn btn-danger operator' value='divide'><h1>&divide;</h1></button><a> </a><button id='button-power' class='btn btn-danger operator' value='power'><h1>^</h1></button><br><br><button id='button-clear' class='btn btn-dark clear' value='clear'><h1>clear</h1></button><a> </a><button id='button-equal' class='btn btn-success equal' value='equals'><h1>=</h1></button></div></div></div><div class='col-lg-6'><div class='card'><h3 class='card-header'>Result</h3><div class='card-body'><h1 id='first-number'></h1><h1 id='operator'></h1><h1 id='second-number'></h1><hr><h1 id='result'></h1></div></div></div></div></div>")



    $("#appContainer").append(calculator);
    renderCalculator();
  })


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

    // Clear container
    $("#CONTAINERGOESHERE").empty();

    var newYorkTimes = ("<div class='container'><div class='jumbotron' style='background-color: #20315A ; color: white;'><h1 class='text-center'><strong><i class='fa fa-newspaper-o'></i> New York Times Search</strong></h1></div><div class='row'><div class='col-sm-12'><br><div class='card'><div class='card-header'><strong><i class='fa fa-list-alt'></i> Search Parameters</strong></div><div class='card-body'><form role='form'><div class='form-group'><label for='search'>Search Term:</label><input type='text' class='form-control' id='search-term'></div><div class='form-group'><label for='pwd'>Number of Records to Retrieve:</label><select id='article-count' class='custom-select' aria-labelledby='dropdownMenuButton'><option selected value='1'>1</option><option value='5' selected>5</option><option value='10'>10</option></select></div><div class='form-group'><label for='start-year'>Start Year (Optional):</label><input type='text' class='form-control' id='start-year'></div><div class='form-group'><label for='end-year'>End Year (Optional):</label><input type='text' class='form-control' id='end-year'></div><button type='submit' class='btn btn-default' id='run-search'><i class='fa fa-search'></i> Search</button><button class='btn btn-default' id='clear-all'><i class='fa fa-trash'></i> Clear Results</button></form></div></div></div></div><div class='row'><div class='col-sm-12'><br><div class='card'><div class='card-header'><strong><i class='fa fa-table'></i> Top Articles</strong></div><div class='card-body' id='article-section'></div></div></div></div><div class='row'><div class='col-sm-12'><hr><h5 class='text-center'><small>Made with lots and lots of<i class='fa fa-heart'></i></small></h5></div></div></div>")

    $("#test-container").append(newYorkTimes)
  })
  //  End NYTimes HTML


  $("#btnGiphy").on("click", function () {

    // Clear container
    $("#CONTAINERGOESHERE").empty();

    var giphy = ("<div class='row'><div id='button-view' class='col-11'></div></div><div class='row'><div id='gif-view' class='col-8 img-fluid'></div><div class='col-4'><form id='animal-form'><label for='animal-input'><strong>Add an animal, Yo!</strong></label><br><input style='width:350px;' type='text' id='animal-input'><br><input style='margin-top: 10px;' id='add-animal' type='submit' value='Submit' class='btn btn-info'><br><input style='margin-top: 10px;' id='load-more' type='submit' value='Load More' class='btn btn-info'></form></div></div><p class='totop'><a href='#top'>Back to top</a></p>")
    $("#test-container").append(giphy);
  });

  // Begin HMTL for Giphy

  $(document).on("click", "#btnGiphy", function () {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Giphy
    var giphy = ("<div class='row'><div class='container-fluid user-control col-6'>" +
      "<div style='margin-left:50px;font-size:30px;'  class='form-group'><h1 class='display-4 title-display' for='search'>Gif Search Term</h1><input type='text' class='col-12 form-control' id='search-term-input'></div>" +
      "<button style='margin-left:50px'  type='submit' class='btn search-btn col-3' id='create-search-btn'>Search</button>" +
      "\xa0\xa0\xa0\xa0\xa0\xa0<button class='btn remove-gif-button container btn-container col-3' id='clear-gif'>Clear gifs</button>\xa0\xa0\xa0\xa0\xa0\xa0<button class='btn clear-all-btn container btn-container col-4' id='clear-all'>Clear Everything</button>" +
      "<br><br><div class='row'><div class='container' id='gif-div'></div></div></div><div style='margin-top:75px' class='col-6'><div class='btn-holder'></div></div>" +
      "<a href='#top'><img src='assets/image/top.png' alt='up2top'  style='margin-left:70px;margin-bottom:10px;width:55px;height:55px;border:0;'</a></div>")


    $("#appContainer").append(giphy);
    renderGiphy();
  })

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
          attachListeners()


        }



      });
      // When clicked, the individual gif will animate




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

});