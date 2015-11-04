$(document).ready(function(){
    var activeTabIndex = -1;
    //var tabNames = new Array( $('li').size()-1 );
    //var tabHTML = new Array( $('li').size()-1 );
    var tabNames = [];
    var tabHTML = [];
    //var tabNames = ["JSDOM","OOP","JQ_1","JQ_2"];
    $('.tab-menu li').each(function(index){
        if ($(this)[0].id != "Plus") {
            //tabNames[index] = $(this)[0].id;
            //tabHTML[index] = $(this)[0].outerHTML;
            tabNames.push($(this)[0].id);
            tabHTML.push($(this)[0].outerHTML);
        }
    });
    $(".tab-menu > li").click(function(e){
        for(var i=0;i<tabNames.length;i++) {
            if(e.target.id == tabNames[i]) {
                activeTabIndex = i;
            } else if (e.target.id == "Plus") {
                $('.tab-menu li').each(function(){
                    if ($(this)[0].id != "Plus") {
                        $(this).removeClass("active");
                        var s = $(this)[0].id + "-tab";
                        $("#"+s).css("display", "none");
                    }
                });
                //var r = Math.floor(Math.random()*tabHTML.length);
                var s = Math.random().toString(36).substring(7);
                $('.tab-menu li:last-child').before('<li id="' + s + '">Новая тема</li>');
                $("#"+s).addClass("active");
                tabNames.push(s);
                activeTabIndex = -1;
                break;
            } else {
                $("#"+tabNames[i]).removeClass("active");
                $("#"+tabNames[i]+"-tab").css("display", "none");
            }
        }
        $("#"+tabNames[activeTabIndex]+"-tab").fadeIn(1000);
        $("#"+tabNames[activeTabIndex]).addClass("active");
        return false;
    });
});
