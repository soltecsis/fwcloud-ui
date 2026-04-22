import{Aa as X,Af as ue,Ba as Y,Bb as P,Db as U,Ef as he,Fa as r,Ga as Z,Gf as fe,Ha as ee,Ia as x,Jb as re,Lb as ce,Ma as R,N as v,Na as $,O as G,Ob as M,P as W,Q as C,Ra as L,S as a,Sa as u,Ta as w,Ua as I,Va as ne,W as V,Wd as y,Wf as k,Xa as oe,Xd as Q,Ya as te,Yd as T,_ as j,ab as ie,ba as z,da as b,db as s,if as se,je as de,kf as O,lf as F,ma as p,nb as H,ne as B,of as d,pf as m,qb as ae,sa as D,ta as J,wa as E,wf as le,xa as N,xf as pe,ya as A,za as f,zb as c}from"./chunk-VFXI6WXS.js";import{a as _}from"./chunk-ATDPNAVO.js";var ge=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var S=["*"],ye=["toggleicon"],_e=n=>({active:n});function Ce(n,l){}function De(n,l){n&1&&A(0,Ce,0,0,"ng-template")}function Ee(n,l){if(n&1&&A(0,De,1,0,null,0),n&2){let e=u();r("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",ae(2,_e,e.active()))}}function Ne(n,l){if(n&1&&x(0,"span",4),n&2){let e=u(3);s(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon)),r("pBind",e.ptm("toggleicon")),f("aria-hidden",!0)}}function xe(n,l){if(n&1&&(V(),x(0,"svg",5)),n&2){let e=u(3);s(e.cx("toggleicon")),r("pBind",e.ptm("toggleicon")),f("aria-hidden",!0)}}function we(n,l){if(n&1&&(R(0),A(1,Ne,1,4,"span",2)(2,xe,1,4,"svg",3),$()),n&2){let e=u(2);p(),r("ngIf",e.pcAccordion.collapseIcon),p(),r("ngIf",!e.pcAccordion.collapseIcon)}}function Ie(n,l){if(n&1&&x(0,"span",4),n&2){let e=u(3);s(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon)),r("pBind",e.ptm("toggleicon")),f("aria-hidden",!0)}}function He(n,l){if(n&1&&(V(),x(0,"svg",7)),n&2){let e=u(3);r("pBind",e.ptm("toggleicon")),f("aria-hidden",!0)}}function Pe(n,l){if(n&1&&(R(0),A(1,Ie,1,4,"span",2)(2,He,1,2,"svg",6),$()),n&2){let e=u(2);p(),r("ngIf",e.pcAccordion.expandIcon),p(),r("ngIf",!e.pcAccordion.expandIcon)}}function Me(n,l){if(n&1&&A(0,we,3,2,"ng-container",1)(1,Pe,3,2,"ng-container",1),n&2){let e=u();r("ngIf",e.active()),p(),r("ngIf",!e.active())}}var Te=`
${ge}

/* For PrimeNG */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,Oe={root:"p-accordion p-component",panel:({instance:n})=>["p-accordionpanel",{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},g=(()=>{class n extends se{name="accordion";style=Te;classes=Oe;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=G({token:n,factory:n.\u0275fac})}return n})();var me=new C("ACCORDION_PANEL_INSTANCE"),ve=new C("ACCORDION_HEADER_INSTANCE"),be=new C("ACCORDION_CONTENT_INSTANCE"),Ae=new C("ACCORDION_INSTANCE"),q=(()=>{class n extends F{$pcAccordionPanel=a(me,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(d,{self:!0});componentName="AccordionPanel";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(v(()=>K));value=U(void 0);disabled=P(!1,{transform:e=>k(e)});active=c(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,t){return Array.isArray(e)?e.includes(t):e===t}_componentStyle=a(g);static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(t,o){t&2&&(f("data-p-disabled",o.disabled())("data-p-active",o.active()),s(o.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[H([g,{provide:me,useExisting:n},{provide:O,useExisting:n}]),E([d]),N],ngContentSelectors:S,decls:1,vars:0,template:function(t,o){t&1&&(w(),I(0))},dependencies:[M,m],encapsulation:2,changeDetection:0})}return n})(),Fe=(()=>{class n extends F{$pcAccordionHeader=a(ve,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(d,{self:!0});componentName="AccordionHeader";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(v(()=>K));pcAccordionPanel=a(v(()=>q));id=c(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=c(()=>this.pcAccordionPanel.active());disabled=c(()=>this.pcAccordionPanel.disabled());ariaControls=c(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let t=this.active();this.changeActiveValue();let o=this.active(),i=this.pcAccordionPanel.value();!t&&o?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):t&&!o&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=a(g);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return y(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,t=!1){let o=t?e:e.nextElementSibling;return o?T(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null}findPrevPanel(e,t=!1){let o=t?e:e.previousElementSibling;return o?T(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,t){Q(t)}arrowDownKey(e){let t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEndKey(e){let t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(t,o,i){if(t&1&&ne(i,ye,5),t&2){let h;oe(h=te())&&(o.toggleicon=h.first)}},hostVars:13,hostBindings:function(t,o){t&1&&L("click",function(h){return o.onClick(h)})("focus",function(){return o.onFocus()})("keydown",function(h){return o.onKeydown(h)}),t&2&&(f("id",o.id())("aria-expanded",o.active())("aria-controls",o.ariaControls())("aria-disabled",o.disabled())("role","button")("tabindex",o.disabled()?"-1":"0")("data-p-active",o.active())("data-p-disabled",o.disabled())("data-p",o.dataP),s(o.cx("header")),ie("user-select","none"))},features:[H([g,{provide:ve,useExisting:n},{provide:O,useExisting:n}]),E([ue,d]),N],ngContentSelectors:S,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"]],template:function(t,o){t&1&&(w(),I(0),X(1,Ee,1,4)(2,Me,2,2)),t&2&&(p(),Y(o.toggleicon?1:2))},dependencies:[M,re,ce,le,pe,m,d],encapsulation:2,changeDetection:0})}return n})(),Be=(()=>{class n extends F{$pcAccordionContent=a(be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(d,{self:!0});componentName="AccordionContent";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(v(()=>K));pcAccordionPanel=a(v(()=>q));active=c(()=>this.pcAccordionPanel.active());ariaLabelledby=c(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=c(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=a(g);ptParams=c(()=>({context:this.active()}));computedMotionOptions=c(()=>_(_({},this.ptm("motion",this.ptParams())),this.pcAccordion.computedMotionOptions()));static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(t,o){t&2&&(f("id",o.id())("role","region")("data-p-active",o.active())("aria-labelledby",o.ariaLabelledby()),s(o.cx("contentContainer")))},features:[H([g,{provide:be,useExisting:n},{provide:O,useExisting:n}]),E([d]),N],ngContentSelectors:S,decls:4,vars:10,consts:[["name","p-collapsible","hideStrategy","visibility",3,"visible","mountOnEnter","unmountOnLeave","options"],[3,"pBind"]],template:function(t,o){t&1&&(w(),Z(0,"p-motion",0)(1,"div",1)(2,"div",1),I(3),ee()()()),t&2&&(r("visible",o.active())("mountOnEnter",!1)("unmountOnLeave",!1)("options",o.computedMotionOptions()),p(),s(o.cx("contentWrapper")),r("pBind",o.ptm("contentWrapper",o.ptParams())),p(),s(o.cx("content")),r("pBind",o.ptm("content",o.ptParams())))},dependencies:[M,m,d,fe,he],encapsulation:2,changeDetection:0})}return n})(),K=(()=>{class n extends F{componentName="Accordion";$pcAccordion=a(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}value=U(void 0);multiple=P(!1,{transform:e=>k(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=P(!1,{transform:e=>k(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";motionOptions=P(void 0);computedMotionOptions=c(()=>_(_({},this.ptm("motion")),this.motionOptions()));onClose=new j;onOpen=new j;id=z(de("pn_id_"));_componentStyle=a(g);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let t=this.findNextHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let t=this.findPrevHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let t=this.findFirstHeaderAction();this.changeFocusedTab(t),e.preventDefault()}changeFocusedTab(e){e&&Q(e)}findNextHeaderAction(e,t=!1){let o=t?e:e.nextElementSibling,i=y(o,'[data-pc-section="accordionheader"]');return i?T(i,"data-p-disabled")?this.findNextHeaderAction(i.parentElement):y(i.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,t=!1){let o=t?e:e.previousElementSibling,i=y(o,'[data-pc-section="accordionheader"]');return i?T(i,"data-p-disabled")?this.findPrevHeaderAction(i.parentElement):y(i.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let t=this.findLastHeaderAction();this.changeFocusedTab(t),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let t=this.value();if(this.multiple()){let o=Array.isArray(t)?[...t]:[],i=o.indexOf(e);i!==-1?o.splice(i,1):o.push(e),this.value.set(o)}else t===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(t,o){t&1&&L("keydown",function(h){return o.onKeydown(h)}),t&2&&s(o.cn(o.cx("root"),o.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[H([g,{provide:Ae,useExisting:n},{provide:O,useExisting:n}]),E([d]),N],ngContentSelectors:S,decls:1,vars:0,template:function(t,o){t&1&&(w(),I(0))},dependencies:[M,B,m],encapsulation:2,changeDetection:0})}return n})(),sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=J({type:n});static \u0275inj=W({imports:[K,B,q,Fe,Be,m,B,m]})}return n})();export{sn as a};
