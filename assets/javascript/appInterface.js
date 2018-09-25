// *TEMPORARY*
// IDs are subject to change
$(document).ready(function () {
  // Begin homepage HTML

  // Begin jQuery Calc HTML
  $(document).on("click", "#btnHome", function () {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Calculator
    var home = (" <div id='lineDrawing'> <svg viewBox='-50 -100 700 300'><g id='g' fill='none' fill-rule='evenodd' stroke='black' stroke-width='1' class='lines'><path d='M156,41.3c0.5,0.5,0.8,0.9,0.8,1.4c0,1.4-1,2.1-3,2.1 c-0.5,0-1.3-0.1-2.3-0.3s-1.7-0.3-2.2-0.3c-2.9,0-5.9,2.9-8.8,8.6c-13.7,26.2-22.9,56.7-27.7,91.6c1-2.8,2-5.1,3.2-6.8c1-1.5,2.1-3,3.1-4.5c0.8-1.3,1.7-2,2.7-2c1.1,0,1.7,0.8,1.7,2.3c0,0.9-0.3,1.8-0.8,2.9c-4.2,9.4-7.1,18.7-8.7,28c-0.6,3.6-1.9,5.4-4.1,5.4c-2.3,0-5.5-1.8-9.8-5.4c-2.7-2.3-4.1-3.8-4.1-4.6c0-0.3,0.1-0.9,0.4-1.8c0.3-0.9,0.6-1.9,0.7-2.8c1.9-14.2,5.7-32.3,11.6-54.2c-14.1,26.1-27.3,46.2-39.6,60.3c-3.8,4.3-7.7,6.5-11.9,6.5s-7.7-2-10.6-5.9c-6.7-5.4-10.7-8.9-12-10.6    c-2.5-3.4-3.7-8.5-3.7-15.2c0-1.5,0-3.1,0.1-4.9c0.5-9.7,3.3-22.5,8.3-38.4c4.9-15.7,10.6-29.9,17-42.8c-17.9,6-30.6,11.6-38,16.9c-3.5,2.6-5.2,5.2-5.2,7.9c0-0.1,0.9,3.4,2.7,10.5c0.1,0.3,0.1,0.7,0.1,1c0,1.2-0.6,1.8-1.7,1.8c-1.9,0-3.5-1.2-4.9-3.5C3.7,74.9,1,68.2,1,64.2c0-5.4,3.7-9.3,11.1-11.6c12.6-3.4,28.5-8.1,47.7-14.1c3.1-4.9,5.9-7.4,8.5-7.4c2.8,0,6.9,2.6,12.2,7.8c0.8,0.7,1.2,1.4,1.2,2c0,1.4-3,2.7-9.1,4c-7.8,13-14.6,29.6-20.4,49.9c-5.1,17.8-7.8,32.3-8.3,43.5c-0.2,5.8,1,10.4,3.5,13.8c2.3,3.1,5.1,4.7,8.6,4.7c3.4,0,6.3-1.5,8.9-4.6c11.5-13.6,22.5-29.6,33.1-48c7.4-12.8,16.8-31,28.2-54.5c2.7-5.4,5.6-10.5,8.7-15.2c1.4-2.1,3.1-3.1,5.1-3.1C143.1,31.4,148.5,34.7,156,41.3L156,41.3z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M191.7,38.4c1.8,1,2.7,2.1,2.7,3.3c0,0.9-0.6,1.3-1.8,1.3c-0.3,0-0.7,0-1.3-0.1c-0.5-0.1-0.9-0.2-1.2-0.2c-2.5,0-5.4,2.7-8.9,8.2c-3.1,4.8-7.4,15.4-12.9,31.6c-0.5,1.4-0.7,2.3-0.6,2.6c0.2,0.5,1,0.7,2.5,0.8c3.8,0.3,8.9,0.2,15.4-0.4c2.2-0.2,3.3,0.8,3.3,2.9c0,1.4-0.8,2.3-2.5,2.7c-1.4,0.2-8.5,0.8-21.5,1.8c-7.8,23-12.5,42.5-14.2,58.4c-0.1,0.9-0.1,1.6-0.1,2.3c0,2.2,0.6,3.3,1.7,3.3c1.7,0,7-4.3,15.8-12.9c1-1,2-1.6,3-1.6c0.8,0,1.4,0.4,1.6,1.1c0.2,0.8-0.1,1.7-0.9,2.8c-5.2,7-10.4,13-15.4,17.9c-2.1,2-3.9,3-5.3,3s-3.6-1.1-6.6-3.4c-3.7-1-5.5-2.9-5.5-5.9c0-0.5,0.1-1,0.2-1.6c2.4-16.9,7.1-37.7,14.1-62.4c-3.4-0.5-6.5-0.9-9.3-1.4c-1.2-0.2-1.8-1-1.8-2.4c0-1.5,0.6-2.4,1.9-2.8c1.3-0.3,3.7-1,7.2-2.2c2.1-0.7,4.2-1.7,6.2-2.9c6.9-21.7,12.4-35.7,16.3-42.2c2.3-3.7,4.7-5.5,7.3-5.5C183.4,34.5,187,35.8,191.7,38.4L191.7,38.4z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M224.4,54c1,0.8,1.6,1.7,1.6,2.7c0,1.9-2.8,4.8-8.4,8.8c-3.7,2.6-7.3,3.5-10.7,2.8c-1.9-0.4-3.6-1.1-5.1-2.2c-0.5-0.4-0.8-0.8-1.1-1.2c-0.2-0.5-0.2-0.8-0.1-1.1c0.2-0.3,0.6-0.3,1.2-0.2c6-5.2,9.9-9,11.8-11.3c1.5-1.7,2.6-2.6,3.2-2.6C218,49.7,220.5,51.1,224.4,54L224.4,54z M210.7,97c-1.6,8.8-5.6,23.6-12.1,44.1c1.9-1.7,4.5-4.8,7.8-9.3c0.5-0.6,0.9-0.9,1.4-0.9c1,0,1.2,0.9,0.4,2.8c-0.3,0.7-3,5.2-8.2,13.5c-3.9,6.3-6.7,11.9-8.5,16.7c-0.6,1.5-1.7,2.3-3.2,2.3c-1.6,0-3.7-0.8-6.3-2.3c-1.7-0.9-2.5-1.6-2.5-2.1c0-0.4,0.4-1.2,1.1-2.6c3.5-6.2,7.4-16.6,11.7-31.3c4.1-14.2,6.4-24.7,6.9-31.5c0.2-2.9-0.1-4.4-0.9-4.4c-0.6,0-1.6,0.7-3.1,2.2l-6,5.7c-2.1,2-3.2,2.1-3.2,0.3c0-0.5,0.3-1.2,0.9-2c3-4.3,6.3-8.4,9.7-12.3c1-1.1,2-1.7,3-1.7s2.6,0.7,4.6,2.2c3,0.8,4.6,1.3,5,1.5c1.5,0.9,2.2,2.6,2.2,5.1C211.1,94.2,211,95.5,210.7,97L210.7,97z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M298.6,11.3c0.8,0.7,1.3,1.3,1.3,2.1c0,1.2-0.7,1.9-2.2,1.9c-0.6,0-1.3-0.2-2-0.6c-3-1.5-5.2-2.3-6.7-2.3c-4.1,0-8.5,4-13.4,12c-17.6,29-30.2,66.5-37.6,112.5c-0.2,1.2-0.5,2.9-1,5c1.5-1.6,3.7-4.1,6.6-7.7c1.7-2,2.9-3,3.7-3c1.7,0,1.8,1,0.4,3c-6.2,9-10.3,18.4-12.3,28.2c-0.7,2.4-1.6,3.6-2.7,3.6c-0.5,-1.2-0.3-2-0.9c-3.3-2.2-5.2-3.5-5.6-3.9c-1.3-1.3-1.9-3-1.9-5.1c0-1,0.2-2.3,0.5-3.8c7.5-41.7,17.2-77.3,29-106.6c8.9-22.1,16.9-36.5,24-43c1.9-1.8,3.9-2.7,5.8-2.7c1.7,0.1,4,1.2,6.8,3.3C292.2,6,295.4,8.6,298.6,11.3L298.6,11.3z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M380.4,43.8c-2.5,9-6,16.8-10.3,23.4c-1.9,2.9-3.8,4.4-5.5,4.4    s-4.6-1.4-8.8-4.2c-1.3-0.9-1.9-1.7-1.9-2.7c0-1.4,1.1-2.4,3.4-2.9c1.7-0.5,3.6-3.5,5.7-8.9c2-5.2,3-9.2,3-12.2c0-3.1-1.2-4.6-3.6-4.6c-0.8,0-1.9,0.1-3.2,0.4c-2.5,0.4-8,2.1-16.3,5.2c-1,0.3-1.8,0.5-2.6,0.5c-1.9,0-2.9-0.7-2.9-2c0-1.2,1-2.4,3-3.3c7.3-3.7,14.4-6.7,21.5-9.2c2.3-0.9,3.9-1.3,4.9-1.3c1.5,0,3.4,2.1,5.8,6.3c3.6,1.1,5.9,1.9,6.7,2.5c1.4,0.9,2.1,2.2,2.1,3.9C381.2,40.3,380.9,41.9,380.4,43.8L380.4,43.8z M351.3,134.1c0,11.9-6,21.4-17.9,28.6c-3.4,5.4-7.9,8.1-13.3,8.1c-9.7-0.1-20.4-4.5-32.3-13.1c-10.2-7.3-17.2-14.4-21.1-21.2c-3.7-6.4-5.5-10.4-5.5-12c0-2,1.5-4.3,4.4-6.9c2.7-2.4,4.9-3.6,6.4-3.6s2.2,1,2.2,2.9c0,0.9-0.2,1.9-0.5,3.1c3.4,9.4,10.7,18.2,21.8,26.3c11.1,8.1,21.1,12.2,30.1,12.1c8-0.1,12-5.6,12-16.5c0-6-4.7-18.1-14-36.1c-9.3-18.1-13.9-31-13.9-38.8c0-5.1,1.4-9.7,4.3-13.7c2.4-3.3,6.6-7.3,12.6-11.9c1.1-0.9,2.2-1.3,3.3-1.3c1.7,0,2.6,0.8,2.6,2.3c0,1-0.6,2.1-1.7,3.2c-5,4.8-7.5,10.6-7.5,17.5c0,7.7,4.7,20.3,14,37.9S351.3,129.7,351.3,134.1L351.3,134.1z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M441.7,92.6c-8.6,16.2-15.1,35.2-19.3,57c1.8-3.2,4-7.3,6.6-12.3c0.3-0.9,0.8-1.4,1.6-1.4c1,0,1.5,0.6,1.5,1.9c0,0.4-0.1,0.8-0.3,1.3c-4.1,9.6-6.9,16.9-8.2,22.1c-0.8,3.3-1.8,4.9-3.1,4.9     s-3.8-1.3-7.6-3.8c-2-1.4-2.7-4-2-7.7c2.7-14.3,6-26.7,9.8-37.2c-12.5,20.6-23,35.7-31.5,45.5c-1.9,2.2-3.9,3.2-6.1,3.2c-1.8,0-4-0.8-6.4-2.3c-4.5-0.8-6.7-3.1-6.7-7.1c0-0.7,0.1-1.5,0.2-2.4c1.6-18.7,5-34.3,10.1-46.7c-1.1,1-2.8,2.6-5,4.6c-0.8,0.7-1.5,0.9-1.9,0.6c-0.5-0.4-0.4-1.1,0.3-2.3c3.5-5.2,5.6-8.6,6.2-10.2c2-5.1,4.1-9.1,6.3-11.9c1.2-1.4,2.4-2.2,3.7-2.2c1.7,0,4.3,1,7.7,3.1c0.9,0.6,1.4,1.2,1.4,1.8c0,0-0.7,1.1-2.1,3.2c-3.2,5-6.7,13.8-10.3,26.3c-4,13.6-6,24.7-6,33.3c0,2.8,0.6,4.2,1.7,4.2c1,0,2.7-1.2,5.1-3.6c5-5.4,12.2-15.5,21.7-30.5c8.4-13.2,13.4-21.8,15.2-25.7c2.9-6.7,5.3-10.6,7.1-11.8c1.2-0.8,2.2-1.2,3.1-1.2s2.7,0.7,5.2,2.1c2.6,1.4,3.9,2.4,3.9,3c0,0.2-0.2,0.5-0.7,0.8C442.2,91.8,441.9,92.2,441.7,92.6L441.7,92.6z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M487.5,54c1,0.8,1.6,1.7,1.6,2.7c0,1.9-2.8,4.8-8.4,8.8c-3.7,2.6-7.3,3.5-10.7,2.8c-1.9-0.4-3.6-1.1-5.1-2.2c-0.5-0.4-0.8-0.8-1.1-1.2c-0.2-0.5-0.2-0.8-0.1-1.1c0.2-0.3,0.6-0.3,1.2-0.2c6-5.2,9.9-9,11.8-11.3c1.5-1.7,2.6-2.6,3.2-2.6C481.1,49.7,483.6,51.1,487.5,54L487.5,54z M473.8,97c-1.6,8.8-5.6,23.6-12.1,44.1c1.9-1.7,4.5-4.8,7.8-9.3c0.5-0.6,0.9-0.9,1.4-0.9c1,0,1.2,0.9,0.4,2.8c-0.3,0.7-3,5.2-8.2,13.5c-3.9,6.3-6.7,11.9-8.5,16.7c-0.6,1.5-1.7,2.3-3.2,2.3s-3.7-0.8-6.3-2.3c-1.7-0.9-2.5-1.6-2.5-2.1c0-0.4,0.4-1.2,1.1-2.6c3.5-6.2,7.4-16.6,11.7-31.3c4.1-14.2,6.4-24.7,6.9-31.5c0.2-2.9-0.1-4.4-0.9-4.4c-0.6,0-1.6,0.7-3.1,2.2l-6,5.7c-2.1,2-3.2,2.1-3.2,0.3c0-0.5,0.3-1.2,0.9-2c3-4.3,6.3-8.4,9.7-12.3c1-1.1,2-1.7,3-1.7s2.6,0.7,4.6,2.2c3,0.8,4.6,1.3,5,1.5c1.5,0.9,2.2,2.6,2.2,5.1        C474.2,94.2,474.1,95.5,473.8,97L473.8,97z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M539.1,38.4c1.8,1,2.7,2.1,2.7,3.3c0,0.9-0.6,1.3-1.8,1.3c-0.3,0-0.7,0-1.3-0.1c-0.5-0.1-0.9-0.2-1.2-0.2c-2.5,0-5.4,2.7-8.9,8.2c-3.1,4.8-7.4,15.4-12.9,31.6c-0.5,1.4-0.7,2.3-0.6,2.6c0.2,0.5,1,0.7,2.5,0.8c3.8,0.3,8.9,0.2,15.4-0.4c2.2-0.2,3.3,0.8,3.3,2.9c0,1.4-0.8,2.3-2.5,2.7c-1.4,0.2-8.5,0.8-21.5,1.8        c-7.8,23-12.5,42.5-14.2,58.4c-0.1,0.9-0.1,1.6-0.1,2.3c0,2.2,0.6,3.3,1.7,3.3c1.7,0,7-4.3,15.8-12.9c1-1,2-1.6,3-1.6c0.8,0,1.4,0.4,1.6,1.1c0.2,0.8-0.1,1.7-0.9,2.8c-5.2,7-10.4,13-15.4,17.9c-2.1,2-3.9,3-5.3,3s-3.6-1.1-6.6-3.4c-3.7-1-5.5-2.9-5.5-5.9c0-0.5,0.1-1,0.2-1.6c2.4-16.9,7.1-37.7,14.1-62.4c-3.4-0.5-6.5-0.9-9.3-1.4c-1.2-0.2-1.8-1-1.8-2.4c0-1.5,0.6-2.4,1.9-2.8c1.3-0.3,3.7-1,7.2-2.2c2.1-0.7,4.2-1.7,6.2-2.9c6.9-21.7,12.4-35.7,16.3-42.2c2.3-3.7,4.7-5.5,7.3-5.5C530.8,34.5,534.4,35.8,539.1,38.4L539.1,38.4z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/><path d='M581.4,135.8c-15.7,20.4-26.8,30.6-33.2,30.6c-3,0-6.9-2.1-11.6-6.4c-4.9-2.3-7.3-5.4-7.3-9.2c0-0.7,0.1-1.5,0.2-2.3c1.2-9,3.5-18.9,7.1-29.8c-2.4-1.2-3.6-2.4-3.6-3.5c0-0.9,0.7-1.4,2-1.4c1,0,2.1,0.3,3.2,0.9c5.8-13.1,10.9-22.4,15.5-27.9c3-3.7,5.7-5.5,8.1-5.5c1.1,0,3.8,0.9,8.2,2.9c-0.3-2,0.2-3.1,1.7-3.4c0.1,0,1.6,0,4.6,0c2.8,0,4.2,0.5,4.2,1.5c0,0.2-0.1,0.8-0.3,1.7c-0.2,0.9-0.3,1.8-0.3,2.6c0,2.4,0,5.3,0.1,8.7c0.1,3.5,0.1,5.8,0.1,7c0,8.1-2.2,13.8-6.6,17c-4,2.9-8.5,4.4-13.6,4.4c-2.7,0-7.1-0.7-13.2-2.2c-1.1,2-2.3,6-3.7,11.9c-1.8,7.5-2.7,14.1-2.5,19.9c0.1,3.4,1.1,5.1,3.2,5.1c0.8,0,1.8-0.2,3-0.6c7.5-2.7,18-10.9,31.4-24.6c0.8-0.9,1.7-1.3,2.5-1.3c1.2,0,1.8,0.6,1.8,1.8C582.4,134.3,582,135,581.4,135.8L581.4,135.8z M570,92.4c0-2.6-0.6-3.8-1.7-3.8c-0.7,0-1.7,0.5-3.1,1.6c-6.3,5.2-11.9,14.3-16.7,27.2c1.3,0.2,3.6,0.4,6.8,0.6c5.2,0.2,9.2-1,11.8-3.6c1.9-2,3-5.2,3.2-9.7C570.1,107.9,570,103.8,570,92.4L570,92.4z' stroke-dasharray='30' style='stroke-dashoffset: 30px'/></g></svg> </div>")

    $("#appContainer").append(home);
    UtilSuite ();
  })

  // End homepage HTML

  // Begin Checklist HTML

  $(document).on("click", "#btnChecklist", function () {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Calculator
    var checklist = ("<div class='row'>" +
      "<div class='container'><h1 class='display-4 title-display'> Checklist </h1>" +
      "<p class='lead lead-text'>This is a simple checklist that you'll be able to use on the go. Unfortunately, it  doesn't have cloud storage as of yet, but it does have local!</p>" +
      "<form><span id='todo-items'>To Do Items: <input class='form-control col-12' id='to-do' type='text'><input style='margin-top:10px;' class='btn btn-light' id='add-to-do' value='Add Item' type='submit'></span></form><br>" +
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
    $("#appContainer").empty();

    var newYorkTimes = ("<div class='nytFont'><div class='container'><div class='jumbotron' style='background-color: #20315A ; color: white;'><h1 class='text-center'><strong><i class='fa fa-newspaper-o'></i> New York Times Search</strong></h1></div><div class='row'><div class='col-sm-12'><div class='card'><div class='card-header'><strong><i class='fa fa-list-alt'></i> Search Parameters</strong></div><div class='card-body'><form role='form'><div class='form-group'><label for='search'>Search Term:</label><input type='text' class='form-control' id='search-term'></div><div class='form-group'><label for='pwd'>Number of Records to Retrieve:</label><select id='article-count' class='custom-select' aria-labelledby='dropdownMenuButton'><option selected value='1'>1</option><option value='5' selected>5</option><option value='10'>10</option></select></div><div class='form-group'><label for='start-year'>Start Year (Optional):</label><input type='text' class='form-control' id='start-year'></div><div class='form-group'><label for='end-year'>End Year (Optional):</label><input type='text' class='form-control' id='end-year'></div><button type='submit' class='btn btn-default' id='run-search'><i class='fa fa-search'></i> Search</button><button class='btn btn-default' id='clear-all'><i class='fa fa-trash'></i> Clear Results</button></form></div></div></div></div><div class='row'><div class='col-sm-12'><br><div class='card'><div class='card-header'><strong><i class='fa fa-table'></i> Top Articles</strong></div><div class='card-body' id='article-section'></div></div></div></div><div class='row'><div class='col-sm-12'><hr><h5 class='text-center'><small>Made with lots and lots of<i class='fa fa-heart'></i></small></h5></div></div></div></div>")

    $("#appContainer").append(newYorkTimes)
    renderNYTimes();
  })
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

  $(document).on("click", "#btnGiphy", function () {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for Giphy
    var giphy = ("<div class='row'><div class='container-fluid user-control col-6'>" +
      "<div style='margin-left:50px;font-size:30px;'  class='form-group'><h1 class='display-4 title-display' for='search'>Gif Search Term</h1><input type='text' class='col-12 form-control' id='search-term-input'></div>" +
      "<button style='margin-left:50px'  type='submit' class='btn search-btn col-3' id='create-search-btn'>Search</button>\xa0\xa0\xa0" +
      "<button class='btn remove-gif-button container btn-container col-3' id='clear-gif'>Clear gifs</button>\xa0\xa0\xa0<button class='btn clear-all-btn container btn-container col-4' id='clear-all'>Clear Everything</button>" +
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
  
  $(document).on("click", "#btnWiki", function () {

    // Clear container
    $("#appContainer").empty();

    // importing HTML for wikipedia
    var wiki = ("<main><header class='searchForm-container'><form class='searchForm'><input type='search' class='wikipediaQuery'><button type='submit'> Search </button><a href='https://en.wikipedia.org/wiki/Special:Random' target='_blank' rel='noreferrer' class='icon randomIcon'><img src='https://image.ibb.co/fR5OX5/random.png' alt='Shuffle Icon'></a></form></header>   <section class='searchResults'></section> </main>")


    $("#appContainer").append(wiki);
    renderWiki();
  })
  
  
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

});