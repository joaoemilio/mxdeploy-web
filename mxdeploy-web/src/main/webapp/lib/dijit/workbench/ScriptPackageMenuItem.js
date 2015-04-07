define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ScriptPackageMenuItem.html"
], function(declare, _WidgetBase, _TemplatedMixin, template){

    var topContainer;
    return topContainer = declare("ScriptPackageMenuItem", [_WidgetBase, _TemplatedMixin], {
        scriptName: "",
        templateString: template
    });

});