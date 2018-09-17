// assuming that the container for the html associating with the imported applications will be called id='app-container'
// for unknown ID's, will put 'UNKNOWN' as a comment, ctrl+f to find and input

// Begin jQuery Calc HTML
$("#btnCalc").on("click", function () {

  // Clear container
  $("#CONTAINERGOESHERE").empty();

  // importing HTML for Calculator
  var calculator = ("<div class='row'><div class='col-lg-4'><div class='card'><h3 class='card-header'>Calculator</h3><div class='card-body'><button id='button-1' class='btn btn-primary number' value='1'><h1>1</h1></button><button id='button-2' class='btn btn-primary number' value='2'><h1>2</h1></button><button id='button-3' class='btn btn-primary number' value='3'><h1>3</h1></button><button id='button-plus' class='btn btn-danger operator' value='plus'><h1>+</h1></button><br><br><button id='button-4' class='btn btn-primary number' value='4'><h1>4</h1></button><button id='button-5' class='btn btn-primary number' value='5'><h1>5</h1></button><button id='button-6' class='btn btn-primary number' value='6'><h1>6</h1></button><button id='button-minus' class='btn btn-danger operator' value='minus'><h1>&minus;</h1></button><br><br><button id='button-7' class='btn btn-primary number' value='7'><h1>7</h1></button><button id='button-8' class='btn btn-primary number' value='8'><h1>8</h1></button><button id='button-9' class='btn btn-primary number' value='9'><h1>9</h1></button><button id='button-multiply' class='btn btn-danger operator' value='times'><h1>&times;</h1></button><br><br><button id='button-0' class='btn btn-primary number' value='0'><h1>0</h1></button><button id='button-divide' class='btn btn-danger operator' value='divide'><h1>&divide;</h1></button><button id='button-power' class='btn btn-danger operator' value='power'><h1>^</h1></button><button id='button-equal' class='btn btn-success equal' xvalue='equals'><h1>=</h1></button><br><br><button id='button-clear' class='btn btn-dark clear' value='clear'><h1>clear</h1></button></div></div></div><div class='col-lg-6'><div class='card'><h3 class='card-header'>Result</h3><div class='card-body'><h1 id='first-number'></h1><h1 id='operator'></h1><h1 id='second-number'></h1><hr><h1 id='result'></h1></div></div></div></div>")

  $("#test-container").append(calculator);
})
// End jQuery Calc HTML

// Begin NYTimes HTML
$("#btnNYT").on("click", function () {

  // Clear container
  $("#CONTAINERGOESHERE").empty();

  var newYorkTimes = ("<div class='container'><div class='jumbotron' style='background-color: #20315A ; color: white;'><h1 class='text-center'><strong><i class='fa fa-newspaper-o'></i> New York Times Search</strong></h1></div><div class='row'><div class='col-sm-12'><br><div class='card'><div class='card-header'><strong><i class='fa fa-list-alt'></i> Search Parameters</strong></div><div class='card-body'><form role='form'><div class='form-group'><label for='search'>Search Term:</label><input type='text' class='form-control' id='search-term'></div><div class='form-group'><label for='pwd'>Number of Records to Retrieve:</label><select id='article-count' class='custom-select' aria-labelledby='dropdownMenuButton'><option selected value='1'>1</option><option value='5' selected>5</option><option value='10'>10</option></select></div><div class='form-group'><label for='start-year'>Start Year (Optional):</label><input type='text' class='form-control' id='start-year'></div><div class='form-group'><label for='end-year'>End Year (Optional):</label><input type='text' class='form-control' id='end-year'></div><button type='submit' class='btn btn-default' id='run-search'><i class='fa fa-search'></i> Search</button><button class='btn btn-default' id='clear-all'><i class='fa fa-trash'></i> Clear Results</button></form></div></div></div></div><div class='row'><div class='col-sm-12'><br><div class='card'><div class='card-header'><strong><i class='fa fa-table'></i> Top Articles</strong></div><div class='card-body' id='article-section'></div></div></div></div><div class='row'><div class='col-sm-12'><hr><h5 class='text-center'><small>Made with lots and lots of<i class='fa fa-heart'></i></small></h5></div></div></div>")

$("#test-container").append(newYorkTimes)
})
//  End NYTimes HTML

// appfile1.js
// appfile2.js
// appfile3.js
// appfile4.js
// callfile.js
// 
// appfile1234 $(app-container).empty()
// 
// $(#buttonID).on('click', runFunctionFromAppFile()
// can call functions from js filed called before itself.
// i.e. callfile is listed last above because it'll then be able to access the functions of those about it.