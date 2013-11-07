var key = 0, duration = 2000;
var textarray = [
        'For your eyes only. Really.',
        'How is password protection secure if I have to tell you the password?',
        'Marking a document "Confidential" doesn\'t make it confidential.',
        'Because PDF passwords are easy to crack.',
        'Sharing a file doesn\'t mean giving it away.',
        'When the content in your file is on a need-to-know basis.',
        'Share files. Keep control.'];


$(function() {
    
	$('.sent-received-table tr:not(tr.datatr)').each(function(i, item) { 
		if(i != 0){
			if(i % 2) {
				$(item).addClass('alt');
			}

		}
	});
    $('#accordion').on('hidden.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').removeClass('active');
    });
    $('#accordion').on('shown.bs.collapse', function (e) {
        console.log($(e.target).html());
        $(e.target).prev('.panel-heading').addClass('active');
    });
	$('.sent-received-table .btn-more-recipients').each(function(i, item) { 
		$(item).on('click', function()  {
			if($(this).hasClass('closed')) {
				$(this).addClass('open');
				$(this).closest('td').addClass('open');
				$(this).closest('tr').next().show();
				$(this).removeClass('closed');
			} else { 
				$(this).addClass('closed');
				$(this).closest('td').removeClass('open');
				$(this).closest('tr').next().hide();
				$(this).removeClass('open')
			}
			
		});
	});

	$('.btn-track').each(function(i, item) { 
		$(item).on('click', function()  {
			if($(this).hasClass('closed')) {

				$(this).addClass('open');
				$(this).addClass('open');
				$($(this).attr('data-track')).show();
				$(this).removeClass('closed').css('position', 'relative');
                $(this).append('<div class="greybox"></div>');

			} else { 
                $(this).css('position', 'static');
                $(this).find('.greybox').remove();
				$(this).addClass('closed');
				$(this).removeClass('open');
				$($(this).attr('data-track')).hide();
				$(this).removeClass('open')
			}
			return false;
		})
	});

    var textcylcler = function(){
        if(key > (textarray.length-1)) {
            key = 0;
        }
        $('#textcycle').fadeOut('normal', function() { 
            $('#textcycle').text(textarray[key]);
        });
        $('#textcycle').fadeIn('normal', function() { 
            key++;
        }).delay(duration);
    }

    if($('#textcycle').length > 0) { 
        setInterval(function() { textcylcler(); }, 1000);
    }
    $('.pss_select').customSelect();



    $('.checkbox').after(function(){

       if ($(this).is(":checked")) {
         return "<a href='#' class='toggle checked' ref='"+$(this).attr("id")+"'></a>";
       }else{
         return "<a href='#' class='toggle' ref='"+$(this).attr("id")+"'></a>";
       }

    });
     $('#SendFileConfirm').on('click', function() { 

       $('#sendModal').modal('hide');
       $('#confirmSendModal').modal('show');
     });   


    $('.toggle').click(function(e) {
           var checkboxID = $(this).attr("ref");
           var checkbox = $('#'+checkboxID);

           if (checkbox.is(":checked")) {
             checkbox.removeAttr("checked");

           }else{
             checkbox.attr("checked","true");
           }
           $(this).toggleClass("checked");

           e.preventDefault();

        });

    var thiswindow = $(window);
        $('#mainnav').on('mouseenter', function() { 
            if(thiswindow.width() < 1047 && thiswindow.width()> 768) {
                $('#social-nav-li').fadeIn('fast');
            }
        });
        $('#mainnav').on('mouseleave', function() { 
            if(thiswindow.width() < 1047 && thiswindow.width()> 768) {
                $('#social-nav-li').fadeOut('fast');
            }
        });
        thiswindow.on('resize', function()  { 
            if(thiswindow.width() < 1047 && thiswindow.width()> 768) {
                $('#social-nav-li').fadeOut('fast');
            } else { 
                $('#social-nav-li').fadeIn('fast');
            }
        });


});