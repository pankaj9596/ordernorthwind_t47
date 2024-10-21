sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/export/library',
    'sap/ui/export/Spreadsheet',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
    "sap/m/MessageBox"
],
function (Controller,ODataModel,JSONModel, Filter, FilterOperator, spreadsheetLibrary, Spreadsheet, MessageToast, Fragment,MessageBox) {
    "use strict";

    return Controller.extend("com.sap.ordernorthwind.controller.Home", {
        onInit: function () {
            this.oRouter = this.getOwnerComponent().getRouter();

            // var oModel = new ODataModel();

            // var oModel = this.getOwnerComponent().getModel();
            // debugger;
            // oModel.read("/Orders",{
            //     success : function(oData){
            //         debugger;
            //     }.bind(this),
            //     error : function(err){

            //     }.bind(this)
            // });

        },
        onPressOrderItem: function(oEvent){
            var iOrderId = oEvent.getSource().getBindingContext().getObject().OrderID;
            var sCustomerId = oEvent.getSource().getBindingContext().getObject().CustomerID;
            debugger;
            this.oRouter.navTo("OrderDetail",{
                orderId : iOrderId,
                customerId : sCustomerId
            });
        }
    });
});
