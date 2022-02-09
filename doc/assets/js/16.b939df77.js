(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(e,t,a){"use strict";a.r(t);var s=a(42),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"firewalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewalls"}},[e._v("#")]),e._v(" Firewalls")]),e._v(" "),a("h2",{attrs:{id:"new-firewall-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-firewall-cluster"}},[e._v("#")]),e._v(" New firewall/Cluster")]),e._v(" "),a("h3",{attrs:{id:"new-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-firewall"}},[e._v("#")]),e._v(" New Firewall")]),e._v(" "),a("p",[e._v("To create a new firewall just right click over the "),a("code",[e._v("Firewalls/clusters")]),e._v(" tree root node and select "),a("code",[e._v("New firewall")]),e._v("from the menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_fw.png",alt:" New Firewall "}})]),e._v(" "),a("p",[e._v("You will presented a form in which you should write the name of your new firewall. Also you can fill in the "),a("code",[e._v("Description")]),e._v(" and the "),a("code",[e._v("SSH credentials")]),e._v(".")]),e._v(" "),a("p",[e._v("FWCloud requires SSH access to the firewall for manage it. When FWCloud needs access to this firewall it will use the SSH "),a("code",[e._v("User")]),e._v(" and "),a("code",[e._v("Password")]),e._v(" credentials defined here. If you don't supply these credentials, they will be requested when needed.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("For security you can keep the password field blank and the password will be asked every time when needed")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("SSH credentials")]),e._v(" "),a("p",[e._v("The SSH credentials sent from FWCloud-UI to FWCloud-API are encrypted using strong PGP public key cryptography with key pairs generated on the fly for each session")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_fw-form.png",alt:" New Firewall Form "}})]),e._v(" "),a("p",[e._v("The security policy is loaded into the firewall using a SSH connection. Therefore, we need to have SSH access from the FWCloud server to the destination firewall. For this connection the IP address assigned to the interface configured in the firewall will be used.")]),e._v(" "),a("p",[e._v("If your firewall is outside your premises, just use SSH over a VPN connection. In the VPN section you can see how easy is to create a VPN infrastructure using FWCloud-UI.")]),e._v(" "),a("p",[e._v("The firewall settings can be modified at any moment by double clicking the firewall or by right click and selecting "),a("code",[e._v("Edit firewall")]),e._v(" from the context menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/edit_fw.png",alt:" Edit Firewall "}})]),e._v(" "),a("p",[e._v("By editing the firewall settings you can select which interface, an IP address will use to access the firewall from the FWCloud-UI.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/edit_fw-form.png",alt:" Edit Firewall Form "}})]),e._v(" "),a("h3",{attrs:{id:"new-cluster-of-firewalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-cluster-of-firewalls"}},[e._v("#")]),e._v(" New Cluster of Firewalls")]),e._v(" "),a("p",[e._v("To create a new cluster of firewalls just right click and select "),a("code",[e._v("New cluster")]),e._v(" from the context menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_cluster.png",alt:" New Cluster "}})]),e._v(" "),a("p",[e._v("Give a name to the cluster and add as many nodes as your cluster has and save the changes.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_cluster-form.png",alt:" New Cluster Form "}})]),e._v(" "),a("p",[e._v("The cluster settings can by modified at any name by double clicking on the cluster name or just right click and select "),a("code",[e._v("Edit")]),e._v(" from the context menu.")]),e._v(" "),a("p",[e._v("Also the setting of any of the nodes can be changed by double clicking over the node name.")]),e._v(" "),a("h3",{attrs:{id:"new-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-folder"}},[e._v("#")]),e._v(" New Folder")]),e._v(" "),a("p",[e._v("For organizational purposes "),a("code",[e._v("Folders")]),e._v(" can be created. Inside them you can place your firewalls, clusters of firewalls and even more folders")]),e._v(" "),a("p",[e._v("Folders as many other elements in the FWCloud-UI can be collapsed of expanded to better focus in the parts you are working on.")]),e._v(" "),a("p",[e._v("You can rename or remove any folder.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("In order to remove a folder it needs to be empty")])]),e._v(" "),a("h2",{attrs:{id:"firewall-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-interfaces"}},[e._v("#")]),e._v(" Firewall Interfaces")]),e._v(" "),a("h3",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),a("p",[e._v("When configuring the firewall or firewalls cluster you have to set up its network interfaces.")]),e._v(" "),a("p",[e._v("You do not need to set up all interfaces, for simplicity you only need to define the ones that are going to be used by the firewall's policy. But in order to be able to install the policy in the firewall, at least one interface needs to be defined. The loopback interface is automatically defined when a new firewall is created. This can be used if FWCloud and the firewall you are configuring are going to be in the same device. To select which interface it will use edit the settings of the firewall. See "),a("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#new-firewall"}},[e._v(" Firewall ")]),e._v(".")],1),e._v(" "),a("p",[e._v("To add a new interface just right click over "),a("code",[e._v("Interfaces")]),e._v(" and select "),a("code",[e._v("New interface")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_interface.png",alt:" New Interface "}})]),e._v(" "),a("p",[e._v("A form pops up, where you can set up the object name, that is the interface names like eth0 or ens1, a label, the MAC address and a comment. Only the interface name is mandatory. Since this name can be included in the policy please use the real name of your device, if not the policy rules affected will not do we they are intended to do.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_interface-form.png",alt:" New Interface Form "}})]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("The name of interface matters")]),e._v(" "),a("p",[e._v("The name of the interface can be used in some of yours security policy rules")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("LABEL your interfaces")]),e._v(" "),a("p",[e._v("If you want something more informative than the name of the interface then use the label field. Example labels: WAN1, WAN2, DMZ, LAN1, LAN2, etc.")])]),e._v(" "),a("p",[e._v("In order to simplify this tedious process of firewall interfaces and IP addresses creation, FWCloud has a very powerful feature called "),a("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#autodiscover"}},[e._v(" Autodiscover ")]),e._v(". It makes possible to connect to the firewall by means of an SSH connection and automatically get and create in FWCloud all the interfaces and IP addresses that it has.")],1),e._v(" "),a("p",[e._v("Once interfaces are added, they can be edited, duplicated or deleted. Right click on the interface name to get the context menu.\nIn this menu there is also a convenient action called "),a("code",[e._v("Where use")]),e._v(". It will head you to the policy rules or objects that use the selected interface. It comes very handy to find a rule.")]),e._v(" "),a("p",[e._v("The interfaces can have configured IP addresses. They are set up by right clicking over the interface and selecting "),a("code",[e._v("New IP address")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_ip.png",alt:" New IP Address "}})]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/new_ip-form.png",alt:" New IP Address Form "}})]),e._v(" "),a("h3",{attrs:{id:"autodiscover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autodiscover"}},[e._v("#")]),e._v(" Autodiscover")]),e._v(" "),a("p",[e._v("FWCloud has a very handy utility to autodiscover the interfaces and IP addresses a firewall actually has and trasfer then into the FWCloud configuration. When your are doing the initial configuration it can save you a lot of time and more importantly it avoids any misspelling in the data.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("New interfaces or IPs")]),e._v(" "),a("p",[e._v("You can use the autodiscover feature every time you add new interfaces and/or IPs to your firewall/cluster as an easy way to incorporate them to FWCloud")])]),e._v(" "),a("p",[e._v("To access this utility double click on the firewall name and go to the "),a("code",[e._v("Interfaces/IPs")]),e._v(" tab in the pop up windows.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_edit-tab2.png",alt:" Edit Firewall Tab 2"}})]),e._v(" "),a("p",[e._v("Select the filters you want to apply and press "),a("code",[e._v("Discover")]),e._v(" button. On the left side the new items discovered according to the filters applied will appear in a tree-shaped representation.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/discover-form1.png",alt:" Discover select "}})]),e._v(" "),a("p",[e._v("When hover the mouse over an interface name a pencil icon "),a("img",{attrs:{src:"/assets/img/pencil.png",alt:" pencil "}}),e._v(" appears, if you click on it you can modify the properties of the interface or the IP address.")]),e._v(" "),a("p",[e._v("It is possible too form this section to select the IP that will be used for firewall management. If you are in a cluster, you will be able to select the install IP for each cluster's node.")]),e._v(" "),a("p",[e._v("In the autodiscover tree select the items that you want to incorporate in your FWCloud firewall and, when you press the "),a("code",[e._v("Save changes")]),e._v(" button, all the changes will be applied to the firewall/cluster you are editing.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/discover-form2.png",alt:" Discover selected "}})]),e._v(" "),a("p",[e._v("A new windows will show a summary of the actions done and the new interfaces and IP addresses are now part of your firewall configuration. You can edit them or do all the actions interfaces allows.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/discover-summary.png",alt:" Discover summary "}})]),e._v(" "),a("h2",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),a("h3",{attrs:{id:"compile-one-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-one-firewall"}},[e._v("#")]),e._v(" Compile One Firewall")]),e._v(" "),a("p",[e._v("The policy rules of the firewall need to be compiled prior to be installed into the firewall. That is, we are managing the firewall policy offline and, when ready, we can upload it to the corresponding firewall or firewalls cluster nodes.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Icons")]),e._v(" "),a("p",[e._v("An orange "),a("img",{attrs:{src:"/assets/img/C.png",alt:" C "}}),e._v(" at te left of the firewall's name indicates that the firewall policy needs to be compiled")])]),e._v(" "),a("p",[e._v("This action will generate all iptables rules and chains needed by the policy specified graphically in the policy panel.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/compile_fw.png",alt:" Compile Firewall "}})]),e._v(" "),a("p",[e._v(", and hit next")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/compile_fw-form.png",alt:" Compile Firewall Form "}})]),e._v(" "),a("p",[e._v("If no problems occur a green message will show the success.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/compiled_ok.png",alt:" Successfully Compiled "}})]),e._v(" "),a("h3",{attrs:{id:"compile-all-firewalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-all-firewalls"}},[e._v("#")]),e._v(" Compile All Firewalls")]),e._v(" "),a("p",[e._v("Instead of compiling all firewalls one by one we can save time and do it all together.")]),e._v(" "),a("p",[e._v("From the menu option all firewalls and clusters within the managed cloud can be compiled.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/compile_all.png",alt:" Compile All "}})]),e._v(" "),a("p",[e._v(", or using the upper button")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/compile_all-btn.png",alt:" Compile All bnt "}})]),e._v(" "),a("p",[e._v("See also "),a("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#compile-one-firewall"}},[e._v(" Compile One Firewall ")]),e._v(" section")],1),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("h3",{attrs:{id:"install-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-firewall"}},[e._v("#")]),e._v(" Install Firewall")]),e._v(" "),a("p",[e._v("The security policy you have defined in FWCloud-UI needs to be installed in the firewall (or nodes that make up a firewalls cluster).")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Icons")]),e._v(" "),a("p",[e._v("An orange "),a("img",{attrs:{src:"/assets/img/I.png",alt:" I "}}),e._v(" at the left side of the firewall's name indicates there are changes in the policy pending to be installed")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/install_fw.png",alt:" Install Firewall "}})]),e._v(" "),a("p",[e._v("Previously to install it you need to compile the policy. This can be done by selecting Compile option in the firewall menu or directly when installing by marking the square box "),a("code",[e._v("Compile")]),e._v(". If the firewall requires policy compilation the checkbox will be checked automatically.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/install_fw-form.png",alt:" Install Firewall Form "}})]),e._v(" "),a("p",[e._v("FWCloud will install the policy compilation script in the destination firewall by means of SSH and using the IP address you have setup in the Firewall configuration. This address can be modified editing the firewall settings.")]),e._v(" "),a("p",[e._v("If no interface is set, the firewall will not be reachable and you will get an error.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/error_no_interfaces.png",alt:" Error No Interfaces "}})]),e._v(" "),a("p",[e._v("Before the installation begins you will be asked to supply the SSH username and the password if not saved in the firewall's configuration. For security reasons we recommend not to save it.")]),e._v(" "),a("h3",{attrs:{id:"install-all-fws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-all-fws"}},[e._v("#")]),e._v(" Install All FWs")]),e._v(" "),a("p",[e._v("Instead of installing all firewalls one by one you can save time and do it all together.")]),e._v(" "),a("p",[e._v("From the menu option all firewalls and clusters within the managed cloud can be installed.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/install_all.png",alt:" Install All "}})]),e._v(" "),a("p",[e._v(", or using the upper button")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/install_all-btn.png",alt:" Install All bnt "}})]),e._v(" "),a("p",[e._v("The SSH username and the password of all firewalls will be asked if they are not saved in the firewall's configuration. For security reasons we recommend to not save them.")]),e._v(" "),a("p",[e._v("See also "),a("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#install-firewall"}},[e._v(" How to install the policy of a Firewall ")]),e._v(" section")],1),e._v(" "),a("h2",{attrs:{id:"others-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#others-actions"}},[e._v("#")]),e._v(" Others actions")]),e._v(" "),a("h3",{attrs:{id:"edit-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-firewall"}},[e._v("#")]),e._v(" Edit Firewall")]),e._v(" "),a("p",[e._v("You can edit the settings of the firewall by double clicking on the name of the firewall or right click on it and select "),a("code",[e._v("Edit firewall")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/edit_fw.png",alt:" Edit Firewall "}})]),e._v(" "),a("p",[e._v('A new widows with three tabs pops up. The first tab is named "Configuration". Here you can change the name of your firewall, add a description, change the username and its password used to access the firewall when installing the policy or the VPN configurations, and finally select the interface and IP address to reach to the firewall.')]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_edit-tab1.png",alt:" Edit Firewall Tab 1"}})]),e._v(" "),a("p",[e._v("In the second tab you can see a tree with all network interfaces and associated IP addresses. When hover the mouse over an interface name a pencil icon "),a("img",{attrs:{src:"/assets/img/pencil.png",alt:" pencil "}}),e._v(" appears, if you click on it you can modify the properties of the interface or the IP address. In this tab there is also a handy utility to discover the the interfaces and IP addresses that actually your firewall has and copy them into the firewall configuration in FWCloud-UI. See "),a("RouterLink",{attrs:{to:"/docs/Sections/Firewalls/#autodiscover"}},[e._v(" Autodiscover ")]),e._v(" section upper in this help.")],1),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_edit-tab2.png",alt:" Edit Firewall Tab 2"}})]),e._v(" "),a("p",[e._v("In the third tab you can set up several firewall options.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_edit-tab3.png",alt:" Edit Firewall Tab 3"}})]),e._v(" "),a("h3",{attrs:{id:"clone-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-firewall"}},[e._v("#")]),e._v(" Clone Firewall")]),e._v(" "),a("p",[e._v("If you are going to install a new firewall and it will have several similar characteristics and features to another one, you can make a clone of the actual firewall and configure the different parts to fit your new firewall.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_clone.png",alt:" Clone Firewall "}})]),e._v(" "),a("p",[e._v("This will ask you to name the new firewall and will create a copy.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_clone-form.png",alt:" Clone Firewall Form "}})]),e._v(" "),a("h3",{attrs:{id:"convert-to-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convert-to-cluster"}},[e._v("#")]),e._v(" Convert to Cluster")]),e._v(" "),a("p",[e._v("In order to have HA you can a have a cluster of firewalls. In FWCloud-UI you will manage the policy rules and the VPN connections for the cluster, although you can set specific rules that only affect to particular node of the cluster. If you have been using a firewall in FWCloud and now it belongs to a cluster you can convert it into a single node cluster.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_convert.png",alt:" Convert to Cluster "}})]),e._v(" "),a("p",[e._v("You will need to confirm the action.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fw_convert-form.png",alt:" Convert to Cluster Confirmation "}})]),e._v(" "),a("p",[e._v("It will be converted into a cluster of firewalls with only one node. You can edit the properties of the cluster and add the rest of nodes.")]),e._v(" "),a("p",[e._v("Also a cluster of firewalls can be converted into a firewall if needed.")]),e._v(" "),a("h3",{attrs:{id:"delete-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-cluster"}},[e._v("#")]),e._v(" Delete Cluster")]),e._v(" "),a("p",[e._v("You can remove a cluster of firewalls from FWCloud-UI by means of the corresponding menu option.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/delete_cluster.png",alt:" Delete Firewall "}})]),e._v(" "),a("p",[e._v("It requires confirmation.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/delete_cluster-form.png",alt:" Delete Firewall Form "}})]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If any of the cluster objects (interfaces, IPs, VPNs, etc.) are in use by other firewalls/clusters policy, it will not be possible to remove it and an error message will be displayed")])]),e._v(" "),a("h3",{attrs:{id:"delete-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-firewall"}},[e._v("#")]),e._v(" Delete Firewall")]),e._v(" "),a("p",[e._v("You can remove a firewall from FWCloud-UI from the contextual menu.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/delete_fw.png",alt:" Delete Firewall "}})]),e._v(" "),a("p",[e._v("It requires confirmation.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/delete_fw-form.png",alt:" Delete Firewall Form "}})]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If any of the cluster objects (interfaces, IPs, VPNs, etc.) are in use by other firewalls/clusters policy, it will not be possible to remove it and an error message will be displayed")])])])}),[],!1,null,null,null);t.default=i.exports}}]);