body = $('body');

allItems = document.getElementsByTagName('*');
//console.log('reveal-things: allItems', allItems);
$.each(allItems, function(key, item) {
	if (item && item._tippy) {
		//console.log('reveal-things: destroy');
		item._tippy.destroy();
	}
});

setTimeout(function() {
	//console.log('attributeName', attributeName);

	if ((attributeName || '').length) {
		tippy.setDefaults({ 
			delay: 0, 
			duration: 0, 
			arrow: true, 
			showOnInit: true, 
			size: 'small', 
			sticky: true 
		});
		var items = $(`[${attributeName}]`, body); // document.querySelectorAll
		//console.log('test', items);
		$.each(items, function(key, item) {
			tippy(item, {
				theme: 'honeybee',
				content: item.className
			});
		});
	}

}, 500);
