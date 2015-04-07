define([
      "dojo/_base/declare"
    , "dijit/_Widget"
    , "dijit/_TemplatedMixin"
    , "dijit/_WidgetsInTemplateMixin"
    , "dijit/layout/ContentPane"
    , "dojo/text!./templates/BorderRightTitleContainer.html"
    , "dijit/form/ValidationTextBox"
], function(declare, _Widget, templatedMixin, _WidgetsInTemplateMixin, contentPane, template){

    var topContainer;
    return topContainer = declare("dijit.workbench.BorderRightTitleContainer", [_Widget, templatedMixin], {
        title: "",
        // Our template - important!
        templateString: template,

        constructor: function(){
            this.inherited(arguments);
            console.log("BorderRightTitleContainer widget get created");
        },

        postCreate:function(){
            this.inherited(arguments);
            console.log("BorderRightTitleContainer widget get instantiated");
        },

    });

});