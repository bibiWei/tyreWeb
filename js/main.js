var tyre = {};

tyre.main = {

    init :function () {
        tyre.main.initBody("index.html");
    },

    bindEvent:function () {
        
    },
    
    initBody:function (htmlUrl) {
        $("#mainBody").load(htmlUrl,function(){});
    }
};
$(function(){
    tyre.main.init();
});