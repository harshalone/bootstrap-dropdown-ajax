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

##Here 
1. "hDrop_search" = is the selector class.
2. API_URL        = is your API url from where you get your dropdown json
3. return_field_name = is your return field name of the field you want to show in your dropdown
4. value_field_name  = is your value field name



