// ==UserScript==
// @id           	adblock.requestly
// @version      	0.1
//
// # WHAT?
// @name         	Adblock for Requestly
// @description  	Evades Requestly's adblock blocker
// @license         The Unlicense
// @licenseURL		http://unlicense.org/
//
// # WHO?
// @author       	Hocine Benferhat
// @namespace    	https://github.com/hocine
// @icon         	https://c2.staticflickr.com/4/3194/2286487061_c87015d8d7_z.jpg
//
// # WHERE?
// @match        	*://web.requestly.in/*
// @homepageURL     https://github.com/hocine/gm.adblock.requestly/
// @supportURL      https://github.com/hocine/gm.adblock.requestly/issues
// @updateURL       https://github.com/hocine/gm.adblock.requestly/raw/master/gm.adblock.requestly.meta.js
// @downloadURL     https://github.com/hocine/gm.adblock.requestly/raw/master/gm.adblock.requestly.user.js
//
// # HOW?
// @grant        	none
// @require      	https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @run-at          document-start
// @priority        9001
// ==/UserScript==


(function() {
	this.$ = this.jQuery = jQuery.noConflict(true);
	
	__add_styles(
		'.ad-container {' +
		'    right: -9999px !important;' +
		'    position: fixed !important;' +
		'}'
	);

	function __add_styles(styles) {
		$('head').append('<style>' + styles + '</style>');
	}
})();
