(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{369:function(e,t,o){"use strict";o.r(t);var a=o(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#policy"}},[e._v("#")]),e._v(" Policy")]),e._v(" "),o("h2",{attrs:{id:"security-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security-policy"}},[e._v("#")]),e._v(" Security Policy")]),e._v(" "),o("p",[e._v("FWCloud-UI allows you to create a "),o("code",[e._v("Security Policy")]),e._v(" in a graphical, intuitive and an easy to use web user interface.\nThe security policy is based on IPTables, so you will expect to find INPUT, OUTPUT and FORWARD chains, as well as SNAT and DNAT. You can configure the policy for IPv4 and for IPv6.")]),e._v(" "),o("p",[e._v("Out of the box, your firewall will have a scaffold with a minimum set of basic rules.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Don't forget IPv6")]),e._v(" "),o("p",[e._v("Remember that IPv6 is now functional in the majority of Linux based and Windows systems.\nSome installations that seams to be quite secured have security issues when related to IPv6.")]),e._v(" "),o("p",[e._v("When you create a new firewall using FWCloud-UI you will have the minimum rules configured.")])]),e._v(" "),o("p",[e._v("When you need to add a new rule, unfold the firewall group you want to add it to, unfold IPv4 or IPv6 policy group and select the appropriate chain: INPUT, OUTPUT, FORWARD, SNAT or DNAT.")]),e._v(" "),o("p",[e._v("On the policy panel you will see all the rules of that chain. Decide the position for the new rule. Right click on the leftmost side of the rule (that is, on the number of the rule) that occupies that position and select in the context menu "),o("code",[e._v("Create new rule above")]),e._v(" or "),o("code",[e._v("Create new rule below")]),e._v(" according to your criteria.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_new.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("You will get a new rule added with "),o("code",[e._v("Any")]),e._v(" value in the many of its fields.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_new_line.png",alt:" New Rule "}})]),e._v(" "),o("p",[e._v("To customize this rule according to its objective you just need to drag and drop elements on the fields. The majority of the operation in FWCloud-UI are done by drag and drop.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Copy and Paste")]),e._v(" "),o("p",[e._v("Sometimes is easier making copy of a previous rule and modified it than create a new one.\nJust right click on the left side of the rule and select "),o("code",[e._v("Copy")]),e._v(". Then go to the right position, right click again an select "),o("code",[e._v("Paste above")]),e._v(" or "),o("code",[e._v("Paste below")]),e._v(".")]),e._v(" "),o("p",[e._v("It is possible too to select and copy several rules, not only one.")])]),e._v(" "),o("p",[e._v("When you modify the policy of a firewall, by adding or changing any rule, two new icons appear next to the firewall name.")]),e._v(" "),o("p",[e._v("The orange "),o("img",{attrs:{src:"/assets/img/C.png",alt:" C "}}),e._v(" indicates the new policy needs to be compiled, and the "),o("img",{attrs:{src:"/assets/img/I.png",alt:" I "}}),e._v(" that it also needs to be installed in the target firewall.")]),e._v(" "),o("h2",{attrs:{id:"policy-rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#policy-rules"}},[e._v("#")]),e._v(" Policy Rules")]),e._v(" "),o("h3",{attrs:{id:"rules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[e._v("#")]),e._v(" Rules")]),e._v(" "),o("p",[e._v("The security policy is composed of firewall rules. In FWCloud-UI any rule is graphically represented as row in a table. The columns of the table are the fields of the rule.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/empty_rule.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("When you need to add a new rule, unfold the firewall group you want to add it to, unfold IPv4 or IPv6 policy group and select the appropriate chain: INPUT, OUTPUT, FORWARD, SNAT or DNAT.")]),e._v(" "),o("p",[e._v("Not all rules have the same fields, depending on the firewall chain you are creating the rule. FWCloud-UI only allow you to fill in the appropriate fields")]),e._v(" "),o("p",[e._v("On them you can drag and drop interfaces, IP addresses, networks, prefix, etc. Check "),o("RouterLink",{attrs:{to:"/docs/Sections/Objects/"}},[e._v(" Objects ")]),e._v(" section to know the kind of objects that can be used in a rule.")],1),e._v(" "),o("h3",{attrs:{id:"create-new-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-new-rule"}},[e._v("#")]),e._v(" Create new rule")]),e._v(" "),o("p",[e._v("In order to create a new rule go to the corresponding firewall and expand it by clicking on the "),o("code",[e._v(">")]),e._v(" symbol. You can create rules for IPv4 and IPv6 protocols. Expand the protocol and select one of the showed chains (INPUT, OUTPUT, FORWARD, SNAT, DNAT) The Policy panel will be changed to show all the current rules of that chain. Now decide the position for the new rule. Right click on the leftmost side of the rule (that is, on the number of the rule) that occupies that position and select "),o("code",[e._v("Create new rule above")]),e._v(" or "),o("code",[e._v("Create new rule below")]),e._v(" according to your criteria.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_new.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("You will get a new rule added with "),o("code",[e._v("Any")]),e._v(" value in most of its fields. This is kind of template for the new rule, you will need to customize this rule according to its objectives. Now just drag and drop elements on these fields. The majority of the operation in FWCloud-UI are done by drag and drop.")]),e._v(" "),o("h3",{attrs:{id:"compose-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compose-rule"}},[e._v("#")]),e._v(" Compose rule")]),e._v(" "),o("p",[e._v("A FWCloud rule is composed by drag and drop elements from the left panel of the FWCloud-UI to the proper box of the rule. For instance, let's suppose you start from a fresh new rule like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_new_line.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("and you want to add the interface "),o("code",[e._v("eth0 [LAN]")]),e._v(" in the "),o("code",[e._v("In")]),e._v(" field. Just click on "),o("code",[e._v("eth0 [LAN]")]),e._v(", drag it ...")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/dragDrop1.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("and drop it in the "),o("code",[e._v("In")]),e._v(" box,")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/dragDrop2.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("then continue with "),o("code",[e._v("eth1 [WAN]")]),e._v(" in the "),o("code",[e._v("Out")]),e._v(" field ...")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/dragDrop3.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("and the rest of the fields ...")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/dragDrop4.png",alt:" Create Rule "}})]),e._v(" "),o("p",[e._v("until the rule is exactly as you want it:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/dragDrop5.png",alt:" Create Rule "}})]),e._v(" "),o("h3",{attrs:{id:"rule-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rule-options"}},[e._v("#")]),e._v(" Rule options")]),e._v(" "),o("p",[e._v("Some rules can need options that cannot be accomplished by drag and drop. In these cases right click the number of the rule and select "),o("code",[e._v("Edit rule")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_edit.png",alt:" Rule Edit "}})]),e._v(" "),o("p",[e._v("A new form is displayed where you can mark the options for the rule")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_options.png",alt:" Rule Options "}})]),e._v(" "),o("h3",{attrs:{id:"copy-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-rule"}},[e._v("#")]),e._v(" Copy Rule")]),e._v(" "),o("p",[e._v("When composing or modifying a rule you can copy the objects from the rules you previously have and paste them in the new field.")]),e._v(" "),o("p",[e._v("Also for your convenience you can make a copy of a rule, right click on the number of the rule, select "),o("code",[e._v("Copy")]),e._v(" and then right click the number of another rule and select "),o("code",[e._v("Paste above")]),e._v(" or "),o("code",[e._v("Paste below")]),e._v(" from the context menus.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_copy.png",alt:" Copy Rule "}})]),e._v(" "),o("p",[e._v("When a rule has been copied to the clipboard a small icon "),o("img",{attrs:{src:"/assets/img/rule_copy-icon.png",alt:" Copy Rule Icon "}}),e._v(" appears at the bottom of the policy panel. If you click on it you can see the messages and removed it from the clipboard.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_copy-msg.png",alt:" Copy Rule Msg "}})]),e._v(" "),o("h3",{attrs:{id:"cut-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cut-rule"}},[e._v("#")]),e._v(" Cut rule")]),e._v(" "),o("p",[e._v("In order to sort your rules you can cut a rule and paste on another position. This can be done by selecting "),o("code",[e._v("Cut")]),e._v(" and then "),o("code",[e._v("Paste above")]),e._v(" or "),o("code",[e._v("Paste below")]),e._v(" from the context menu of the rules.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_cut.png",alt:" Cut Rule "}})]),e._v(" "),o("h3",{attrs:{id:"move-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#move-rule"}},[e._v("#")]),e._v(" Move rule")]),e._v(" "),o("p",[e._v("Rules can be moved in order to compose the secure policy. To move a rule right click on the number of the rule, select "),o("code",[e._v("Move above")]),e._v(" or "),o("code",[e._v("Move below")]),e._v(" until the rules gets it right place.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_move_up.png",alt:" Move Rule "}})]),e._v(" "),o("h3",{attrs:{id:"change-rule-color"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#change-rule-color"}},[e._v("#")]),e._v(" Change rule color")]),e._v(" "),o("p",[e._v("To better distinguish one rules from others or which part of the policy they affect, the background color of these can be modified.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_color.png",alt:" Rule Color "}})]),e._v(" "),o("h3",{attrs:{id:"delete-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete-rule"}},[e._v("#")]),e._v(" Delete rule")]),e._v(" "),o("p",[e._v("If you thing a rule is not going to be needed it can be removed from the policy. Right click on the rule number and select "),o("code",[e._v("Delete rule")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_delete.png",alt:" Move Rule "}})]),e._v(" "),o("h3",{attrs:{id:"disable-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-rule"}},[e._v("#")]),e._v(" Disable rule")]),e._v(" "),o("p",[e._v("Sometimes you want temporarily disable a rule but not deleted. Right click on the rule number and select "),o("code",[e._v("Disable rule")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_disable.png",alt:" Disable Rule "}})]),e._v(" "),o("p",[e._v("When a rule is disabled it is blurred and a white cross over red background appears by the rule number.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_disabled.png",alt:" Disabled Rule "}})]),e._v(" "),o("p",[e._v("To re-enable the rule again select "),o("code",[e._v("Enable rule")]),e._v(" in the context menu.")]),e._v(" "),o("h3",{attrs:{id:"compile-rule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compile-rule"}},[e._v("#")]),e._v(" Compile rule")]),e._v(" "),o("p",[e._v("When creating your secure policy if you want to known beforehand how a rule will look like in iptables when installed in your firewall, right click the number of the rule and select "),o("code",[e._v("Compile selected rule")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_compile.png",alt:" Compile Rule "}})]),e._v(" "),o("p",[e._v("And a pop up windows will show the rule compiled.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_compile-form.png",alt:" Compile Rule Form "}})]),e._v(" "),o("h3",{attrs:{id:"groups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),o("p",[e._v("In order to organize the secure policy you can put rules into groups. First you need to create a group. A group is created from a rule than will go into it. Right click that rule and select "),o("code",[e._v("Create group")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/rule_group_new.png",alt:" New Group "}})]),e._v(" "),o("p",[e._v("And fill the form with the name of the group.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/group_name.png",alt:" Group Form "}})]),e._v(" "),o("p",[e._v("By anytime you can rename a group of rules by editing it.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/group_edit.png",alt:" Edit Group "}})]),e._v(" "),o("p",[e._v("In order to add a rule to the group move it until is next to the group. Then right click on the rule number and select "),o("code",[e._v("Move to the group above")]),e._v(" or "),o("code",[e._v("Move to the group below")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/group_in.png",alt:" Add Rule in a Group "}})]),e._v(" "),o("p",[e._v("If a rule needs to be out of a group, right click and select "),o("code",[e._v("Remove them from group")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/group_out.png",alt:" Remove Rule from a Group "}})]),e._v(" "),o("p",[e._v("The groups can be collapsed or expanded to the display the rules inside them. Also you can change the color of the group in order to visually separate one group from another.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/group_color.png",alt:" Color Group "}})]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/hostInARule.png",alt:" Group Color Example "}})]),e._v(" "),o("p",[e._v("If a group is not longer needed, it can be deleted.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/group_delete.png",alt:" Delete Group "}})]),e._v(" "),o("h2",{attrs:{id:"load-policy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load-policy"}},[e._v("#")]),e._v(" Load Policy")]),e._v(" "),o("p",[e._v("In order to load the secure policy into a firewall you need to compile it (visit "),o("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#compile"}},[e._v(" Compile firewall ")]),e._v(" section) and then install it (visit "),o("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#install"}},[e._v(" Install firewall ")]),e._v(" section).")],1),e._v(" "),o("p",[e._v("The policy will take effect immediately after installed into the firewall.")])])}),[],!1,null,null,null);t.default=r.exports}}]);