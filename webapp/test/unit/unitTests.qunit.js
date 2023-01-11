/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comzsample_bol/zsample_bol/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
