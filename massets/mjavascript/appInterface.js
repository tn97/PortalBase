// *TEMPORARY*
// IDs are subject to change
$(document).ready(function() {
// Begin jQuery Calc HTML
$(document).on("click", "#btnCalc", function() {

  // Clear container
  $("#appContainer").empty();

  // importing HTML for Calculator
  var calculator = ("<div class='container calcApp'><div class='row'><!-- Calculator Panel --><div class='col-lg-4'><div class='card'><h3 class='card-header'>Calculator</h3><div class='card-body'><button id='button-1' class='btn btn-primary number' value='1'><h1>1</h1></button>   <a> </a><button id='button-2' class='btn btn-primary number' value='2'><h1>2</h1></button><a> </a><button id='button-3' class='btn btn-primary number' value='3'><h1>3</h1></button><a> </a><button id='button-plus' class='btn btn-danger operator' value='plus'><h1>+</h1></button><br><br><button id='button-4' class='btn btn-primary number' value='4'><h1>4</h1></button><a> </a><button id='button-5' class='btn btn-primary number' value='5'><h1>5</h1></button><a> </a><button id='button-6' class='btn btn-primary number' value='6'><h1>6</h1></button><a> </a><button id='button-minus' class='btn btn-danger operator' value='minus'><h1>&minus;</h1></button><br><br><button id='button-7' class='btn btn-primary number' value='7'><h1>7</h1></button><a> </a><button id='button-8' class='btn btn-primary number' value='8'><h1>8</h1></button><a> </a><button id='button-9' class='btn btn-primary number' value='9'><h1>9</h1></button><a> </a><button id='button-multiply' class='btn btn-danger operator' value='times'><h1>&times;</h1></button><br><br><button id='button-0' class='btn btn-primary number' value='0'><h1>0</h1></button><a> </a><button id='button-.' class='btn btn-primary number' value='.'><h1>.</h1></button><a> </a><button id='button-divide' class='btn btn-danger operator' value='divide'><h1>&divide;</h1></button><a> </a><button id='button-power' class='btn btn-danger operator' value='power'><h1>^</h1></button><br><br><button id='button-clear' class='btn btn-dark clear' value='clear'><h1>clear</h1></button><a> </a><button id='button-equal' class='btn btn-success equal' value='equals'><h1>=</h1></button></div></div></div><div class='col-lg-6'><div class='card'><h3 class='card-header'>Result</h3><div class='card-body'><h1 id='first-number'></h1><h1 id='operator'></h1><h1 id='second-number'></h1><hr><h1 id='result'></h1></div></div></div></div></div>")
  

  $("#appContainer").append(calculator); 
  renderCalculator();
})


// End jQuery Calc HTML
// Being jQuery Calc Script

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