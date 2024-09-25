$(document).ready(function(){
        $("div.selectTabs_first, div.selectTabs_second").each(function () {
            let tmp = $(this);

            //giving the first tab class - active
            $(tmp).find(".lineTabs li:first-of-type").addClass("active");
            $(tmp).find(".content div:first-of-type").addClass("active");

            $(tmp).find(".lineTabs li").each(function (i) {
                $(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
                    let tab_id = i + 1;
                    $(tmp).find(".lineTabs li").removeClass("active");
                    $(this).parent().addClass("active");
                    $(tmp).find(".content div").stop(false, false).hide();
                    $(tmp).find(".tab" + tab_id).stop(false, false).show();

                    if ($(tmp).hasClass("selectTabs_second")) {//only for the second selection tab, giving Active to his content, for adding special styles
                        $(tmp).find(".content div").removeClass("active");
                        $(tmp).find(".tab" + tab_id).addClass("active");
                    }
                    return false;
                });
            });
        });
    });
