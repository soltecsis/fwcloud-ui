import{$d as g,Cb as Y,Fa as h,Ga as y,Gb as L,Ha as P,Ib as J,Jb as W,Kb as $,Lb as Z,N as B,O as R,Oa as K,Ob as ee,P as A,Pa as U,Pb as I,Q as N,Ra as T,Rd as D,S,Sa as l,Sd as k,Td as te,U as o,Ud as c,V as p,Va as H,Xa as C,Ya as M,Za as j,_ as w,_a as Q,_d as ie,ae as ne,da as b,db as d,if as re,kf as le,lf as ae,ma as z,me as se,nb as X,ne as x,of as m,pf as E,sa as V,ta as F,wa as G,xa as O,ya as v,za as _,zb as q}from"./chunk-XG4CKKAH.js";var oe=`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        min-width: 0;
        min-height: 0;
        border: 0 none;
    }
`;var ue=["panel"];function de(n,f){n&1&&K(0)}function ce(n,f){if(n&1){let e=U();y(0,"div",4),T("mousedown",function(t){o(e);let s=l().index,r=l();return p(r.onGutterMouseDown(t,s))})("touchstart",function(t){o(e);let s=l().index,r=l();return p(r.onGutterTouchStart(t,s))})("touchmove",function(t){o(e);let s=l(2);return p(s.onGutterTouchMove(t))})("touchend",function(t){o(e);let s=l(2);return p(s.onGutterTouchEnd(t))}),y(1,"div",5),T("keyup",function(t){o(e);let s=l(2);return p(s.onGutterKeyUp(t))})("keydown",function(t){o(e);let s=l().index,r=l();return p(r.onGutterKeyDown(t,s))}),P()()}if(n&2){let e=l(2);d(e.cx("gutter")),h("pBind",e.ptm("gutter")),_("data-p-gutter-resizing",!1)("data-p",e.dataP),z(),d(e.cx("gutterHandle")),h("pBind",e.ptm("gutterHandle"))("ngStyle",e.gutterStyle()),_("aria-orientation",e.layout)("aria-valuenow",e.prevSize)}}function ge(n,f){if(n&1&&(y(0,"div",1),v(1,de,1,0,"ng-container",2),P(),v(2,ce,2,11,"div",3)),n&2){let e=f.$implicit,i=f.index,t=l();d(t.cn(t.cx("panel"),t.panelStyleClass)),h("pBind",t.ptm("panel"))("ngStyle",t.panelStyle),z(),h("ngTemplateOutlet",e),z(),h("ngIf",i!==t.panels.length-1)}}var me={root:({instance:n})=>["p-splitter p-component","p-splitter-"+n.layout],panel:({instance:n})=>["p-splitterpanel",{"p-splitterpanel-nested":n.nestedState()}],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},fe={root:({instance:n})=>[{display:"flex","flex-wrap":"nowrap"},n.layout==="vertical"?{"flex-direction":"column"}:""]},pe=(()=>{class n extends re{name="splitter";style=oe;classes=me;inlineStyles=fe;static \u0275fac=(()=>{let e;return function(t){return(e||(e=b(n)))(t||n)}})();static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})();var he=new N("SPLITTER_INSTANCE"),Se=(()=>{class n extends ae{componentName="Splitter";$pcSplitter=S(he,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=S(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;panelStyleClass;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(e){if(this._panelSizes=e,this.el&&this.el.nativeElement&&this.panels.length>0){let i=[...this.el.nativeElement.children].filter(s=>s.getAttribute("data-pc-section")==="panel"),t=[];this.panels.map((s,r)=>{let u=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;t[r]=u,i[r].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new w;onResizeStart=new w;templates;panelChildren;splitter=Y(B(()=>n));nestedState=q(()=>this.splitter());panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=S(pe);onAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(e=>{e.getType()==="panel"?this.panels.push(e.template):this.panels.push(e.template)}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(e=>{this.panels.push(e)})}onAfterViewInit(){if(I(this.platformId)&&this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let i=[...this.el.nativeElement.children].filter(s=>s.getAttribute("data-pc-section")==="panel"),t=[];this.panels.map((s,r)=>{let u=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;t[r]=u,i[r].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=t,this.prevSize=parseFloat(t[0]).toFixed(4)}}}resizeStart(e,i,t){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal()?ne(this.el.nativeElement):ie(this.el.nativeElement),t||(this.dragging=!0,this.startPos=this.horizontal()?e instanceof MouseEvent?e.pageX:e.changedTouches[0].pageX:e instanceof MouseEvent?e.pageY:e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,t?(this.prevPanelSize=this.horizontal()?c(this.prevPanelElement,!0):g(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?c(this.nextPanelElement,!0):g(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?c(this.prevPanelElement,!0):g(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?c(this.nextPanelElement,!0):g(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=i,D(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),D(this.el.nativeElement,"p-splitter-resizing"),this.el.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e,i,t){let s,r,a;t?this.horizontal()?(r=100*((this.prevPanelSize??0)+(i??0))/(this.size??1),a=100*((this.nextPanelSize??0)-(i??0))/(this.size??1)):(r=100*((this.prevPanelSize??0)-(i??0))/(this.size??1),a=100*((this.nextPanelSize??0)+(i??0))/(this.size??1)):(this.horizontal()?te(this.el.nativeElement)?s=((this.startPos??0)-e.pageX)*100/(this.size??1):s=(e.pageX-(this.startPos??0))*100/(this.size??1):s=(e.pageY-(this.startPos??0))*100/(this.size??1),r=this.prevPanelSize+s,a=this.nextPanelSize-s),this.prevSize=parseFloat(r).toFixed(4),this.validateResize(r,a)&&(this.prevPanelElement.style.flexBasis="calc("+r+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+a+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=r,this._panelSizes[this.prevPanelIndex+1]=a)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),k(this.gutterElement,"p-splitter-gutter-resizing"),k(this.el.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(e,i){this.resizeStart(e,i),this.bindMouseListeners()}onGutterTouchStart(e,i){e.cancelable&&(this.resizeStart(e,i),this.bindTouchListeners(),e.preventDefault())}onGutterTouchMove(e){this.onResize(e),e.preventDefault()}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}repeat(e,i,t){this.resizeStart(e,i,!0),this.onResize(e,t,!0)}setTimer(e,i,t){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,i,t)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(e){this.clearTimer(),this.resizeEnd(e)}onGutterKeyDown(e,i){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,i,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,i,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,i,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,i,this.step),e.preventDefault();break}default:break}}validateResize(e,i){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>e||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>i)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",e=>{this.onResize(e)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",e=>{this.resizeEnd(e),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",e=>{this.onResize(e.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",e=>{this.resizeEnd(e),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isStateful(){return this.stateKey!=null}getStorage(){if(I(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView?.localStorage;case"session":return this.document.defaultView?.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage()?.setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let i=this.getStorage()?.getItem(this.stateKey);return i?(this._panelSizes=JSON.parse(i),[...this.el.nativeElement.children].filter(s=>s.getAttribute("data-pc-section")==="panel").forEach((s,r)=>{s.style.flexBasis="calc("+this._panelSizes[r]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}get dataP(){return this.cn({[this.layout]:this.layout,nested:this.nestedState()!=null})}static \u0275fac=(()=>{let e;return function(t){return(e||(e=b(n)))(t||n)}})();static \u0275cmp=V({type:n,selectors:[["p-splitter"]],contentQueries:function(i,t,s){if(i&1&&(j(s,t.splitter,n,5),H(s,se,4)(s,ue,4)),i&2){Q();let r;C(r=M())&&(t.templates=r),C(r=M())&&(t.panelChildren=r)}},hostVars:4,hostBindings:function(i,t){i&2&&(_("data-p-gutter-resizing",!1)("data-p",t.dataP),d(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",L],step:[2,"step","step",L],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[X([pe,{provide:he,useExisting:n},{provide:le,useExisting:n}]),G([m]),O],decls:1,vars:1,consts:[["ngFor","",3,"ngForOf"],["tabindex","-1",3,"pBind","ngStyle"],[4,"ngTemplateOutlet"],["role","separator","tabindex","-1",3,"pBind","class","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend","pBind"],["tabindex","0",3,"keyup","keydown","pBind","ngStyle"]],template:function(i,t){i&1&&v(0,ge,3,6,"ng-template",0),i&2&&h("ngForOf",t.panels)},dependencies:[ee,J,W,Z,$,x,E,m],encapsulation:2,changeDetection:0})}return n})(),Ve=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=F({type:n});static \u0275inj=A({imports:[Se,x,E,x,E]})}return n})();export{Se as a,Ve as b};
