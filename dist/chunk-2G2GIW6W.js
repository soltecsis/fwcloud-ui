import{$ as b,$b as pe,$f as O,Bb as U,Da as r,Ea as te,Ef as fe,Fa as ie,Ff as ge,Ga as w,Hb as se,If as me,Jb as le,Ka as R,La as $,M as v,Mb as P,N as X,O as Y,P as C,Pa as L,Qa as p,R as a,Ra as I,Sa as H,Ta as ae,V,Va as re,Wa as ce,We as y,Xe as z,Ye as T,_ as Z,_a as de,ac as Q,bb as u,cc as q,dc as G,ec as W,ia as g,jf as ue,ka as j,lb as N,nf as M,ob as _,qa as D,qf as he,ra as ee,sf as F,tf as B,ua as E,va as x,wa as A,wf as c,xa as h,xb as s,xf as m,ya as ne,za as oe,zb as k}from"./chunk-FPZA7CK2.js";var ve=`
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

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var S=["*"],De=["toggleicon"],Ee=n=>({active:n});function xe(n,l){}function we(n,l){n&1&&A(0,xe,0,0,"ng-template")}function Ie(n,l){if(n&1&&A(0,we,1,0,null,0),n&2){let e=p();r("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",_(2,Ee,e.active()))}}function He(n,l){if(n&1&&w(0,"span",4),n&2){let e=p(3);u(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon)),r("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function Ne(n,l){if(n&1&&(V(),w(0,"svg",5)),n&2){let e=p(3);u(e.cx("toggleicon")),r("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function Pe(n,l){if(n&1&&(R(0),A(1,He,1,4,"span",2)(2,Ne,1,4,"svg",3),$()),n&2){let e=p(2);g(),r("ngIf",e.pcAccordion.collapseIcon),g(),r("ngIf",!e.pcAccordion.collapseIcon)}}function Te(n,l){if(n&1&&w(0,"span",4),n&2){let e=p(3);u(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon)),r("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function Fe(n,l){if(n&1&&(V(),w(0,"svg",7)),n&2){let e=p(3);r("pBind",e.ptm("toggleicon")),h("aria-hidden",!0)}}function Be(n,l){if(n&1&&(R(0),A(1,Te,1,4,"span",2)(2,Fe,1,2,"svg",6),$()),n&2){let e=p(2);g(),r("ngIf",e.pcAccordion.expandIcon),g(),r("ngIf",!e.pcAccordion.expandIcon)}}function ke(n,l){if(n&1&&A(0,Pe,3,2,"ng-container",1)(1,Be,3,2,"ng-container",1),n&2){let e=p();r("ngIf",e.active()),g(),r("ngIf",!e.active())}}var be=n=>({transitionParams:n}),Me=n=>({value:"visible",params:n}),Oe=n=>({value:"hidden",params:n}),Se=`
    ${ve}

    /*For PrimeNG*/
    .p-accordionpanel:not(.p-accordionpanel-active) > .p-accordioncontent,
    .p-accordioncontent-content.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader-toggle-icon.icon-start {
        order: -1;
    }

    .p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
        justify-content: flex-start;
        gap: dt('accordion.header.padding');
    }

    .p-accordioncontent.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader.p-ripple {
        overflow: hidden;
        position: relative;
    }
