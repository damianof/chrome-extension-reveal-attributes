'use strict';

document.addEventListener('DOMContentLoaded', documentEvents  , false);

function documentEvents() {    
	document.getElementById('btnRevealThings')
		.addEventListener('click', 
		function() { 
			onRevealThingsClick(document.getElementById('txtAttributeName').value);
		});

	document.getElementById('btnHideThings')
		.addEventListener('click', 
		function() {
			onHideThingsClick();
		});
}

function onRevealThingsClick(attrName) {
	let code = `var selectedColor = "#EE0"; `
		+ `var attributeName = "${attrName}";`
		+ 'var body = $("body");'
		+ 'var allItems = undefined;';
	//console.log('code', code);
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	//	let tab = tabs[0];
		chrome.tabs.executeScript(null, {
			code: code
		}, function() {
			chrome.tabs.executeScript(null, {
				file: 'reveal-things.js'
			});
		});
    //});
}

function onHideThingsClick() {
	let code = 'var body = $("body");'
		+ 'var allItems = undefined;';
	//console.log('code', code);
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	//	let tab = tabs[0];
		chrome.tabs.executeScript(null, {
			code: code
		}, function() {
			chrome.tabs.executeScript(null, {
				file: 'hide-things.js'
			});
		});
    //});
}
