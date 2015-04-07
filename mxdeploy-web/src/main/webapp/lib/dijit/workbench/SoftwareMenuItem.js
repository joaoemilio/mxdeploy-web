define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/SoftwareMenuItem.html"
], function(declare, _WidgetBase, _TemplatedMixin, template){

    var topContainer;
    return topContainer = declare("SoftwareMenuItem", [_WidgetBase, _TemplatedMixin], {
        title: "",
        iconClass:"",
        templateString: template
    });

});