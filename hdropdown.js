$(function() {

        $('.hDrop_search').each(function(i, obj) {

            console.log($(obj).find('.q').val());

            $(obj).on("click", ".hitem", function(e) {
                console.log($(this).text());
                $(obj).find('.q').val($(this).text());
                $(obj).find('ul').empty()
            });

            $(obj).on("click", ".search", function(e) {
                console.log(this.id);

                e.preventDefault(); // prevent form from reloading page 
                var api_url = $(obj).attr('API_URL');
                var q = $(obj).find('.q').val();
                var item_name = $(obj).attr('return_field_name');
                var item_value = $(obj).attr('value_field_name');

                if (q.length >= 3) {
                    $.ajax({
                        'url': api_url + q,
                        'type': 'GET',
                        beforeSend: function() {

                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            if (jqXHR.status == 404 || errorThrown == 'Not Found') {
                                var res = JSON.parse(JSON.stringify(jqXHR.responseJSON));
                                console.log(res.message);
                                alert('Not Found. Please try again!');
                            }
                        },
                        'success': function(data) {
                            console.log(data);
                            $.each(data, function(index) {
                                console.log(data[index][item_name]);

                                $(obj).find('ul').append('<li class="list-group-item hitem h_cursor_pointer">' + data[index][item_name] + '</li>');
                            });
                        }
                    });
                } else {
                    alert('Please type min 3 character!');
                } 
            });
 
        });

    }); 
