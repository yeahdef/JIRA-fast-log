// ==UserScript==
// @require http://code.jquery.com/jquery-latest.js
// @name         JIRA Comment Fast Maker
// @namespace    http://dollardialup.com/
// @version      0.2
// @description  adds buttons to discogs master release page for adding all of a certain format to your wantlist
// @author       Joey Liechty, Scott Powers
// @match        https://jira.bloomreach.com/*
// @grant        none
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

setInterval(function(){ 
    // log work dialog
    $("#log-work-dialog #log-work-time-logged").attr('tabindex',1);
    $("#log-work-dialog #comment").attr('tabindex',2);
    $("#log-work-dialog #log-work-submit").attr('tabindex',3);
    // assign dialog
    $("#assign-dialog #assignee-field").attr('tabindex',1);
    $("#assign-dialog #comment").attr('tabindex',2);
    $("#assign-dialog #assign-issue-submit").attr('tabindex',3);                                                
}, 100);
