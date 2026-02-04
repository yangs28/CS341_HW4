$(document).ready(function () {
//Catches any orders
$("#orderButton").click(function () {
    //Helper variables that store values of data collected from the site
    var orderNotes = $("#orderNotes").val();
    var toppingOption = $("input[name='toppingOption']:checked").val();
    var toppingSelected = $("input[name='toppingOption']:checked");

    //Requires a topping selection for all orders before it can be registered. Prevents errors where the topping order is undefined
    if (!toppingSelected.length) {
    alert("You have not selected a topping option!");
    return;
    }

    //If order contains any form of the word vegan, warn the user that the order contains dairy (I'm not sure what they were expecting as they are ordering cheesecake)
    if (orderNotes.includes("vegan") || orderNotes.includes("Vegan")) {
    alert("The order you submitted contains dairy!");
    } else {
      //Otherwise, hides everything and changes the text thanking the customer for their order
    $("#orderNotes").hide();
    $("#orderTable").hide();
    $("#orderButton").hide();
    var toppingOption = $("input[name='toppingOption']:checked").val();
      //Prints a message informing the user of their order information
    $("#notesTitle").html(
        "Thank you! Your order has been placed! Your cheesecake has " +
        toppingOption +
        " topping. You have ordered " +
        $("#quantity").val() +
        " cheesecake(s). You have the following notes: " +
        orderNotes,
    );
    alert("Order submitted successfully!");
    }
});
});
