define(["dojo/_base/declare"
    , "dijit/_Widget"
    , "dijit/_TemplatedMixin"
    , "dijit/_WidgetsInTemplateMixin"
    , "dijit/focus"
    , "dijit/registry"
    , "dojo/query"
    , "dojo/dnd/Moveable"
    , "dijit/ConfirmDialog"
    , "dojo/text!./templates/ServerContainer.html"
    , "dojo/NodeList-traverse"
    , "dijit/InlineEditBox"
    , "dijit/layout/ContentPane"
    , "dijit/Toolbar"
    , "dijit/form/Button"
    , "dijit/InlineEditBox"
    , "dojo/dnd/Target"
    , "dijit/TitlePane"
], function(declare, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, focusUtil, registry, query, Moveable, ConfirmDialog, template){

    var serverContainer;

    return serverContainer = declare("dijit.workbench.ServerContainer", [_Widget, _TemplatedMixin, _WidgetsInTemplateMixin], {
        title: "",

        templateString: template,
        dndArea: null,

        constructor: function(){
            this.inherited(arguments);
        },

        postCreate:function(){
            this.inherited(arguments);
            this.registerEvents();
        },
        registerEvents: function () {
            this.inherited(arguments);
            dojo.connect(this.domNode, "onmouseenter", this, "onHover");
            dojo.connect(this.domNode, "onmouseleave", this, "onUnHover");
            dojo.connect(this.domNode, "onclick", this, "onSelect");
            dojo.connect(this.removeServerButton.domNode, "onclick", this, "onRemove");

        },
        onHover: function (evt) {
            if (this.toolbar && this.toolbar.domNode) {
                dojo.style(this.toolbar.domNode, "display", "block");
            }
        },
        onUnHover: function (evt) {
            if (this.toolbar && this.toolbar.domNode) {
                dojo.style(this.toolbar.domNode, "display", "none");
            }
        },
        onSelect: function(evt){


            var activeNode = query(".containerFrame_border_selected").parent();
            if( activeNode[0] && activeNode[0] != this.domNode ) {
                selectedWidget = registry.byNode(activeNode[0]);
                if( selectedWidget.toolbar ) {
                    dojo.removeClass(selectedWidget.frameInnerContainer, "containerFrame_border_selected");
                    dojo.style(selectedWidget.toolbar.domNode, "display", "none");
                    activeNode[0].blur();
                }
            }

            this.dndArea = new Moveable(this.domNode, {skip: true});
            dojo.style(this.toolbar.domNode, "display", "block");
            dojo.addClass(this.frameInnerContainer, "containerFrame_border_selected");
            this.focus();
        },
        focus: function(){
            focusUtil.focus(this.domNode);
        },
        onRemove: function(evt){
            myDialog = new ConfirmDialog({
                title: "Confirmation",
                content: "Do you want remove this Server ?",
                style: "width: 300px"
            });

            dojo.connect(myDialog.okButton.domNode, "onclick", function(evt){
                    var activeNode = query(".containerFrame_border_selected").parent();
                    activeNode.orphan();

                });

            myDialog.show();
        }


    });

});