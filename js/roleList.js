tyre.roleList = {

    init:function () {
        pageLoadingFrame("show");
        tyre.orderList.doOrderList();
        //ģ�����
        setTimeout(function(){
            pageLoadingFrame("hide");
        },1000);
    },

    binEvent:function () {

    },

    doRoleList:function () {

    }
};

$(function(){
    tyre.roleList.init();
});