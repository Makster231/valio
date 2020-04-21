import '../common/scss/main.scss';

$(document).ready(() => {
  $('body').css({ opacity: '1' });

  //  For await func
  function delay(time) {
    return new Promise(((resolve) => {
      return setTimeout(resolve, time);
    }));
  }

  let index = 0;

  $('.js_next-slide').click(async () => {
    // $('.slides:eq(' + index + ')').addClass('d-none').next().removeClass('d-none');
    // index++;

    $(`.slides:eq(${index})`)
      .removeClass('js_go-right')
      .addClass('js_go-left')
      .next()
      .addClass('js_go-right');
    await delay(300);
    $(`.slides:eq(${index})`)
      .hide()
      .next()
      .show();
    index++;
    if (index > 0) {
      $('.side_logo').css({ display: 'none' })
      $('.header_logo').css({ display: 'none' })
      $('.header_logo.img').css({ display: 'block' })
      $('.content').removeClass('content_bg-first_screen');
      $('.content').addClass('content_bg-1');
    }
    if (index > 4) {
      $('.content').removeClass('content_bg-1');
      $('.content').addClass('content_bg-2');
    } bg
    if (index > 14) {
      $('.content').removeClass('content_bg-2');
      $('.content').addClass('content_bg-3');
    }
    if (index > 17) {
      $('.content').removeClass('content_bg-3');
      $('.content').addClass('content_bg-4');
    }
    if (index > 22) {
      $('.content').removeClass('content_bg-4');
      $('.content').addClass('final_bg');
    }
  });
});
