# bootstrap-dropdown-ajax
bootstrap dropdown ajax

## Very easy to use bootstrap and jquery based dropdown with selector.

use below code in your html

```html
<!-- hdrop starts here --> 
<div class="hDrop_search" API_URL="https://restcountries.eu/rest/v2/name/" return_field_name="name" value_field_name="value" > 
	<div class="input-group mt-3">
	  <input type="text" class="form-control q" placeholder="Type name and hit search" id="q" aria-describedby="basic-addon2"> 
	  <div class="input-group-append">
		<span class="input-group-text search h_cursor_pointer" id="search">Search</span>
	  </div>
	</div>

	 <ul class="list-group"> 
	</ul>
</div>
<!-- hdrop ends here --> 
```

## Here 
1. "hDrop_search" = is the selector class.
2. API_URL        = is your API url from where you get your dropdown json
3. return_field_name = is your return field name of the field you want to show in your dropdown
4. value_field_name  = is your value field name


## Javascript Code

```javascript

<script type="text/javascript">

$(function(){
	
	$('.hDrop_search').each(function(i, obj) {
	    
	    console.log($(obj).find('.q').val()); 
		
		$(obj).on("click", ".hitem", function (e) {
			console.log($(this).text());
			$(obj).find('.q').val($(this).text());
			$(obj).find('ul').empty()
		});
		
		$(obj).on("click", ".search", function (e) {
			console.log(this.id);
			 
					e.preventDefault(); // prevent form from reloading page 
					var api_url    = $(obj).attr('API_URL'); 
					var q          = $(obj).find('.q').val();
					var item_name  = $(obj).attr('return_field_name');
					var item_value = $(obj).attr('value_field_name');
					
					if(q.length >= 3){
					$.ajax({
						'url' : api_url+q,
						'type' : 'GET', 
						beforeSend: function() {
						   
						},
						error: function(jqXHR, textStatus, errorThrown) { 
							if(jqXHR.status == 404 || errorThrown == 'Not Found') 
							{ 
							  var res = JSON.parse(JSON.stringify(jqXHR.responseJSON));
							  console.log(res.message); 
							  alert('Not Found. Please try again!');
							}
						},
						'success' : function(data) {
							console.log(data);
							$.each(data, function(index) {
								console.log(data[index][item_name]); 
								
								$(obj).find('ul').append('<li class="list-group-item hitem h_cursor_pointer">'+data[index][item_name]+'</li>');
							});
						}
					});
					}else{
						alert('Please type min 3 character!');
					}
					
			 
			
			
		});


	 
	 }); 
 
});
 
</script>
```
