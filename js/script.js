function runScheduler() {
    $("#currentDay")
        .text(moment()
            .format("dddd, MMMM Do YYYY"));
    $(".time-block")
        .each(function () {
            var id = $(this)
                .attr("id");
            var agenda = localStorage.getItem(id);
            if (agenda !== null) {
                $(this)
                    .children(".schedule")
                    .val(agenda);
            }
        });
}
runScheduler();

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this)
        .parent()
        .attr("id");
    var agenda = $(this)
        .siblings(".schedule")
        .val();
    localStorage.setItem(time, agenda);
});

function backToTheFuture() {
    hour = moment().hours();
    $(".time-block")
        .each(function () {
            var hourOfPower = parseInt($(this)
                .attr("id"));
            if (hour > hourOfPower) {
                $(this)
                    .addClass("past");
            } else if (hour === hourOfPower) {
                $(this)
                    .removeClass("past");
                $(this)
                    .addClass("present");
            } else {
                $(this)
                    .removeClass("past");
                $(this)
                    .removeClass("present");    
                $(this)
                    .addClass("future");
            }
        });
}
backToTheFuture();
