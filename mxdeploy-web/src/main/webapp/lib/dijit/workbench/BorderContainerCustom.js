define([
    "dojo/_base/declare",
    "dijit/layout/BorderContainer"
], function(declare,_BorderContainer){

    var BorderContainerCustom;
    return BorderContainerCustom = declare("BorderContainerCustom", _BorderContainer, {

        sizeLeft:0,
        sizeRight:0,
        sizeTop:0,
        sizeBottom:0,
        splitLocLeft:0,
        splitLocRight:0,
        splitLocTop:0,
        splitLocBottom:0,

        postCreate:function(){
            this.inherited("postCreate",arguments);
            console.log("gutters");
            this.gutters=false;

        },

        startup:function(){
            if(this._started){return;}
            this.inherited(arguments);
            dojo.forEach(this.getChildren(),this._showChild,this);
        },
        _showChild:function(_node){
            _node.gutters=false;
            console.log(_node);
            if(_node.splitter){
                var _root=_node._splitterWidget;
                var _classToggle;
                console.log(_node.region);
                if(_node.region=="bottom"){
                    _classToggle="toggle toggleHorizontal toggleDown";
                }else{
                    if(_node.region=="top"){
                        _classToggle="";
                    }else{
                        if(_node.region=="right"){
                            _classToggle="toggle toggleVertical toggleRight";
                        }else{
                            if(_node.region=="left"){
                                _classToggle="toggle toggleVertical toggleLeft";
                            }
                        }
                    }
                }
                this.setChildStatus(_node,true);
                var _divToggle=dojo.create("div",{id:_node.id+"_"+_node.region,className:_classToggle,style:"top:50%;"});
                if(_root){
                    _root.domNode.appendChild(_divToggle);
                    dojo.connect(_divToggle,"onmousedown",this,function(e){
                        this.toggle(_node);
                    });

                }
            }
        },
        toggle:function(_node){
            var _region=_node.region;
            var _splitter=_node._splitterWidget;
            var _divToggle=document.getElementById(_node.id+"_"+_node.region);
            if(_region=="bottom"){
                if(this.getChildStatus(_node)===true){
                    this.sizeBottom=dojo.position(_node.domNode,true).h-2;
                    this.buttomSplitExpandedTop=_splitter.domNode.style.top;
                    this.splitMoveToBottom="";
                    _node._setStyleAttr({height:_node.minSize+"px"});
                    if(this.buttomSplitExpandedTop){
                        this.splitMoveToBottom=parseInt(this.buttomSplitExpandedTop.substring(0,this.buttomSplitExpandedTop.indexOf("px")))+parseInt(this.sizeBottom)-_node.minSize-2+"px";
                        if(this.splitMoveToBottom){
                            try{
                                _splitter._setStyleAttr({top:this.splitMoveToBottom});
                            }catch(error){}
                        }
                    }
                    _divToggle.className="toggle toggleHorizontal toggleUp";
                    this.setChildStatus(_node,false);
                }else{
                    _node._setStyleAttr({height:this.sizeBottom+"px"});
                    _splitter._setStyleAttr({top:this.buttomSplitExpandedTop});
                    _divToggle.className="toggle toggleHorizontal toggleDown";
                    this.setChildStatus(_node,true);
                }
            }else{
                if(_region=="top"){
                    if(this.getChildStatus(_node)===true){
                        this.sizeTop=_node.domNode.style.height;
                        this.splitLocTop=_splitter.domNode.style.top;
                        _node._setStyleAttr({height:_node.minSize+"px"});
                        _splitter._setStyleAttr({top:this.splitMoveToButton});
                        _divToggle.className="toggle toggleHorizontal toggleDown";
                        this.setChildStatus(_node,false);
                    }else{
                        _node._setStyleAttr({height:this.sizeTop});
                        _splitter._setStyleAttr({top:this.splitLocTop});
                        _divToggle.className="toggle toggleHorizontal toggleUp";
                        this.setChildStatus(_node,true);
                    }
                }else{
                    if(_region=="right"){
                        if(this.getChildStatus(_node)===true){
                            this.sizeRight=_node.domNode.style.width;
                            this.leftValue=_splitter.domNode.style.left;
                            console.log(this.sizeRight+" "+this.leftValue);
                            this.splitMoveToLeft=parseInt(this.leftValue.substring(0,this.leftValue.indexOf("px")))+parseInt(this.sizeRight.substring(0,this.sizeRight.indexOf("px")))+"px";
                            console.log("splitMoveToLeft="+this.splitMoveToLeft);
                            console.log("minSize="+_node.minSize);
                            _node._setStyleAttr({width:_node.minSize+"px"});
                            _splitter._setStyleAttr({left:this.splitMoveToLeft});
                            _divToggle.className="toggle toggleVertical toggleLeft";
                            this.setChildStatus(_node,false);
                            console.log(_node.domNode.style.width);
                            console.log(_splitter.domNode.style.left);

                        }else{
                            _node._setStyleAttr({width:this.sizeRight});
                            _splitter._setStyleAttr({left:this.leftValue});
                            _divToggle.className="toggle toggleVertical toggleRight";
                            this.setChildStatus(_node,true);
                        }
                    }else{
                        if(_region=="left"){
                            if(this.getChildStatus(_node)===true){
                                this.sizeLeft=_node.domNode.style.width;
                                this.splitLocLeft=_splitter.domNode.style.left;
                                _node._setStyleAttr({width:_node.minSize+"px"});
                                _splitter._setStyleAttr({left:(_node.minSize+2)+"px"});
                                _divToggle.className="toggle toggleVertical toggleRight";
                                this.setChildStatus(_node,false);
                            }else{
                                _node._setStyleAttr({width:this.sizeLeft});
                                _splitter._setStyleAttr({left:this.splitLocLeft});
                                _divToggle.className="toggle toggleVertical toggleLeft";
                                this.setChildStatus(_node,true);
                            }
                        }
                    }
                }
            }
        },
        setChildStatus:function(_node,open){
            _node.open=open;
        },
        getChildStatus:function(_node){
            return _node.open;
        }



    });
});