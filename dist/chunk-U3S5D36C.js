import{$ as b,$e as g,Ab as J,Da as h,Ea as y,Eb as D,Fa as T,Gb as W,Hb as $,Ib as Z,Jb as ee,M as V,Ma as H,Mb as te,N as A,Na as j,Nb as k,O as F,P as N,Pa as C,Qa as l,Qe as x,R as S,Re as B,Se as R,T as o,Ta as M,Te as ie,U as p,Ue as c,Va as L,Wa as I,Xa as Q,Ya as X,_e as ne,af as se,bb as d,ia as z,ka as P,lb as q,mf as re,nf as E,qa as G,qf as le,ra as O,sf as ae,tf as oe,ua as K,va as U,wa as v,wf as m,xa as _,xb as Y,xf as w}from"./chunk-6M5NAJLK.js";var pe=`
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
        border: 0 none;
    }
`;var de=["panel"];function ce(n,f){n&1&&H(0)}function ge(n,f){if(n&1){let e=j();y(0,"div",4),C("mousedown",function(i){o(e);let s=l().index,r=l();return p(r.onGutterMouseDown(i,s))})("touchstart",function(i){o(e);let s=l().index,r=l();return p(r.onGutterTouchStart(i,s))})("touchmove",function(i){o(e);let s=l(2);return p(s.onGutterTouchMove(i))})("touchend",function(i){o(e);let s=l(2);return p(s.onGutterTouchEnd(i))}),y(1,"div",5),C("keyup",function(i){o(e);let s=l(2);return p(s.onGutterKeyUp(i))})("keydown",function(i){o(e);let s=l().index,r=l();return p(r.onGutterKeyDown(i,s))}),T()()}if(n&2){let e=l(2);d(e.cx("gutter")),h("pBind",e.ptm("gutter")),_("data-p-gutter-resizing",!1),z(),d(e.cx("gutterHandle")),h("pBind",e.ptm("gutterHandle"))("ngStyle",e.gutterStyle()),_("aria-orientation",e.layout)("aria-valuenow",e.prevSize)}}function me(n,f){if(n&1&&(y(0,"div",1),v(1,ce,1,0,"ng-container",2),T(),v(2,ge,2,10,"div",3)),n&2){let e=f.$implicit,t=f.index,i=l();d(i.cn(i.cx("panel"),i.panelStyleClass)),h("pBind",i.ptm("panel"))("ngStyle",i.panelStyle),z(),h("ngTemplateOutlet",e),z(),h("ngIf",t!==i.panels.length-1)}}var fe={root:({instance:n})=>["p-splitter p-component","p-splitter-"+n.layout],panel:({instance:n})=>["p-splitterpanel",{"p-splitterpanel-nested":n.nestedState()}],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Se={root:({instance:n})=>[{display:"flex","flex-wrap":"nowrap"},n.layout==="vertical"?{"flex-direction":"column"}:""]},he=(()=>{class n extends le{name="splitter";style=pe;classes=fe;inlineStyles=Se;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var ue=new N("SPLITTER_INSTANCE"),ze=(()=>{class n extends oe{$pcSplitter=S(ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=S(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;panelStyleClass;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(e){if(this._panelSizes=e,this.el&&this.el.nativeElement&&this.panels.length>0){let t=[...this.el.nativeElement.children].filter(s=>x(s,"p-splitterpanel")),i=[];this.panels.map((s,r)=>{let u=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;i[r]=u,t[r].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new P;onResizeStart=new P;templates;panelChildren;splitter=J(V(()=>n));nestedState=Y(()=>this.splitter());panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=S(he);onAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(e=>{switch(e.getType()){case"panel":this.panels.push(e.template);break;default:this.panels.push(e.template);break}}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(e=>{this.panels.push(e)})}onAfterViewInit(){if(k(this.platformId)&&this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let t=[...this.el.nativeElement.children].filter(s=>x(s,"p-splitterpanel")),i=[];this.panels.map((s,r)=>{let u=(this.panelSizes.length-1>=r?this.panelSizes[r]:null)||100/this.panels.length;i[r]=u,t[r].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=i,this.prevSize=parseFloat(i[0]).toFixed(4)}}}resizeStart(e,t,i){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal()?se(this.el.nativeElement):ne(this.el.nativeElement),i||(this.dragging=!0,this.startPos=this.horizontal()?e instanceof MouseEvent?e.pageX:e.changedTouches[0].pageX:e instanceof MouseEvent?e.pageY:e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,i?(this.prevPanelSize=this.horizontal()?c(this.prevPanelElement,!0):g(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?c(this.nextPanelElement,!0):g(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?c(this.prevPanelElement,!0):g(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?c(this.nextPanelElement,!0):g(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=t,B(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),B(this.el.nativeElement,"p-splitter-resizing"),this.el.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e,t,i){let s,r,a;i?this.horizontal()?(r=100*((this.prevPanelSize??0)+(t??0))/(this.size??1),a=100*((this.nextPanelSize??0)-(t??0))/(this.size??1)):(r=100*((this.prevPanelSize??0)-(t??0))/(this.size??1),a=100*((this.nextPanelSize??0)+(t??0))/(this.size??1)):(this.horizontal()?ie(this.el.nativeElement)?s=((this.startPos??0)-e.pageX)*100/(this.size??1):s=(e.pageX-(this.startPos??0))*100/(this.size??1):s=(e.pageY-(this.startPos??0))*100/(this.size??1),r=this.prevPanelSize+s,a=this.nextPanelSize-s),this.prevSize=parseFloat(r).toFixed(4),this.validateResize(r,a)&&(this.prevPanelElement.style.flexBasis="calc("+r+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+a+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=r,this._panelSizes[this.prevPanelIndex+1]=a)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),R(this.gutterElement,"p-splitter-gutter-resizing"),R(this.el.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(e,t){this.resizeStart(e,t),this.bindMouseListeners()}onGutterTouchStart(e,t){e.cancelable&&(this.resizeStart(e,t),this.bindTouchListeners(),e.preventDefault())}onGutterTouchMove(e){this.onResize(e),e.preventDefault()}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}repeat(e,t,i){this.resizeStart(e,t,!0),this.onResize(e,i,!0)}setTimer(e,t,i){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,t,i)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(e){this.clearTimer(),this.resizeEnd(e)}onGutterKeyDown(e,t){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,t,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,t,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,t,this.step),e.preventDefault();break}default:break}}validateResize(e,t){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>e||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>t)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",e=>{this.onResize(e)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",e=>{this.resizeEnd(e),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",e=>{this.onResize(e.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",e=>{this.resizeEnd(e),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isStateful(){return this.stateKey!=null}getStorage(){if(k(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView?.localStorage;case"session":return this.document.defaultView?.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage()?.setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let t=this.getStorage()?.getItem(this.stateKey);return t?(this._panelSizes=JSON.parse(t),[...this.el.nativeElement.children].filter(s=>x(s,"p-splitterpanel")).forEach((s,r)=>{s.style.flexBasis="calc("+this._panelSizes[r]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275cmp=G({type:n,selectors:[["p-splitter"]],contentQueries:function(t,i,s){if(t&1&&(Q(s,i.splitter,n,5),M(s,re,4),M(s,de,4)),t&2){X();let r;L(r=I())&&(i.templates=r),L(r=I())&&(i.panelChildren=r)}},hostVars:3,hostBindings:function(t,i){t&2&&(_("data-p-gutter-resizing",!1),d(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",D],step:[2,"step","step",D],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[q([he,{provide:ue,useExisting:n},{provide:ae,useExisting:n}]),U([m]),K],decls:1,vars:1,consts:[["ngFor","",3,"ngForOf"],["tabindex","-1",3,"pBind","ngStyle"],[4,"ngTemplateOutlet"],["role","separator","tabindex","-1",3,"pBind","class","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend","pBind"],["tabindex","0",3,"keyup","keydown","pBind","ngStyle"]],template:function(t,i){t&1&&v(0,me,3,6,"ng-template",0),t&2&&h("ngForOf",i.panels)},dependencies:[te,W,$,ee,Z,E,w,m],encapsulation:2,changeDetection:0})}return n})(),Ne=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=F({imports:[ze,E,w,E,w]})}return n})();export{ze as a,Ne as b};