`,Ke={root:"p-accordion p-component",panel:({instance:n})=>["p-accordionpanel",{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",content:"p-accordioncontent-content"},f=(()=>{class n extends he{name="accordion";style=Se;classes=Ke;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=X({token:n,factory:n.\u0275fac})}return n})();var Ae=new C("ACCORDION_PANEL_INSTANCE"),_e=new C("ACCORDION_HEADER_INSTANCE"),ye=new C("ACCORDION_CONTENT_INSTANCE"),Ce=new C("ACCORDION_INSTANCE"),J=(()=>{class n extends B{$pcAccordionPanel=a(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(v(()=>K));value=U(void 0);disabled=k(!1,{transform:e=>O(e)});active=s(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,t){return Array.isArray(e)?e.includes(t):e===t}_componentStyle=a(f);static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(t,o){t&2&&(h("data-p-disabled",o.disabled())("data-p-active",o.active()),u(o.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[N([f,{provide:Ae,useExisting:n},{provide:F,useExisting:n}]),x([c]),E],ngContentSelectors:S,decls:1,vars:0,template:function(t,o){t&1&&(I(),H(0))},dependencies:[P,m],encapsulation:2,changeDetection:0})}return n})(),Ve=(()=>{class n extends B{$pcAccordionHeader=a(_e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(v(()=>K));pcAccordionPanel=a(v(()=>J));id=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=s(()=>this.pcAccordionPanel.active());disabled=s(()=>this.pcAccordionPanel.disabled());ariaControls=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let t=this.active();this.changeActiveValue();let o=this.active(),i=this.pcAccordionPanel.value();!t&&o?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):t&&!o&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=a(f);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return y(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,t=!1){let o=t?e:e.nextElementSibling;return o?T(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null}findPrevPanel(e,t=!1){let o=t?e:e.previousElementSibling;return o?T(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,t){z(t)}arrowDownKey(e){let t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEndKey(e){let t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(t,o,i){if(t&1&&ae(i,De,5),t&2){let d;re(d=ce())&&(o.toggleicon=d.first)}},hostVars:12,hostBindings:function(t,o){t&1&&L("click",function(d){return o.onClick(d)})("focus",function(d){return o.onFocus(d)})("keydown",function(d){return o.onKeydown(d)}),t&2&&(h("id",o.id())("aria-expanded",o.active())("aria-controls",o.ariaControls())("aria-disabled",o.disabled())("role","button")("tabindex",o.disabled()?"-1":"0")("data-p-active",o.active())("data-p-disabled",o.disabled()),u(o.cx("header")),de("user-select","none"))},features:[N([f,{provide:_e,useExisting:n},{provide:F,useExisting:n}]),x([me,c]),E],ngContentSelectors:S,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"]],template:function(t,o){t&1&&(I(),H(0),ne(1,Ie,1,4)(2,ke,2,2)),t&2&&(g(),oe(o.toggleicon?1:2))},dependencies:[P,se,le,fe,ge,m,c],encapsulation:2,changeDetection:0})}return n})(),je=(()=>{class n extends B{$pcAccordionContent=a(ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=a(v(()=>K));pcAccordionPanel=a(v(()=>J));active=s(()=>this.pcAccordionPanel.active());ariaLabelledby=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=a(f);ptParams=s(()=>({context:this.active()}));static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(t,o){t&2&&(h("id",o.id())("role","region")("data-p-active",o.active())("aria-labelledby",o.ariaLabelledby()),u(o.cx("contentContainer")))},features:[N([f,{provide:ye,useExisting:n},{provide:F,useExisting:n}]),x([c]),E],ngContentSelectors:S,decls:2,vars:12,consts:[[3,"pBind"]],template:function(t,o){t&1&&(I(),te(0,"div",0),H(1),ie()),t&2&&(u(o.cx("content")),r("@content",o.active()?_(6,Me,_(4,be,o.pcAccordion.transitionOptions)):_(10,Oe,_(8,be,o.pcAccordion.transitionOptions)))("pBind",o.ptm("content",o.ptParams())))},dependencies:[P,m,c],encapsulation:2,data:{animation:[pe("content",[G("hidden",q({height:"0",paddingBlockStart:"0",paddingBlockEnd:"0",borderBlockStartWidth:"0",borderBlockEndWidth:"0",visibility:"hidden"})),G("visible",q({height:"*"})),W("visible <=> hidden",[Q("{{transitionParams}}")]),W("void => *",Q(0))])]},changeDetection:0})}return n})(),K=(()=>{class n extends B{$pcAccordion=a(Ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(c,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}value=U(void 0);multiple=k(!1,{transform:e=>O(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=k(!1,{transform:e=>O(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";onClose=new j;onOpen=new j;id=Z(ue("pn_id_"));_componentStyle=a(f);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let t=this.findNextHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let t=this.findPrevHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let t=this.findFirstHeaderAction();this.changeFocusedTab(t),e.preventDefault()}changeFocusedTab(e){e&&z(e)}findNextHeaderAction(e,t=!1){let o=t?e:e.nextElementSibling,i=y(o,'[data-pc-section="accordionheader"]');return i?T(i,"data-p-disabled")?this.findNextHeaderAction(i.parentElement):y(i.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,t=!1){let o=t?e:e.previousElementSibling,i=y(o,'[data-pc-section="accordionheader"]');return i?T(i,"data-p-disabled")?this.findPrevHeaderAction(i.parentElement):y(i.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let t=this.findLastHeaderAction();this.changeFocusedTab(t),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let t=this.value();if(this.multiple()){let o=Array.isArray(t)?[...t]:[],i=o.indexOf(e);i!==-1?o.splice(i,1):o.push(e),this.value.set(o)}else t===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=D({type:n,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(t,o){t&1&&L("keydown",function(d){return o.onKeydown(d)}),t&2&&u(o.cn(o.cx("root"),o.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions"},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[N([f,{provide:Ce,useExisting:n},{provide:F,useExisting:n}]),x([c]),E],ngContentSelectors:S,decls:1,vars:0,template:function(t,o){t&1&&(I(),H(0))},dependencies:[P,M,m],encapsulation:2,changeDetection:0})}return n})(),hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ee({type:n});static \u0275inj=Y({imports:[K,M,J,Ve,je,m,M,m]})}return n})();export{hn as a};
