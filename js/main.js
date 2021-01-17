// для выпадающего списка профиля
$('#btn-menu').click(function () {
    $('#dropdown-menu').toggleClass('profile__dropdown-menu_visible-popup-menu');
});
// для выпадающего списка расширенного поиска
$('.btn-extend-search').click(function () {
    let box = $('.box-extend-search');
    let currentClass = box[0].attributes[0].nodeValue;
    let openPanel = 'box-extend-search'; // переменная для проверки  нужного класса
    if (currentClass === openPanel) {
        box.fadeIn(300);
    } else
        box.fadeOut(300);
    box.toggleClass('box-extend-search_visible-popup-menu');
});
// для выпадающего списка фильтра
$('.filter-button').click(function () {
    let box = $('.filter-form');
    let currentClass = box[0].attributes[0].nodeValue;
    console.log(currentClass);
    let openPanel = 'filter-form'; // переменная для проверки  нужного класса
    if (currentClass === openPanel) {
        box.fadeIn(300);
    } else
        box.fadeOut(300);
    box.toggleClass('filter-form-visible');
});
// для n выпадающих списков
$('.glyphicon-menu-left').click(function () {
    let ul = $(this).parent().next('ul');
    let span = $(this); // выделяем стрелочку
    let textA = $(this).prev(); // выделяем название списка
    textA.toggleClass('list-box__dropdown-menu_click');
    span.toggleClass('rotate-glyphicon-menu-left');
    ul.toggleClass('list-box__dropdown-menu_nested');
    span.toggleClass('list-box__dropdown-menu_click');
    ul.toggleClass('list-box__dropdown-menu_visible-popup-menu');
});
// разворачивание таблицы на все окно
$('#full-table').click(function () {
    $('.left-sidebar').hide();
    $('.content').css('width', '100%');
    $('.card__card-block').css('padding', '1rem');
    $(this).hide();
    $('.box-extend-search').css('left','21px');
    $('#small-table').addClass('btn btn-primary btn-sm');
    $('#small-table').show();
    $('#menu-table').toggleClass('menu-table-unroll-btn');
    $('.menu-table-unroll').toggleClass('menu-table-unroll-elements');
});
// сворачивание таблицы до первоначального размера
$('#small-table').click(function () {
    $(this).show();
    $('.left-sidebar').show();
    $('.content').css('width', '78%');
    $('.card__card-block').css('padding', '2rem');
    $('#small-table').addClass('btn btn-primary btn-sm');
    $('#full-table').show();
    $('#menu-table').show();
    $(this).hide();
    $('.box-extend-search').css('left','373px');
    $('#menu-table').toggleClass('menu-table-unroll-btn');
    $('.menu-table-unroll').toggleClass('menu-table-unroll-elements');
});
$('.statistician-btn').click(function () {
    $('.statistician-box').toggleClass('statistician-box_visible');
});
// Кнопка волшебная, 1 шт.
$('#unroll-btn').click(function () {
    let btn = $('.menu-table-unroll');
    let openPanel = 'menu-table-unroll'; // переменная для проверки  нужного класса
    let openPanel_2 = 'menu-table-unroll menu-table-unroll-elements'; // переменная для проверки  нужного класса (2 вариант, если нажали на кнопку unroll-btn в развернутой таблице )
    let currentClass = btn[0].attributes[0].nodeValue;
    console.log(currentClass);
    if (currentClass === openPanel || (currentClass === openPanel_2)) {
        $(this).children('span').addClass('glyphicon-menu-right-animate'); // поворачиваем стрелку
        $('.menu-table-unroll').addClass('menu-table-unroll_visible');
        $('.glyphicon-menu-right').css('transform', 'none');
        $(this).attr('title', 'Свернуть меню');
    } else {
        $(this).children('span').removeClass('glyphicon-menu-right-animate');
        $('.menu-table-unroll').removeClass('menu-table-unroll_visible');
        $('.glyphicon-menu-right').css('transform', 'rotate(180deg)');
        $(this).attr('title', 'Развернуть меню');
    }
});
$('#btn-save-menu').click(function () {
    let btn = document.getElementById('btn-save-form');
    btn.click();
});
// для класса search__form-control
$('.search__form-control').click(function () {
    $('.search__form-control').addClass('search__form-control-focused');
});

let tableToPrint = document.getElementById('register-book');

function printData(tableToPrint) {
    Popup($(tableToPrint).html());
}

function Popup(data) {
    let iframe = $('<iframe id="print_frame">');
    let prtCSS = '<link rel="stylesheet" href="css/print.css" type="text/css" />';
    // $('body').append(iframe);
    let winPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    // let winPrint = $('#print_frame')[0].contentWindow || $('#print_frame')[0];
    // стили таблицы
    winPrint.document.write(prtCSS);
    console.log(prtCSS);
    winPrint.document.write(tableToPrint.outerHTML);
    winPrint.document.close(); // для IE >= 10
    winPrint.focus(); // для IE >= 10
    winPrint.print();
    winPrint.close();
    return true;
}

//кнопка печати
$('#print-page').click(function () {
    printData();
    return false;
});


// функция переключений между дивами в tab-3
let links = document.querySelectorAll('.show-data');
links.forEach(function(link) {
    $(link).click(function () {
        let divs = document.querySelectorAll('.showable');
        divs.forEach(function (div) {
            div.style.display = 'none';
        });
        let aim = document.querySelector('.show-'+ this.getAttribute('data-show'));
        if (aim)
            aim.style.display = 'block';
    });
});

