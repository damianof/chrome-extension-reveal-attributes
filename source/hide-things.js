body = $('body');

allItems = document.getElementsByTagName('*');
//console.log('hide-things: allItems', allItems);
$.each(allItems, function(key, item) {
	if (item && item._tippy) {
		//console.log('hide-things: destroy');
		item._tippy.destroy();
	}
});
