(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{373:function(e,t,i){"use strict";i.r(t);var a=i(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"routing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),i("h2",{attrs:{id:"advanced-routing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#advanced-routing"}},[e._v("#")]),e._v(" Advanced Routing")]),e._v(" "),i("p",[e._v("From FWCloud-UI you can carry out the routing administration.\nIn traditional routing, the route that packets follow is obtained solely on the basis of their destination.\nIt is possible to create more specific routes based on other factors such as source address, firewall marks, traffic type, protocols, access list, packet size, or other criteria. For that, we need to create routing tables and a routing policy, this is what is known as advanced routing or policy routing.\nFrom FWCloud-UI we can create and manage these routes and rules with all the power provided by its graphical environment and visual features. We access to these features from the "),i("code",[e._v("Routing")]),e._v(" section of the firewalls created in FWCloud-UI.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing.png"),alt:"Routing Section"}}),i("br")]),e._v(" "),i("p",[e._v("Routing tables and policy are described in the next sections of this document.")]),e._v(" "),i("h2",{attrs:{id:"routing-tables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routing-tables"}},[e._v("#")]),e._v(" Routing Tables")]),e._v(" "),i("p",[e._v("We will classify the routes in tables.\nTo create a new table we go to Routing, TABLES and select "),i("code",[e._v("New table")])]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-tables-new.png"),alt:"New Routing Table"}}),i("br")]),e._v(" "),i("p",[e._v('In the form presented we can select the table "main", predefined by the system, or create a new custom table. All tables require a unique identifier. For our customized tables we can select a number between 1 and 250. Also they require a name that identifies the table. Optionally we can add a comment in the table definition.')]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-tables-new_form.png"),alt:"Routing Tables Form"}}),i("br")]),e._v(" "),i("p",[e._v("If we select a table we can add routes into it. If the table has no route we can press the "),i("code",[e._v("New Route")]),e._v(' button by the "Empty table warning"')]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-route-first.png"),alt:"First Routing Route"}}),i("br")]),e._v(" "),i("p",[e._v(", or alternatively right clicking on the table name and then clicking on "),i("code",[e._v("New route")]),e._v(" in the context menu")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-routes-new.png"),alt:"New Routing Route"}}),i("br")]),e._v(" "),i("p",[e._v("We are presented with a form where we need to fill the gateway. All the routes need a gateway, which is the next-hop device to send the packages to. This field only allows IP address objects and can not be left empty. Since the routes only can have one gateway, this field only allow an object, that cannot be deleted because it will leave the rule inconsistent but it can be replaced by other IP address object by drag and drop.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-routes_new_form.png"),alt:"New Routing Route Form"}}),i("br")]),e._v(" "),i("p",[e._v('This will create route with the value "(Any)" in the '),i("code",[e._v("To")]),e._v(" field. It represents a default route that uses the specified gateway.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-route.png"),alt:"Routing Route"}}),i("br")]),e._v(" "),i("p",[e._v("We can see the rule that will be installed in the router by right clicking on the number of route and clicking "),i("code",[e._v("Compile selected route")])]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-route-compile.png"),alt:"Compiling Routing Route"}}),i("br")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-route-compilation.png"),alt:"Compilation Routing Route"}}),i("br")]),e._v(" "),i("p",[e._v("In order to adjust the routes to our needs we can make them more specific by modifying the "),i("code",[e._v("To")]),e._v(" field.")]),e._v(" "),i("p",[e._v("This field admits more than one object. Here we can use any IP addresses, IP ranges, networks, hosts, groups, VPN connections and even VPN prefixes.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-route-2.png"),alt:"Tuned Routing Route"}}),i("br")]),e._v(" "),i("p",[e._v("We can add as many routes as we needed in the routing tables. We can also use any of the visual features of FWCloud-UI to define our routing table, and make it more clear and readable, like copy and paste, moving routes, changing their color, disabling and enabling them and creating groups to contain some of the routes.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-route-menu.png"),alt:"Routing Route Options"}}),i("br")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-route-3.png"),alt:"Tuned Routing Table"}}),i("br")]),e._v(" "),i("h2",{attrs:{id:"routing-policy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routing-policy"}},[e._v("#")]),e._v(" Routing Policy")]),e._v(" "),i("p",[e._v("To specify different paths used to route network traffic depending on the type of traffic or its source address, we need to classify this traffic using routing rules and then tell the system to find the most appropriate route in one routing table or another.")]),e._v(" "),i("p",[e._v("If the policy routing is empty we can create the first rule by pressing the button "),i("code",[e._v("Create new rule")]),e._v(" "),i("img",{attrs:{src:e.$withBase("/assets/img/routing-rule-first.png"),alt:"New Routing Rule"}}),i("br")]),e._v(" "),i("p",[e._v("Because the rules make use of the routing tables we cannot create a new rule since we have defined at least one routing table (visit "),i("RouterLink",{attrs:{to:"/docs/Sections/Routing/#routing-tables"}},[e._v(" Routing Tables ")]),e._v(" in the previous section), otherwise FWCloud-UI will show us the following warning")],1),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-rule-error.png"),alt:"Routing Rule Error"}}),i("br")]),e._v(" "),i("p",[e._v("When creating a new rule we need to select from the drop down list a routing table and specify a FWCloud-UI object to restrict the traffic that will use the selected table to lookup up for the proper route.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-rule-form.png"),alt:"Routing Rule Form"}}),i("br")]),e._v(" "),i("p",[e._v("The created rule will appear in the routing policy table.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-rule.png"),alt:"Routing Rule"}}),i("br")]),e._v(" "),i("p",[e._v("We can right click on the number of the rules and select "),i("code",[e._v("Compile selected rule")]),e._v(" and FWCloud-UI will show us the rule or rules that will be installed.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-rule-compilation.png"),alt:"Routing Rule Compilation"}}),i("br")]),e._v(" "),i("p",[e._v("At least we need to have one object in the "),i("code",[e._v("From")]),e._v(" field of the rules to act as criteria for selecting traffic. If the rule has only one object in this field then it cannot not be removed. Valid objects for this field are networks, IP addresses, IP ranges, hosts, firewall marks, VPN connections and VPN prefixes")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-rule-2.png"),alt:"Routing Rules"}}),i("br")]),e._v(" "),i("p",[e._v("We can create a full policy routing using the visual features that FWCloud-UI provides to us.")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-rule-menu.png"),alt:"Routing Rules Options"}}),i("br")]),e._v(" "),i("h2",{attrs:{id:"compiling-and-installing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compiling-and-installing"}},[e._v("#")]),e._v(" Compiling and installing")]),e._v(" "),i("p",[e._v("We can compile individual routing rules or routes by selecting them and then right client on the option "),i("code",[e._v("Compile selected route")]),e._v(" or "),i("code",[e._v("Compile selected rule")]),e._v(" respectively, this will pop up an information window showing the code that will be used to apply the routes and rules in the firewall, but they do not take effect yet.")]),e._v(" "),i("p",[e._v("To install to policy routing and the routing tables we need first to compile and then install the firewall. This is done the same way we did it to compile and install the security policy (review "),i("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#compile"}},[e._v(" Compile ")]),e._v(" and "),i("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#install"}},[e._v(" Install ")]),e._v(" sections of this guide), if the Firewall has a Routing policy or Routing tables defined then they will be installed.")],1),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-installation.png"),alt:"Routing Installation"}}),i("br")]),e._v(" "),i("p",[i("img",{attrs:{src:e.$withBase("/assets/img/routing-installation-2.png"),alt:"Routing Installation Result"}}),i("br")])])}),[],!1,null,null,null);t.default=s.exports}}]);