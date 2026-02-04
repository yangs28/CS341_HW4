    $(document).ready(function(){
      //When a month is selected from the drop-down, change the month accordingly 
    $(".dropdown-content a").click(function(){
        var selectedMonth = $(this).text();
        $("#dropbtn").text(selectedMonth);
    });
    });