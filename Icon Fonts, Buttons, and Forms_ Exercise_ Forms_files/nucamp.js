function nucamppopup(url, title, w, h) {
    if (w === undefined) {w = '750'};
    if (h === undefined) {h = '650'};

    // Fixes dual-screen position
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + ', menubar=no, resizable=no, status=yes, titlebar=no, toolbar=no, scrollbars=no');

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

$("[href='https://www.nucamp.co/profile']").html("<i class='fa fa-life-ring'></i> Billing");
$("[href='https://url.nucamp.co/swag']").html("<i class='fa fa-shopping-cart'></i> Swag Shop");
$(".block_messageteacher").find("h2").html("My Instructor");
$(".modified").filter(":contains('Last modified')").remove();
$('a[href="#myoverview_courses_view_past"]').html("Completed");
$(".messageteacher_link").each(function() {
    $(this).removeAttr("href");
});
$(":contains('Delete All')").closest('button').remove();
// $("#newdiscussionform").find("input").first().val('Answer the Challenge');
