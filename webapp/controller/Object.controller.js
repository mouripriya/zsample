sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    'sap/ui/core/library'
], function (BaseController, JSONModel,coreLibrary) {
    "use strict";
    var ValueState = coreLibrary.ValueState;

    return BaseController.extend("com.zsamplebol.zsamplebol.controller.Object", {

        

        onInit: function () {
            jQuery.sap.require("jquery.sap.storage");
            var that = this;     
            
            var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
            oRouter.getRoute("Object").attachPatternMatched(that._onObjectMatched, that);
        },
        _onObjectMatched:function(){
            alert("Welcome");
        }
	});
});