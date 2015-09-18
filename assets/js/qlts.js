$('#btn-menu-hamburger').click(function () {
    $('#page-content').toggleClass('slide-page-content');
    $('#nav-menu').toggleClass('slide-nav-menu');
});

$('#btn-chat').click(function () {
    $('#mid-content').toggleClass('mid-content-100');
    $('#chat-bar').toggleClass('chat-bar-200');
    $(this).toggleClass('btn-chat-slide');
});
function addNewContent() {
    $('.btn-chat-slide').text('Đóng trò chuyện');
}
;
(function ($) {
    $(document).ready(function () {

        $('#cssmenu li.active').addClass('open').children('ul').show();
        $('#cssmenu li.has-sub>a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });

    });
})(jQuery);



$(function () {
    setTimeout(function () {
        $('.module').addClass("module-slide");
        $('.module2').addClass("module-slide-2");
    }, 500);
});

function addNewChatBox() {
    $('.friends').click(function () {
        var str = $(this).text();
        var NewContent = '<div class="chat-box" id="friend-name"><div class="chat-header"><span class="img-circle"></span><a href="#">' + str + '</a><button class="pull-right btn-no-css" id="btn-close-friend-name"><span class="glyphicon glyphicon-remove"></span></button></div><div class="chat-container"><ul class="chat-container-content"></ul></div><div class="chat-input-content"><div class="input-group"><textarea rows="1" class="btn-no-css" id="message-content"></textarea><div class="input-group-btn dropup"><button type="button" class="btn btn-default dropdown-toggle btn-no-css" id="send" onclick="sendNewMes()">Send</button><button type="button" class="btn btn-default dropdown-toggle btn-no-css" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-paperclip"></span></button><ul class="dropdown-menu" style="left: -150px;"><li><a href="#">Tắt trò chuyện</a></li></ul></div></div></div></div>';
        var $this = $(this), $reply = $this.next('.chat-box');
        if ($reply.length) {
            $reply.toggle();
        } else {
            $(NewContent).insertAfter($this);
        }
    });
}
;
addNewChatBox();

function sendNewMes() {
    var content = $('#message-content').val();
    $('#message-content').val('');
    $(".chat-container-content").append('<li><div class="col-xs-2"><img src="assets/images/users/user-2-1.jpg" alt=""/></div><div class="col-xs-10">' + content + '</div><div class="clearfix"></div></li>');
}
;

function PrintPreview() {
    window.print();
}
