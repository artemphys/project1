
$(document).ready(function() {
    $('.container').click(function () {
        $(".container:not(this)").css({"display": "none"});
        $(this).css({"display": "block"});
        var url = $(this).children('a').attr('href');
        $.ajax({
            url: url,
            success: function (data) {
                $('#content').html(data);
                $('#content').css({"display": "block"});
            }
        });
        // меняется ссылка
        if (url != $(window.location).attr('href')) {
            window.history.pushState(null, null, url);
        }
        return false;
    });
// чтобы работали стрелочки
    $(window).bind('popstate', function () {
        $.ajax({
            url: location.pathname,
            success: function () {
                $('#content').css({"display": "none"});
                $(".container:not(this)").css({"display": "block"});
            }
        });
    });
    //смена цвета
    $('#logo').mouseenter(function(){
        var arr = ["#1a48a6", "#a71b3b", "#a6781a", "#1ba768"];
        var rand = Math.floor( Math.random() * arr.length );
        color=arr[rand];
        console.log(color);
        $('#footer').css({"background-color":color});
        $('.head').css({"background-color":color});
        $('#logo').mouseout(function(){
            $('#footer').css({"background-color":this.color});
            $('.head').css({"background-color":this.color});
        });
    });
});
