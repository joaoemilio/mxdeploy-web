define(["dojo/_base/declare"
    , "dijit/_Widget"
    , "dijit/_TemplatedMixin"
    , "dijit/layout/ContentPane"
    , "dojo/text!./templates/DiagramContainer.html"

], function(declare, _Widget, _TemplatedMixin, contentPane, template){

    return declare("dijit.workbench.DiagramContainer", [ _Widget, _TemplatedMixin, contentPane ], {
        templateString: template,

        constructor: function(){
            this.inherited(arguments);
            console.log("widget get created");
        },

        postCreate:function(){
            this.inherited(arguments);
            console.log("widget get instantiated");
            this.registerEvents();
        },
        registerEvents: function () {
            //dojo.connect(this.domNode, "onclick", this, "onDiagramClick");
        },
        onDiagramClick: function(evt){
            console.log("widget was clicked");
            console.log(evt.currentTarget);
        }


    });

});
