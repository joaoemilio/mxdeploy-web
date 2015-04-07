define(["dojo/_base/declare"
    , "dijit/_Widget"
    , "dijit/_TemplatedMixin"
    , "dijit/_WidgetsInTemplateMixin"
    , "dojo/text!./templates/Iner.html"
    , "dijit/InlineEditBox"

], function(declare, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, template){

    return declare("dijit.workbench.Iner", [ _Widget, _TemplatedMixin, _WidgetsInTemplateMixin ], {
        templateString: template,

        constructor: function(){
            this.inherited(arguments);
            console.log("widget get created");
        },

        postCreate:function(){
            this.inherited(arguments);
            console.log("widget get instantiated");
        }

    });

});
