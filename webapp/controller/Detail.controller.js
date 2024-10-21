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
    "sap/m/MessageBox",
    "com/sap/ordernorthwind/model/formatter"
],
function (Controller,ODataModel,JSONModel, Filter, FilterOperator, spreadsheetLibrary, Spreadsheet, MessageToast, Fragment,MessageBox,formatter) {
    "use strict";

    return Controller.extend("com.sap.ordernorthwind.controller.Detail", {
        formatter : formatter,
        onInit: function () {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("OrderDetail").attachPatternMatched(this.onObjectMatched,this)
        },
        onObjectMatched: function(oEvent){
                debugger;
                var iOrderId = oEvent.getParameter("arguments").orderId;
                var oModel = new JSONModel({});
                this.getView().setModel(oModel,"DetailModel")
                this._fnLoadOrderDetails(iOrderId);
        },

        _fnLoadOrderDetails: function(iOrderId){
            var oModel = this.getOwnerComponent().getModel();
             var sPath = oModel.createKey("/Orders",{
                OrderID : iOrderId
             });
          
            oModel.read(sPath,{
                urlParameters: {
                    "$expand" : "Order_Details,Employee,Customer"
                },
                filters : [],
                success : function(oData){
                    
                    this.getView().getModel("DetailModel").setProperty("/OrderDetail",oData);
                }.bind(this),
                error : function(err){

                }.bind(this)
            });
        },

        onPressBack: function(){
            this.oRouter.navTo("RouteHome");
        }
       
    });
});
