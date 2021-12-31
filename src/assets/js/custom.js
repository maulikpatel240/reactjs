
// loader js 
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(200).slideUp('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).addClass('active-body');
})
$( document ).ready(function($) {

    // tooltip js
    $('[data-bs-toggle="tooltip"]').tooltip();

    // search js
    $(".search .search-icon").on("click", function (e) {
        $(".search-wrapper").addClass("open");
        e.stopPropagation()
    });
    // $(document).on("click", function (e) {
    //     if ($(e.target).is(".search-wrapper") === false) {
    //         $(".search-wrapper").removeClass("open");
    //     }
    // });
    $(".search .close").click(function(){
        $(this).parent().next().removeClass("open");
        $(this).hide();
    });
    $(".search .close").hide();
    $(".search .search-input").click(function(){
        $(this).parent().next().addClass("open");
        $(".search .close").show();
    });

    // mobile menu toggle js 
    $(".mobile-menu-icon").click(function(){
        $(".sidenav-bar").toggleClass("open");
    });

    // drawer js
    $("#addbusytime-drawer-link").on("click", function () {
        $("#addbusytime-drawer").addClass("open");
    });
    $("#addappoinment-drawer-link").on("click", function () {
        $("#addappoinment-drawer").addClass("open");
    });
    $("#addclient-drawer-link,#addclient-link").on("click", function () {
        $("#addclient-drawer").addClass("open");
    });
    $("#addsale-drawer-link").on("click", function () {
        $("#addsale-drawer").addClass("open");
    });
    $("#addbusytime-drawer .close-drawer").on("click", function () {
        $("#addbusytime-drawer").removeClass("open");
    });
    $("#addappoinment-drawer .close-drawer").on("click", function () {
        $("#addappoinment-drawer").removeClass("open");
    });
    $("#addclient-drawer .close-drawer").on("click", function () {
        $("#addclient-drawer").removeClass("open");
    });
    $("#addsale-drawer .close-drawer").on("click", function () {
        $("#addsale-drawer").removeClass("open");
    });
    
    var element = document.getElementById('sale-complete-link');
    var element = document.getElementById('sale-checkout-link');
    $("#sale-complete-link").on("click", function () {
        $("#salecomplete-drawer").addClass("open");
    });
    $("#salecomplete-drawer .close-drawer").on("click", function () {
        $("#salecomplete-drawer").removeClass("open");
    });
    $("#sale-checkout-link").on("click", function () {
        $("#salecheckout-drawer").addClass("open");
    });
    $("#salecheckout-drawer .close-drawer").on("click", function () {
        $("#salecheckout-drawer").removeClass("open");
    });
    $("#new-sale-link").on("click", function () {
        $("#newsale-drawer").addClass("open");
    });
    $("#newsale-drawer .close-drawer").on("click", function () {
        $("#newsale-drawer").removeClass("open");
    });
    $("#payment-link").on("click", function () {
        $(this).parents().find("#payment-drawer").addClass("open");
    });
    $("#payment-drawer .close-drawer").on("click", function () {
        $("#payment-drawer").removeClass("open");
    });
    $("#salecomplete-invoice-link").on("click", function () {
        $("#salecomplete-invoice-drawer").addClass("open");
    });
    $("#salecomplete-invoice-drawer .close-drawer").on("click", function () {
        $("#salecomplete-invoice-drawer").removeClass("open");
    });
    $("#salevoucher-link").on("click", function () {
        $("#salevoucher-drawer").addClass("open");
    });
    $("#salevoucher-drawer .close-drawer").on("click", function () {
        $("#salevoucher-drawer").removeClass("open");
    });
    $("#invoice-link,.invoice-link").on("click", function () {
        $("#invoice-drawer").addClass("open");
    });
    $("#invoice-drawer .close-drawer").on("click", function () {
        $("#invoice-drawer").removeClass("open");
    });
    $("#addstaff-member-link").on("click", function () {
        $("#addstaff-member-drawer").addClass("open");
    });
    $("#addstaff-member-drawer .close-drawer").on("click", function () {
        $("#addstaff-member-drawer").removeClass("open");
    });
    $("#editstaff-member-link").on("click", function () {
        $("#editstaff-member-drawer").addClass("open");
    });
    $("#editstaff-member-drawer .close-drawer").on("click", function () {
        $("#editstaff-member-drawer").removeClass("open");
    });
    $(".add-service").on("click", function () {
        $("#addservice-drawer").addClass("open");
    });
    $("#addservice-drawer .close").on("click", function () {
        $("#addservice-drawer").removeClass("open");
    });
    $(".edit-service").on("click", function () {
        $("#editservice-drawer").addClass("open");
    });
    $("#editservice-drawer .close").on("click", function () {
        $("#editservice-drawer").removeClass("open");
    });
    $(".add-product").on("click", function () {
        $("#addproduct-drawer").addClass("open");
    });
    $("#addproduct-drawer .close").on("click", function () {
        $("#addproduct-drawer").removeClass("open");
    });
    $(".edit-product").on("click", function () {
        $("#editproduct-drawer").addClass("open");
    });
    $("#editproduct-drawer .close").on("click", function () {
        $("#editproduct-drawer").removeClass("open");
    });
    $(".add-suppliers").on("click", function () {
        $("#addsuppliers-drawer").addClass("open");
    });
    $("#addsuppliers-drawer .close").on("click", function () {
        $("#addsuppliers-drawer").removeClass("open");
    });
    $(".client-detail").on("click", function () {
        $(".client-detaildrawer").addClass("open");
    });
    $(".client-detaildrawer .close-drawer").on("click", function () {
        $(".client-detaildrawer").removeClass("open");
    });
    $(".add-photo").on("click", function () {
        $(".addphoto-drawer").addClass("open");
    });
    $(".addphoto-drawer .close").on("click", function () {
        $(".addphoto-drawer").removeClass("open");
    });
    $(".add-document").on("click", function () {
        $(".adddoc-drawer").addClass("open");
    });
    $(".adddoc-drawer .close").on("click", function () {
        $(".adddoc-drawer").removeClass("open");
    });
    $(".add-note").on("click", function () {
        $(".addnote-drawer").addClass("open");
    });
    $(".addnote-drawer .close").on("click", function () {
        $(".addnote-drawer").removeClass("open");
    });
    $(".client-detaildrawer .close").on("click", function () {
        $(".client-detaildrawer .drawer").removeClass("open");
    });
    $(".viewappoinment-link").on("click", function () {
        $(".viewappoinment").addClass("open");
    });
    $(".viewappoinment .close").on("click", function () {
        $(".viewappoinment").removeClass("open");
    });

    // mega menu dropdown js 
    $('.main-menu li ul').parent().addClass('children');
    $(".main-menu li.children").each(function(i)   {

        if ($(this).has("ul").length)
        {
            $(this).find('> a').append('<i class="fal fa-angle-right"></i>');
            $(this).find('ul').before('<span class="menu-back"></span>');
        }
        
    });    
    $(".main-menu li.children a").on("click", function () {
        $(this).parent().find("> ul").addClass("open");
        $(this).parent().addClass("childrenopen");
    });  
    $(".main-menu > li.children .menu-back").on("click", function () {
        $(this).parent().removeClass("childrenopen");
        $(this).next().removeClass("open");
    });
    
    // product box collapse 
    $(".product-box .close").on("click", function () {
        $(this).parent().next().removeClass("show");
        $(this).parent().removeClass("open");
    }); 
    $(".product-box").on("click", function () {
        $(this).addClass("open");
        $(".collapse").addClass("show");
    }); 

    // new sale popup 
    $("#newsale-drawer .right-col .search-result li a").on("click", function () {
        $(this).parents().find("#newsale-drawer .right-col .search-panel").hide();
        $(this).parents().find("#newsale-drawer .right-col .add-item-panel").show();
        $(this).parents().find("#newsale-drawer .right-col .complete-box").hide();
    }); 
    $("#newsale-drawer .user-id .close").on("click", function(){
        $(this).parents().find("#newsale-drawer .right-col .search-panel").show();
        $(this).parents().find("#newsale-drawer .right-col .add-item-panel").hide();
    });

    // sale voucher popup 
    $("#salevoucher-drawer .right-col .search-result li a").on("click", function () {
        $(this).parents().find("#salevoucher-drawer .right-col .search-panel").hide();
        $(this).parents().find("#salevoucher-drawer .right-col .add-item-panel").show();
    }); 
    $("#salevoucher-drawer .user-id .close").on("click", function(){
        $(this).parents().find("#salevoucher-drawer .right-col .search-panel").show();
        $(this).parents().find("#salevoucher-drawer .right-col .add-item-panel").hide();
    });
    

    //   price titers js
    $('.add-price-popup').click(function(){
        $('.add-main-category').show();
    });
    $('.add-price-popup').click(function(){
        $('.box-image-cover .close-category').show();
    });
    $('.box-image-cover .close-category').click(function(){
        $(this).parent().hide();
    });   
    // roster table 
    $("#roster table .add-time").click(function(){
        $(this).parent().find(".addtime-popup").show();
    });   
    $("#roster .addtime-popup .close").click(function(){
        $(this).parent().hide();
    });   
    $("#roster .updated-time.show").each(function(){
        $(this).parent().css("background-color","#F9F6F4");
    });
    $("#roster table .updated-time.show").click(function(){
        $(this).parent().find(".updatetime-popup").show();
    });   
    $("#roster .updatetime-popup .close").click(function(){
        $(this).parent().hide();
    });  
    $("#roster .updatetime-popup #mark-away").click(function(){
        $(this).parent().parent().parent().find(".away-text").show();
        $(this).parent().parent().parent().find(".updated-time").hide();
        $(this).parent().parent().parent().find(".updated-time").removeClass("show");
        $(this).parent().parent().parent().css("background-color","#8F807D");
        $(this).parent().parent().hide();
        $(this).hide();
        $(this).next("#mark-not-away").show();
    }); 
    $("#roster table .away-text").click(function(){
        $(this).parent().find(".updatetime-popup").show();
    });  
    $("#roster table #mark-not-away").click(function(){
        $(this).parent().find("#mark-away").show();
        $(this).hide();
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".away-text").hide();
        $(this).parent().parent().parent().css("background-color","#F9F6F4");
        $(this).parent().parent().parent().find(".updated-time").show();
    });   
});

