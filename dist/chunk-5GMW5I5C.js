import{a as Ct}from"./chunk-MBAHBDZM.js";import{a as ut,b as ft}from"./chunk-MFKPDLSS.js";import{$a as E,$f as st,Aa as ve,Ac as Ue,Ad as k,Ba as N,Ca as ye,Cb as Fe,Cd as He,Da as Se,Dd as z,Ea as xe,Ed as Je,Fa as l,Ga as s,Ge as Ye,Ha as V,Hb as Ie,He as qe,I as Q,Jc as me,Je as ne,La as T,Le as Ze,M as ge,Ma as y,Me as Xe,Na as c,Nc as w,O as Y,Qa as I,Re as Ke,S as W,T as q,Ta as O,Ua as P,Va as A,Ve as oe,Vg as ae,Wa as de,X as C,Xa as d,Xg as ct,Y as _,Ya as g,Yg as dt,Za as L,_a as Ne,_c as ke,_g as mt,ab as b,ag as pt,bb as M,cb as Ve,cc as Oe,dc as X,df as $e,eb as Te,ef as et,fb as D,fc as U,gb as R,gc as K,gd as B,hc as Pe,hd as ze,ic as Ae,ja as we,jd as ue,jf as tt,kc as F,la as r,lb as u,lc as Le,lf as it,ma as S,mb as f,mc as De,nc as Re,ob as Ee,oc as Be,qb as Z,qd as Ge,qf as nt,rc as je,sc as $,ta as x,tc as ee,tf as ot,uc as te,va as m,vb as be,wa as ce,wf as at,xc as ie,xe as Qe,ya as H,yb as Me,yf as rt,zc as We,ze as fe,zf as lt}from"./chunk-O5OFU43D.js";import"./chunk-GFT3X7VS.js";import"./chunk-GAL4ENT6.js";var Et=["inputControl"],bt=["inputOrg"];function Mt(n,v){if(n&1){let e=T();l(0,"div",7)(1,"div",8)(2,"span",9)(3,"input",10,0),y("input",function(t){C(e);let o=c();return _(o.handleInput(t.target.value))}),s(),l(5,"label",11),d(6),s()()()()}if(n&2){let e=c();r(3),m("maxLength",e.maxLength)("value",e.value)("disabled",e.isDisabled),r(3),g(e.label)}}function Ft(n,v){if(n&1&&(l(0,"option",18),d(1),s()),n&2){let e=v.$implicit;m("ngValue",e.alpha2),r(),Ne("",e.alpha2," - ",e.name,"")}}function It(n,v){if(n&1&&(l(0,"strong"),d(1),s()),n&2){let e=c(2);r(),g(e.value)}}function Ot(n,v){n&1&&(l(0,"span",31),d(1),u(2,"translate"),s()),n&2&&(r(),g(f(2,1,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.NO_VALUE")))}function Pt(n,v){if(n&1){let e=T();l(0,"div",12)(1,"div",8)(2,"span",9)(3,"input",13,1),M("ngModelChange",function(t){C(e);let o=c();return b(o.clientCertName.organization,t)||(o.clientCertName.organization=t),_(t)}),y("input",function(){C(e);let t=c();return _(t.handleClientCertNameInput())}),s(),l(5,"label",14),d(6),u(7,"translate"),s()()()(),l(8,"div",15)(9,"div",8)(10,"span",16),d(11,"-"),s(),l(12,"span",9)(13,"select",17),M("ngModelChange",function(t){C(e);let o=c();return b(o.clientCertName.country,t)||(o.clientCertName.country=t),_(t)}),y("change",function(){C(e);let t=c();return _(t.handleClientCertNameInput())}),l(14,"option",18),d(15),u(16,"translate"),s(),Se(17,Ft,2,3,"option",18,ye),s(),l(19,"label",19),d(20),u(21,"translate"),s()()()(),l(22,"div",15)(23,"div",8)(24,"span",16),d(25,"-"),s(),l(26,"span",9)(27,"input",20,2),M("ngModelChange",function(t){C(e);let o=c();return b(o.clientCertName.department,t)||(o.clientCertName.department=t),_(t)}),y("input",function(){C(e);let t=c();return _(t.handleClientCertNameInput())}),s(),l(29,"label",21),d(30),u(31,"translate"),s()()()(),l(32,"div",15)(33,"div",8)(34,"span",16),d(35,"-"),s(),l(36,"span",9)(37,"input",22,3),M("ngModelChange",function(t){C(e);let o=c();return b(o.clientCertName.username,t)||(o.clientCertName.username=t),_(t)}),y("input",function(){C(e);let t=c();return _(t.handleClientCertNameInput())}),s(),l(39,"label",23),d(40),u(41,"translate"),s()()()(),l(42,"div",15)(43,"div",8)(44,"span",16),d(45,"."),s(),l(46,"span",9)(47,"input",24,4),M("ngModelChange",function(t){C(e);let o=c();return b(o.clientCertName.surname,t)||(o.clientCertName.surname=t),_(t)}),y("input",function(){C(e);let t=c();return _(t.handleClientCertNameInput())}),s(),l(49,"label",25),d(50),u(51,"translate"),s()()()(),l(52,"div",26)(53,"div",8)(54,"span",16),d(55,"-"),s(),l(56,"span",9)(57,"input",27,5),M("ngModelChange",function(t){C(e);let o=c();return b(o.clientCertName.counter,t)||(o.clientCertName.counter=t),_(t)}),y("input",function(){C(e);let t=c();return _(t.handleClientCertNameInput())}),s(),l(59,"label",28),d(60,"#"),s()()()(),l(61,"div",7)(62,"span",29),d(63),u(64,"translate"),s(),V(65,"span",30),x(66,It,2,1,"strong")(67,Ot,3,3,"span",31),s()}if(n&2){let e=c();r(3),E("ngModel",e.clientCertName.organization),m("disabled",e.disableOrganizationEdit||e.isDisabled),r(3),g(f(7,22,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.ORG")),r(7),m("disabled",e.disableCountryEdit||e.isDisabled),E("ngModel",e.clientCertName.country),r(),m("ngValue",""),r(),g(f(16,24,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.SEL_COUNTRY")),r(2),xe(e.countries),r(3),g(f(21,26,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.COUNTRY")),r(7),m("disabled",e.disableDepartmentEdit||e.isDisabled),E("ngModel",e.clientCertName.department),r(3),g(f(31,28,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.DEP")),r(7),m("disabled",e.disableUsernameEdit||e.isDisabled),E("ngModel",e.clientCertName.username),r(3),g(f(41,30,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.USERNAME")),r(7),m("disabled",e.disableSurnameEdit||e.isDisabled),E("ngModel",e.clientCertName.surname),r(3),g(f(51,32,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.SURNAME")),r(7),m("disabled",e.isDisabled),E("ngModel",e.clientCertName.counter),r(6),L("",f(64,34,"VPN.PANEL.FIELDS.CN"),":"),r(3),N(e.value?66:-1),r(),N(e.value?-1:67)}}var At=/^(\w+)(-\w{2})?(-\w{3,})?(-\w{3,})?(.\w{3,})?(-\d{2})?$/;var _t=(()=>{class n{set showClientCertWizard(e){this._showClientCertWizard=e,e?(this.parseValueToClientCertName(),setTimeout(()=>{this.inputOrg&&this.inputOrg.nativeElement.focus()},10)):(this.cd.detectChanges(),setTimeout(()=>{this.inputControl&&this.inputControl.nativeElement.focus()},10))}constructor(e,i){this.fwcUserService=e,this.cd=i,this.label="",this.maxLength=64,this.prefixValue="",this.onChange=t=>{},this.onTouch=()=>{},this.resetProperties()}parseValueToClientCertName(){let e="",i="",t="",o="",a="",h="00";if(this.prefixValue){let p=this.prefixValue.split("-");if(this.disableOrganizationEdit=!!p[0],this.disableCountryEdit=!!p[1],this.disableDepartmentEdit=!!p[2],p[3]){let[G,se]=p[3].split(".");this.disableUsernameEdit=!!G,this.disableSurnameEdit=!!se}}if(this.value){let p=this.value.split("-");p[0]&&(e=p[0]),p[1]&&(i=p[1].toUpperCase()),p[2]&&(t=p[2]),p[3]&&([o,a]=p[3].split(".")),p[4]&&(h=p[4])}this.clientCertName={organization:e,country:i,department:t,username:o,surname:a,counter:h},this.cd.markForCheck()}parseValueToClientCertNameWithRegexp(){let e="",i="",t="",o="",a="",h="00";if(this.value){let p=At.exec(this.value);p&&(e=p[1],this.disableOrganizationEdit=!!this.prefixValue,p[2]&&(i=p[2].slice(1).toUpperCase(),this.disableCountryEdit=!!this.prefixValue),p[3]&&(t=p[3].slice(1),this.disableDepartmentEdit=!!this.prefixValue),p[4]&&(o=p[4].slice(1)),p[5]&&(a=p[5].slice(1)),p[6]&&(h=p[6].slice(1)))}this.clientCertName={organization:e,country:i,department:t,username:o,surname:a,counter:h},this.cd.markForCheck()}parseClientCertNameToValue(){let e="";this.clientCertName&&(e=`${this.clientCertName.organization}-${this.clientCertName.country}-${this.clientCertName.department}-${this.clientCertName.username}.${this.clientCertName.surname}-${this.clientCertName.counter}`),this.handleInput(e)}handleInput(e){this.prefixValue&&e.indexOf(this.prefixValue)!==0?(this.value=this.prefixValue,this.inputControl&&(this.inputControl.nativeElement.value=this.value)):this.value=e,this.onTouch(),this.onChange(this.value),this.cd.markForCheck()}handleClientCertNameInput(){this.parseClientCertNameToValue()}isValidClientCertName(){let e=!1;if(!this.value)e=!0;else{let[i,t]=this.value.split("-");t?Array.isArray(this.countries)&&this.countries.find(a=>a.alpha2.toUpperCase()===t.toUpperCase())&&(e=!0):e=!0}return e}focusMainInput(){this.inputOrg?this.inputOrg.nativeElement.focus():this.inputControl&&this.inputControl.nativeElement.focus()}resetProperties(){this.prefixValue="",this.disableOrganizationEdit=this.disableCountryEdit=this.disableDepartmentEdit=this.disableUsernameEdit=this.disableSurnameEdit=!1,this.clientCertName={organization:"",country:"",department:"",username:"",surname:"",counter:"00"}}writeValue(e){e?(this.prefixValue=this.value=e,this._showClientCertWizard&&this.parseValueToClientCertName()):this.prefixValue=this.value="",this.cd.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}setDisabledState(e){this.isDisabled=e}static{this.\u0275fac=function(i){return new(i||n)(S(k),S(Z))}}static{this.\u0275cmp=W({type:n,selectors:[["sts-fwc-vpn-config-name-control"]],viewQuery:function(i,t){if(i&1&&(O(Et,5),O(bt,5)),i&2){let o;P(o=A())&&(t.inputControl=o.first),P(o=A())&&(t.inputOrg=o.first)}},inputs:{label:"label",maxLength:"maxLength",showClientCertWizard:"showClientCertWizard",countries:"countries"},features:[Ve([{provide:Oe,useExisting:ge(()=>n),multi:!0}])],decls:3,vars:1,consts:[["inputControl",""],["inputOrg",""],["inputDpt",""],["inputName",""],["inputSurname",""],["inputCnt",""],[1,"grid","grid","grid-nogutter"],[1,"col-12","grid","grid-nogutter"],[1,"p-inputgroup"],[1,"p-float-label"],["pInputText","","type","text","name","inputControl","ondrop","return false",3,"input","maxLength","value","disabled"],["for","inputControl",2,"left","0px"],[1,"col-3","grid","grid-nogutter"],["pInputText","","type","text","name","inputOrg","ondrop","return false",3,"ngModelChange","input","ngModel","disabled"],["for","inputOrg",2,"left","0px"],[1,"col-2","grid","grid-nogutter"],[1,"spanFieldsSep"],["name","country",1,"fwcSelect",3,"ngModelChange","change","disabled","ngModel"],[3,"ngValue"],["for","country",2,"left","0px"],["pInputText","","type","text","name","inputDpt","ondrop","return false",3,"ngModelChange","input","disabled","ngModel"],["for","inputDpt",2,"left","0px"],["pInputText","","type","text","name","inputName","ondrop","return false",3,"ngModelChange","input","disabled","ngModel"],["for","inputName",2,"left","0px"],["pInputText","","type","text","name","inputSurname","ondrop","return false",3,"ngModelChange","input","disabled","ngModel"],["for","inputSurname",2,"left","0px"],[1,"col-1","grid","grid-nogutter"],["pInputText","","type","text","name","inputCnt","maxlength","2","ondrop","return false",3,"ngModelChange","input","disabled","ngModel"],["for","inputCnt",2,"color","var(--fwcBlue)","left","0px"],[1,"fwcBlue"],[1,"fwcSepShort"],[1,"fwcPaleDark"]],template:function(i,t){i&1&&(l(0,"div",6),x(1,Mt,7,4,"div",7)(2,Pt,68,36),s()),i&2&&(r(),N(t._showClientCertWizard?2:1))},dependencies:[ee,te,X,$,K,ie,Le,oe,z],styles:[`span.spanFieldsSep{font-weight:700;line-height:2.45rem;padding:0 .3rem}.p-float-label>label{top:40%}.p-float-label input.p-filled~label,.p-float-label input:focus~label{top:0;margin-top:-1rem}
`],encapsulation:2})}}return n})();var Dt=["fwcConfigNameControl"],Rt=()=>({width:"80vw"}),_e=n=>({visibility:n}),Bt=()=>({width:"1.7rem",height:"1.7rem"});function jt(n,v){if(n&1&&(l(0,"div",27)(1,"h6",28),V(2,"i"),u(3,"fwcIcon"),d(4),s()()),n&2){let e=c(2);r(2),ve("",Ee(3,4,e.object.obj_type,null,"fwcOrange")," fwcOrange"),r(2),L(" ",e.headerTitle," ")}}function Wt(n,v){if(n&1&&(l(0,"div",11)(1,"div",13)(2,"span",14)(3,"select",29)(4,"option",19),d(5),u(6,"translate"),s(),l(7,"option",19),d(8),u(9,"translate"),s()(),l(10,"label",30),d(11),u(12,"translate"),s()()()()),n&2){let e=c(2);r(4),m("ngValue",e.CACertTypes.client),r(),g(f(6,5,"VPN.PANEL.CERT_TYPE_OPTS.0")),r(2),m("ngValue",e.CACertTypes.server),r(),g(f(9,7,"VPN.PANEL.CERT_TYPE_OPTS.1")),r(3),g(f(12,9,"VPN.PANEL.FIELDS.TYPE"))}}function Ut(n,v){if(n&1){let e=T();l(0,"div",22)(1,"div",13)(2,"div",14)(3,"button",31),u(4,"translate"),u(5,"translate"),y("click",function(){C(e);let t=c(2);return _(t.handleToggleClientConfigName())}),s()()()()}if(n&2){c();let e=de(30),i=c();r(3),I("label",f(4,5,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.BUTTON")),I("pTooltip",f(5,7,"VPN.PANEL.CLIENT_CONFIG_NAME_WIZARD.TOOLTIP")),m("disabled",!e.isValidClientCertName()||i.loadingData)("ngClass",i.showClientCertWizard?"p-button-primary ":"p-button-secondary")("icon",i.showClientCertWizard?"fa fa-magic":"fa fa-pencil")}}function kt(n,v){if(n&1){let e=T();l(0,"button",36),u(1,"translate"),y("click",function(){C(e);let t=c(3);return _(t.onCancel())}),s()}if(n&2){let e=c(3);I("label",f(1,2,"GLOBALS.MSG_BUTTONS.CANCEL")),m("disabled",!e.object||e.loadingData)}}function zt(n,v){if(n&1){let e=T();l(0,"button",37),u(1,"translate"),y("click",function(){C(e);let t=c(3);return _(t.onSave())}),s()}if(n&2){let e=c(3);I("label",f(1,2,"GLOBALS.MSG_BUTTONS.SAVE")),m("disabled",!e.formModel.valid||e.formModel.pristine||e.loadingData)}}function Gt(n,v){if(n&1){let e=T();l(0,"button",38),u(1,"translate"),y("click",function(){C(e);let t=c(3);return _(t.onCancel())}),s()}n&2&&I("label",f(1,1,"GLOBALS.MSG_BUTTONS.CLOSE"))}function Ht(n,v){if(n&1&&(l(0,"div",32),V(1,"p-progressSpinner"),s(),x(2,kt,2,4,"button",33)(3,zt,2,4,"button",34)(4,Gt,2,3,"button",35)),n&2){let e=c(2);m("ngStyle",R(6,_e,e.loadingData?"visible":"hidden")),r(),H(D(8,Bt)),r(),N(e.formModel.pristine?-1:2),r(),N(e.formModel.pristine?-1:3),r(),N(e.formModel.pristine?4:-1)}}function Jt(n,v){if(n&1){let e=T();l(0,"p-dialog",3,0),M("visibleChange",function(t){C(e);let o=c();return b(o.displayDialog,t)||(o.displayDialog=t),_(t)}),y("onShow",function(){C(e);let t=c();return _(t.onDialogShow())})("onHide",function(){C(e);let t=c();return _(t.onDialogHide())}),x(2,jt,5,8,"ng-template",4),l(3,"p-tabView",5)(4,"p-tabPanel",6),u(5,"translate"),l(6,"div",7)(7,"form",8)(8,"fieldset",9),y("keyup.enter",function(t){C(e);let o=c();return _(o.checkForm(t))})("keyup.esc",function(){C(e);let t=c();return _(t.onCancel())}),l(9,"div",10),x(10,Wt,13,11,"div",11),l(11,"div",12)(12,"div",13)(13,"span",14),V(14,"input",15),l(15,"label",16),d(16),u(17,"translate"),s()(),l(18,"select",17),y("change",function(){C(e);let t=c();return _(t.revalidateForm())}),l(19,"option",18),d(20),u(21,"translate"),s(),l(22,"option",19),d(23),u(24,"translate"),s()()(),l(25,"p",20),d(26),u(27,"translate"),s()(),l(28,"div",12),V(29,"sts-fwc-vpn-config-name-control",21,1),u(31,"translate"),l(32,"p",20),d(33),u(34,"translate"),s()(),x(35,Ut,6,9,"div",22),l(36,"div",23)(37,"span",14),V(38,"textarea",24),l(39,"label",25),d(40),u(41,"translate"),s()()()()()()()()(),x(42,Ht,5,9,"ng-template",26),s()}if(n&2){let e,i,t,o=de(30),a=c();H(D(41,Rt)),E("visible",a.displayDialog),m("modal",!0)("closable",!1)("resizable",!0),r(4),I("header",f(5,25,"VPN.PANEL.DATA")),r(3),m("formGroup",a.formModel),r(3),N(a.object.obj_type==a.ObjectTypes.OBJ_CERT_CLI||a.object.obj_type==a.ObjectTypes.OBJ_CERT_SER?10:-1),r(),m("ngClass",a.object.obj_type==a.ObjectTypes.OBJ_CA?"col-6":"col-3"),r(5),g(f(17,27,"VPN.PANEL.FIELDS.DAYS")),r(3),m("ngValue",a.CADaysOptions.days),r(),g(f(21,29,"VPN.PANEL.DAY_OPTS.0")),r(2),m("ngValue",a.CADaysOptions.years),r(),g(f(24,31,"VPN.PANEL.DAY_OPTS.1")),r(2),m("ngStyle",R(42,_e,a.formModel.get("days").valid||a.formModel.get("days").pristine?"hidden":"visible")),r(),g(f(27,33,"VPN.PANEL.ERRORS.DAYS")),r(2),m("ngClass",((e=a.formModel.get("type"))==null?null:e.value)===a.CACertTypes.client&&!a.object.id&&!a.showClientCertWizard?"col-5":((e=a.formModel.get("type"))==null?null:e.value)===a.CACertTypes.client&&!a.object.id&&a.showClientCertWizard?"col-11":"col-6"),r(),I("label",f(31,35,"VPN.PANEL.FIELDS.CN")),m("showClientCertWizard",a.showClientCertWizard&&((i=a.formModel.get("type"))==null?null:i.value)===a.CACertTypes.client&&!a.object.id&&o.isValidClientCertName())("countries",a.countries),r(3),m("ngStyle",R(44,_e,a.formModel.get("cn").valid||a.formModel.get("cn").pristine?"hidden":"visible")),r(),g(f(34,37,"VPN.PANEL.ERRORS.CN_FORMAT")),r(2),N(((t=a.formModel.get("type"))==null?null:t.value)===a.CACertTypes.client&&!a.object.id?35:-1),r(5),g(f(41,39,"ITEM_PANEL.FIELDS.COMMENTS"))}}var le=(()=>{class n{daysValidator(e){let i=e.value,t,o=1,a=36500;return this.formModel&&this.formModel.controls.days_select.value==B.years&&(a=a/365|0),t=i>=o&&i<=a,t?null:{daysOutOfRange:!0}}constructor(e,i,t,o,a,h,p,G,se,St){this.itemSelectedService=e,this.fwcUserService=i,this.fwcVpnService=t,this.translate=o,this.fwcErrorPipe=a,this.messageService=h,this.confirmationService=p,this.utilService=G,this.http=se,this.cd=St,this.displayDialog=!1,this.ObjectTypes=w,this.CADaysOptions=B,this.CACertTypes=ze,this.showClientCertWizard=!1,this.alive=!0,this.certNamePrefixValidator=j=>J=>{let he,pe=J.value;return he=pe&&pe.indexOf(j)===0&&pe.length>j.length,he?null:{wrongCNNameWithPrefix:!0}};let xt=`assets/data/${i.getActualFwcUser()?i.getActualFwcUser().selectedLanguage:"es"}/countries.json`;this.http.get(xt).subscribe(j=>{j.map(J=>J.alpha2=J.alpha2.toUpperCase()),this.countries=j},j=>{})}ngOnInit(){this.itemSelectedService.getItem().pipe(Q(()=>this.alive)).subscribe(e=>{this.insert=e.containerReadOnly===void 0,this.edit=e.containerReadOnly===!1,!(e.obj_type!=w.OBJ_CA&&e.obj_type!=w.OBJ_CERT_CLI&&e.obj_type!=w.OBJ_CERT_SER)&&(this.resetProperties(),this.onItemSelect(e),this.displayDialog=!0,this.cd.detectChanges())})}ngOnDestroy(){this.alive=!1}resetProperties(){this.object=null}onItemSelect(e){if(!e)return;let i=e._fwcObjId,t=e.obj_type;if(i===void 0&&t!==void 0){let o={id:i,obj_type:t,node_id:e.node_id,container:e.container};t==w.OBJ_CA?this.headerTitle=this.translate.instant("VPN.PANEL.NEW.CA"):(this.headerTitle=this.translate.instant("VPN.PANEL.NEW.CERT",{ca_name:e.ca_name}),o.ca=e.ca,o.type=e.type,e.folder_prefix&&(o.folder_prefix=e.folder_prefix,this.headerTitle+=` / '${e.folder_prefix}'`)),this.createForm(o)}else{let o,a={fwcloud:this.fwcUserService.getActualFwSelectedCloud()};switch(t){case w.OBJ_CA:o=this.fwcVpnService.getCA.bind(this.fwcVpnService),a.ca=i,this.headerTitle=`${this.translate.instant("VPN.CA")}: '${e._fwcObjName}'`;break;case w.OBJ_CERT_CLI:case w.OBJ_CERT_SER:o=this.fwcVpnService.getCertificate.bind(this.fwcVpnService),a.crt=i,this.headerTitle=`${this.translate.instant("VPN.CERT")}: '${e._fwcObjName}'`;break}o&&o(a).subscribe(h=>{let p=h.data;p.obj_type=t,this.createForm(p)},h=>{this.messageService.add({key:"fwcToastMsgs",severity:"error",summary:"Error",detail:this.fwcErrorPipe.transform(h)})})}}createForm(e){e&&(e.days?e.days%365?e.days_select=B.days:(e.days=e.days/365,e.days_select=B.years):(e.days=50,e.days_select=B.years),this.formModel=new Ae({id:new F(e.id),cn:new F({value:e.cn,disabled:!this.insert},[U.required,U.pattern(ue.cnRegExp)]),days:new F({value:e.days,disabled:!this.insert},[U.required,this.daysValidator.bind(this)]),node_id:new F(e.node_id),comment:new F({value:e.comment,disabled:!this.insert&&!this.edit}),days_select:new F({value:e.days_select,disabled:!this.insert})}),(e.obj_type==w.OBJ_CERT_CLI||e.obj_type==w.OBJ_CERT_SER)&&(this.formModel.addControl("type",new F({value:e.type,disabled:!this.insert})),this.formModel.addControl("ca",new F({value:e.ca,disabled:!this.insert})),this.showClientCertWizard=e.obj_type==w.OBJ_CERT_CLI&&!e.id,e.folder_prefix&&(this.formModel.get("cn").setValue(e.folder_prefix),this.formModel.get("cn").setValidators([U.required,U.pattern(ue.cnRegExp),this.certNamePrefixValidator(e.folder_prefix)]))),this.object=e,this.cd.detectChanges())}revalidateForm(){for(let e in this.formModel.controls)this.formModel.controls[e].updateValueAndValidity(),this.formModel.controls[e].markAsTouched()}onCancel(e){!e&&!this.formModel.pristine&&this.formModel.valid?this.confirmationService.confirm({header:this.translate.instant("GLOBALS.MSG_CONFIRM"),icon:"fa fa-question-circle fwcBlue iconBig",message:this.translate.instant("VPN.PANEL.MSG_EXIT"),accept:()=>{this.onCancel(!0)},rejectVisible:!0,rejectLabel:"No",acceptLabel:this.translate.instant("GLOBALS.MSG_OP_ASK.YES")}):(this.resetProperties(),this.displayDialog=!1,this.cd.detectChanges())}checkForm(e){e&&e.target&&e.target.type!="textarea"&&this.formModel.valid&&(e.target.blur(),this.onSave())}onSave(){if(this.object)if(this.object.id==null){let e={};for(let a in this.formModel.controls)e[a]=this.formModel.controls[a].value!==null&&this.formModel.controls[a].value!==void 0?this.formModel.controls[a].value:void 0;e.fwcloud=this.fwcUserService.getActualFwSelectedCloud(),e.days_select==B.years&&(e.days*=365),delete e.days_select;let i,t,o;switch(this.object.obj_type){case w.OBJ_CA:i=this.fwcVpnService.newCA.bind(this.fwcVpnService),t=this.translate.instant("VPN.CA"),o="VPN.PANEL.NEW.CA_CREATING";break;case w.OBJ_CERT_CLI:case w.OBJ_CERT_SER:i=this.fwcVpnService.newCertificate.bind(this.fwcVpnService),t=this.translate.instant("VPN.CERT"),o="VPN.PANEL.NEW.OK";break}i&&(this.loadingData=!0,this.utilService.fwcAPICall(i,e).then(a=>{let h=a.data.insertId,p=a.data.TreeinsertId,G={container:this.object.container,_fwcObjId:h,_fwcObjType:this.object.obj_type,_fwcObjTreeId:p,_fwcTreeAction:ke.NEW_ITEM};this.itemSelectedService.setModifiedItem(G),this.messageService.add({key:"fwcToastMsgs",severity:"success",summary:this.translate.instant("GLOBALS.MSG_OP_RESULT.SUCCESS"),detail:this.translate.instant(o,{objtype:t})}),this.displayDialog=!1,this.loadingData=!1,this.cd.detectChanges()}).catch(a=>{a.error.fwcErr==1005?this.confirmationService.confirm({header:this.translate.instant("VPN.PANEL.NEW.ERRORS.DUP_CN.SUMMARY"),icon:"fa fa-question-circle fwcBlue iconBig",message:this.translate.instant("VPN.PANEL.NEW.ERRORS.DUP_CN.TEXT"),rejectVisible:!1,acceptLabel:this.translate.instant("GLOBALS.MSG_OP_ASK.OK"),accept:()=>{}}):(this.messageService.add({key:"fwcToastMsgs",severity:"error",summary:"Error",detail:this.fwcErrorPipe.transform(a)}),this.loadingData=!1),this.cd.detectChanges()}))}else{let e={};for(let t in this.formModel.controls)e[t]=this.formModel.controls[t].value!==null&&this.formModel.controls[t].value!==void 0?this.formModel.controls[t].value:void 0;e.fwcloud=this.fwcUserService.getActualFwSelectedCloud();let i;switch(this.object.obj_type){case w.OBJ_CA:i=this.fwcVpnService.updateCA.bind(this.fwcVpnService);break;case w.OBJ_CERT_CLI:case w.OBJ_CERT_SER:i=this.fwcVpnService.updateCRT.bind(this.fwcVpnService);break}this.loadingData=!0,this.utilService.fwcAPICall(i,e).then(t=>{w.OBJ_CA==this.object.obj_type?this.messageService.add({key:"fwcToastMsgs",severity:"success",summary:this.translate.instant("GLOBALS.MSG_OP_RESULT.SUCCESS"),detail:this.translate.instant("CONTEXT.FCA.EDIT_SUCCESS")}):this.messageService.add({key:"fwcToastMsgs",severity:"success",summary:this.translate.instant("GLOBALS.MSG_OP_RESULT.SUCCESS"),detail:this.translate.instant("CONTEXT.CA.EDIT_CERT_SUCCESS")}),this.loadingData=!1,this.displayDialog=!1,this.cd.detectChanges()})}}handleToggleClientConfigName(){this.showClientCertWizard=!this.showClientCertWizard,this.cd.detectChanges()}onDialogShow(){setTimeout(()=>{this.fwcConfigNameControl&&this.fwcConfigNameControl.focusMainInput()},100)}onDialogHide(){}static{this.\u0275fac=function(i){return new(i||n)(S(fe),S(k),S(Qe),S(He),S(Xe),S(qe),S(Ye),S(Ze),S(Ie),S(Z))}}static{this.\u0275cmp=W({type:n,selectors:[["sts-fwc-vpn-panel"]],viewQuery:function(i,t){if(i&1&&O(Dt,5),i&2){let o;P(o=A())&&(t.fwcConfigNameControl=o.first)}},decls:1,vars:1,consts:[["dlgItemPanel",""],["fwcConfigNameControl",""],["styleClass","dlgFwcDialog fwcObjectDialog",3,"visible","modal","closable","resizable","style"],["styleClass","dlgFwcDialog fwcObjectDialog",3,"visibleChange","onShow","onHide","visible","modal","closable","resizable"],["pTemplate","header"],["styleClass","objectInfoTab"],["leftIcon","fa fa-pencil",3,"header"],[1,"fwcObjectPanel"],[3,"formGroup"],[3,"keyup.enter","keyup.esc"],[1,"grid"],[1,"col-3"],[3,"ngClass"],[1,"p-inputgroup"],[1,"p-float-label"],["pInputText","","type","number","formControlName","days","name","days","ondrop","return false"],["for","days",2,"color","var(--fwcBlue)","left","0px"],["formControlName","days_select","name","days_select",1,"fwcSelect",3,"change"],["selected","",3,"ngValue"],[3,"ngValue"],[1,"fwc-error",3,"ngStyle"],["formControlName","cn","maxLength","64",3,"label","showClientCertWizard","countries"],[1,"col-1"],[1,"col-12"],["pInputTextarea","","formControlName","comment","name","comment","maxlength","255","ondrop","return false"],["for","comment",2,"left","0px"],["pTemplate","footer"],[1,"divFormHeader"],[1,"fwcWhite","fwcIconLeft"],["formControlName","type","name","type",1,"fwcSelect"],["for","ip_version",2,"left","0px"],["pButton","","type","button","showDelay","500","tooltipPosition","top",1,"fwcButtonHeight",2,"width","100%","padding","0.625em","font-family","'Montserrat', sans-serif",3,"click","disabled","ngClass","icon","label","pTooltip"],[1,"divLoadTemp",3,"ngStyle"],["pButton","","icon","pi pi-times",1,"p-button-danger",3,"label","disabled"],["pButton","","icon","fa fa-save",1,"p-button-success",3,"label","disabled"],["pButton","","icon","pi pi-times",1,"p-button-primary",3,"label"],["pButton","","icon","pi pi-times",1,"p-button-danger",3,"click","label","disabled"],["pButton","","icon","fa fa-save",1,"p-button-success",3,"click","label","disabled"],["pButton","","icon","pi pi-times",1,"p-button-primary",3,"click","label"]],template:function(i,t){i&1&&x(0,Jt,43,46,"p-dialog",2),i&2&&N(t.object&&t.formModel?0:-1)},styles:["@-moz-document url-prefix(){.p-float-label textarea.p-filled~label{top:0;margin-top:-1.7rem}.p-float-label textarea:focus~label{margin-top:-.5rem}}"],changeDetection:0})}}return n})();var Yt=()=>({height:"92vh",width:"100%"}),gt=()=>({normal:"itvOpenvpnTree"}),wt=n=>({general:n});function qt(n,v){n&1&&(d(0),u(1,"translate")),n&2&&L(" ",f(1,1,"VPN.TREE_CA")," ")}function Zt(n,v){if(n&1&&(l(0,"div",5)(1,"p-panel"),x(2,qt,2,3,"ng-template",6),s(),l(3,"div"),V(4,"sts-fwc-tree",7),s()()),n&2){let e=c(2);r(3),ce("height",e.treeContainerHeight),r(),m("treeOptions",e.optionsTreeCa)("treeStyle",R(5,wt,D(4,gt)))}}function Xt(n,v){n&1&&(d(0),u(1,"translate")),n&2&&L(" ",f(1,1,"VPN.TREE_FW")," ")}function Kt(n,v){if(n&1&&(l(0,"div",5)(1,"p-panel"),x(2,Xt,2,3,"ng-template",6),s(),l(3,"div"),V(4,"sts-fwc-tree",7),s()()),n&2){let e=c(2);r(3),ce("height",e.treeContainerHeight),r(),m("treeOptions",e.optionsTreeFw)("treeStyle",R(5,wt,D(4,gt)))}}function $t(n,v){n&1&&(l(0,"div",2)(1,"p-splitter",null,0),x(3,Zt,5,7,"ng-template",4)(4,Kt,5,7,"ng-template",4),s()()),n&2&&(r(),H(D(2,Yt)))}var vt=(()=>{class n{constructor(e,i){this.fwcUserService=e,this.appOptionsService=i,this.alive=!0,this.treeContainerHeight="100%",this.optionsTreeFw=i.optionsTreeFwCon,this.optionsTreeCa=i.optionsTreeCa}onResize(e){this.adjustTreeHeight(),this.onSplitterResize(e)}ngOnInit(){this.fwcUserService.getFwcUser().pipe(Q(()=>this.alive)).subscribe(e=>{(!this.fwcUser||this.fwcUser&&(e.user_id!=this.fwcUser.user_id||e.selectedFwCloud!=this.fwcUser.selectedFwCloud))&&this.loadFwcObjectTree(e.user_id,e.selectedLanguage,e.selectedFwCloud,1,1),this.fwcUser=Object.assign({},e)}),this.adjustTreeHeight()}adjustTreeHeight(){let e=window.innerHeight;this.treeContainerHeight=`${e-150}px`}onSplitterResize(e){this.fwcTreeComponents.forEach(i=>{i.treeview.nativeElement.updateLayout()})}ngOnDestroy(){this.alive=!1}loadFwcObjectTree(e,i,t,o,a){let h,p;h=Object.assign({},this.optionsTreeFw),p=Object.assign({},this.optionsTreeCa),h.user_id=p.user_id=e,h.fwcloud=p.fwcloud=t,h.objStandard=p.objStandard=o,h.objCloud=p.objCloud=a,this.optionsTreeFw=Object.assign({},h),this.optionsTreeCa=Object.assign({},p)}onShowStatusSection(e){this.displayStatusSection=e}static{this.\u0275fac=function(i){return new(i||n)(S(k),S(Ge))}}static{this.\u0275cmp=W({type:n,selectors:[["sts-fwc-vpn-main"]],viewQuery:function(i,t){if(i&1&&O(ae,5),i&2){let o;P(o=A())&&(t.fwcTreeComponents=o)}},hostBindings:function(i,t){i&1&&y("resize",function(a){return t.onResize(a)},!1,we)},decls:6,vars:2,consts:[["splitter",""],[1,"fwcDivBoxed","fwcMainContainer"],[1,"grid-nogutter","fwcDivBoxed"],[3,"restrictionsReadOnly"],["pTemplate",""],[2,"height","auto","width","100%"],["pTemplate","header"],[3,"treeOptions","treeStyle"]],template:function(i,t){i&1&&(l(0,"div",1),x(1,$t,5,3,"div",2),s(),V(2,"sts-fwc-vpn-panel")(3,"sts-fwc-ovconfig-panel",3)(4,"sts-fwc-info-tooltip")(5,"sts-fwc-vpn-status-panel")),i&2&&(r(),N(t.fwcUser!=null&&t.fwcUser!=null?1:-1),r(2),m("restrictionsReadOnly",!0))},dependencies:[pt,ae,dt,ct,ne,it,ut,le,z],styles:[`.fwcMainContainer{background:var(--surfaceBackgroundColor)!important;width:100%;height:100%}.p-panel .p-panel-header{display:flex!important;flex-direction:column;justify-content:center!important;align-items:center!important;background-color:var(--fwcLightBlue)!important;color:var(--fixedWhiteColor)!important;font-family:arial,Montserrat,sans-serif;text-transform:uppercase;font-size:.9rem;width:100%}
`],encapsulation:2})}}return n})();var ei=[{path:"",component:vt},{path:"**",pathMatch:"full",redirectTo:""}],yt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=Y({imports:[me.forChild(ei),me]})}}return n})();var En=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=q({type:n})}static{this.\u0275inj=Y({imports:[Fe,We,Ue,yt,Je.forChild(),mt,Ct,et,ft,ot]})}}return n})();Te(le,function(){return[be,Me,De,ee,te,X,Re,$,K,Pe,ie,Be,je,tt,ne,Ke,$e,nt,oe,at,lt,rt,_t]},function(){return[z,st]});export{En as FwcVpnModule};