consoleToggle
=============


Simple plugin that toggles the visibility of all console logs. 
You can set visibility anytime you want buy using built in function or setting up the LocalStorage item manually

This is useful if you want to hide all console logs in production and see them only if it is necessary

Usage

Include the plugin on your page
Setup the function by setting two params: show and change
Remember that setting change parameter overwrites show parameter
or see the source of this file.

Examples

consoleToggle({show: false, change: true}); <- depends on LocalStorage value (if not present then show:false will be used)
consoleToggle({show: false, change: false}); <- comments will be hidden
consoleToggle({show: true}); <- comments will be displayed
consoleToggle({show: false}); <- comments will be hidden
