SimpleGrid
=========================================================

A very basic grid system using sass


Usage
---------------------------------------------------------

By including the simplgrid mixin you can encapsulate the grid functionality into a container. You may also create your own breakpoints as needed

	.container
		@include simpleGrid(10px, 960px)
		@include addSimpleGridBreakPoint(2, 767px)

In your DOM structure use .row to contain your rows and .col-NUM where NUM is equal to any number from 1 to 12.  The grid maxes it at 12 columns but can easily add more.  The below syntax uses jade to show an example of how to use the grid.

	.container
		.row
			.col-1
				img(src="http://placehold.it/350x150")
		.row
			.col-2
				img(src="http://placehold.it/350x150")
			.col-2
				img(src="http://placehold.it/350x150")

This grid has only been tested in Chrome and requires testing in a multitude of other browsers.


Developed by Secret Location
---------------------------------------------------------

This code was created by developers at Secret Location.  If you require assistance in navigating any folders or files required for deployment please contact one of the contributors.  Also please use best practice and refer to the project lead for any documentation regarding Secret Location best practices.


Contributors
---------------------------------------------------------

* Ryan Andal