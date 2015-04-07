define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/TopContainer.html"
], function(declare, _WidgetBase, _TemplatedMixin, template){

    var topContainer;
    return topContainer = declare("TopContainer", [_WidgetBase, _TemplatedMixin], {
        username: "",
        title: "",
        baseClass: "top-container",
        // Our template - important!
        templateString: template
    });

});