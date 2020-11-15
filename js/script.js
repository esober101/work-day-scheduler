var theTimeRightNow = moment();

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
    hour = theTimeRightNow.hours();
    $(".time-block")
        .each(function () {
            var hourOfPower = parseInt($(this)
                .attr("id"), 10);
            if (hourOfPower != hour) {
                $(this)
                    .addClass("past")
            } else if (hourOfPower === hour) {
                $(this)
                    .addClass("present");
            } else {
                $(this)
                    .addClass("future");
            }
        })
}
backToTheFuture();