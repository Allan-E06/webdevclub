function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function openSchedule(ScheduleName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(ScheduleName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
  }
  
  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();

  document.addEventListener("DOMContentLoaded", function() {
    // Select the pop-up and close button elements
    var popup = document.getElementById("popup");
    var closeBtn = document.getElementById("closeBtn");

    // Function to show the pop-up
    function showPopup() {
        popup.style.display = "block";
    }

    // Function to hide the pop-up
    function hidePopup() {
        popup.style.display = "none";
    }

    // Show the pop-up after 5 seconds (adjust the timeout value as needed)
    setTimeout(showPopup, 1000);
  

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener("click", hidePopup);
});
