(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[e._v("#")]),e._v(" Objects")]),e._v(" "),s("h2",{attrs:{id:"ip-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-objects"}},[e._v("#")]),e._v(" IP Objects")]),e._v(" "),s("p",[e._v("FWCloud supports a variety of object types like Addresses, Ranges, Networks, Domain names, Hosts, IPTables marks and Groups.\nThink in objects like a more convenient way to refer an element of a firewall rule or a VPN configuration.")]),e._v(" "),s("p",[e._v("For example instead of using '224.0.0.5' you can use 'OSFP (all routers)' that is more readable, or you can use 'First flour switches' instead of including in your rule all IP addresses of the switches of that particular flour.")]),e._v(" "),s("p",[e._v("Every kind of objet has its own block. Check next sections in this help to know which fields has every type of objects.")]),e._v(" "),s("h3",{attrs:{id:"addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addresses"}},[e._v("#")]),e._v(" Addresses")]),e._v(" "),s("p",[e._v("Represent an IP address in both IPv4 and IPv6. To add new IP addresses, just hover the mouse over "),s("code",[e._v("IP Address")]),e._v(" and select "),s("code",[e._v("New IP address")]),e._v(" from the context menu.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/new_ip_address.png"),alt:"New IP Address"}}),s("br")]),e._v(" "),s("p",[e._v("You get a new form, the fields of this objects are: name, address, netmask, IP version and comments.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/address.png"),alt:"Address"}}),s("br")]),e._v(" "),s("p",[e._v("If you expand "),s("code",[e._v("IP Address")]),e._v(" block you see a subsection called "),s("code",[e._v("Standard")]),e._v(". For your convenience the wellknown standard IP addresses has been included inside.")]),e._v(" "),s("p",[e._v("Here you have a list of the IP addresses in the "),s("code",[e._v("Standard")]),e._v(" block:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Address")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("all DVMRP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.4")])]),e._v(" "),s("tr",[s("td",[e._v("all-hosts")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.1")])]),e._v(" "),s("tr",[s("td",[e._v("all-routers")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.2")])]),e._v(" "),s("tr",[s("td",[e._v("DHCP server, relay agent")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.12")])]),e._v(" "),s("tr",[s("td",[e._v("EIGRP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.10")])]),e._v(" "),s("tr",[s("td",[e._v("HSRP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.102")])]),e._v(" "),s("tr",[s("td",[e._v("IGMP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.22")])]),e._v(" "),s("tr",[s("td",[e._v("LLMNR")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.252")])]),e._v(" "),s("tr",[s("td",[e._v("mDNS")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.251")])]),e._v(" "),s("tr",[s("td",[e._v("OSPF (all routers)")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.5")])]),e._v(" "),s("tr",[s("td",[e._v("OSPF (designated routers)")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.6")])]),e._v(" "),s("tr",[s("td",[e._v("OSPFIGP-TE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.24")])]),e._v(" "),s("tr",[s("td",[e._v("PIM")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.13")])]),e._v(" "),s("tr",[s("td",[e._v("RIP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.9")])]),e._v(" "),s("tr",[s("td",[e._v("RSVP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.14")])]),e._v(" "),s("tr",[s("td",[e._v("Teredo")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.253")])]),e._v(" "),s("tr",[s("td",[e._v("VRRP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("224.0.0.18")])])])]),e._v(" "),s("h3",{attrs:{id:"address-ranges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#address-ranges"}},[e._v("#")]),e._v(" Address Ranges")]),e._v(" "),s("p",[e._v("Allow you to define a range of IP addresses, and give it a name you can use in the policy rules, for instance from 192.168.1.0 to 192.168.4.231.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/range.png"),alt:"Address Range"}}),s("br")]),e._v(" "),s("p",[e._v("Two "),s("code",[e._v("Standard")]),e._v(" address ranges has been included:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Range start")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Range end")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("broadcast")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("255.255.255.255")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("255.255.255.255")])]),e._v(" "),s("tr",[s("td",[e._v("old-broadcast")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("0.0.0.0")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("0.0.0.0")])])])]),e._v(" "),s("h3",{attrs:{id:"networks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#networks"}},[e._v("#")]),e._v(" Networks")]),e._v(" "),s("p",[e._v("You can define a network (Visitor LAN, Control network, etc.) using the IP address and its net mask.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/networks.png"),alt:"Networks"}}),s("br")]),e._v(" "),s("p",[e._v("Also this section includes a list with the "),s("code",[e._v("Standard")]),e._v(" networks")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/standard_networks.png"),alt:"Standard Networks"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[e._v("#")]),e._v(" DNS")]),e._v(" "),s("p",[e._v("If your servers or routers have dynamic IP address you can use the FQDN. This is quite useful when creating the configuration file of a VPN connection. (Visit "),s("RouterLink",{attrs:{to:"/docs/Sections/VPN/"}},[e._v(" VPN ")]),e._v(" section )")],1),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/dns.png"),alt:"DNS"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hosts"}},[e._v("#")]),e._v(" Hosts")]),e._v(" "),s("p",[e._v("You can define a host by its name and then define its network interfaces and the IP addresses. Then when you include that IP address in a rule it will be more easy to identify which host it belongs to.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/host.png"),alt:"Host"}}),s("br")]),e._v(" "),s("p",[e._v("Let's see some policy rules including this new defined host:")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/hostInARule.png"),alt:"Rule with host IP"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"iptables-marks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iptables-marks"}},[e._v("#")]),e._v(" IPTables Marks")]),e._v(" "),s("p",[e._v("You can create marks values to get them associated with specific packets and then do advanced routing or set different queueing strategies. This marks are only valid within the mangle table. In FWCloud-UI marks have a name an code, an integer value that is actually the mark when translated into IPTables syntax.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/marks.png"),alt:"Marks"}}),s("br")]),e._v(" "),s("p",[e._v("To use these marks drag them from the Objects section and drop them in the Action field of the the policy rules.")]),e._v(" "),s("h3",{attrs:{id:"groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),s("p",[e._v("This objects acts as a container of other objects. This way you can have a group that includes some of your networks, or some IP address of your organization that are related in same way, and use then as a whole. For instance one of the groups already defined is "),s("code",[e._v("rfc1918-nets")]),e._v(" that includes all of the IPv4 addresses for private networks. This group is formed from three previously defined network objects.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/groups.png"),alt:"Groups"}}),s("br")]),e._v(" "),s("p",[e._v("Here you can see the groups already defined in the "),s("code",[e._v("Standard")]),e._v(" block:")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/standard_groups.png"),alt:"Standard Groups"}}),s("br")]),e._v(" "),s("h2",{attrs:{id:"services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),s("p",[e._v("In any Policy rule you have to add the services involved, or any, to restrict the scope of the rule. In FWCloud-UI this is done by dropping services from the "),s("code",[e._v("Services")]),e._v(" block.")]),e._v(" "),s("p",[e._v("If you expand this block the services are classified into five main groups:IP, ICMP, TCP, UDP and Groups.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/services.png"),alt:"Services"}}),s("br")]),e._v(" "),s("p",[e._v("All categories include a subsection with the "),s("code",[e._v("Standard")]),e._v(" block of services included.")]),e._v(" "),s("h3",{attrs:{id:"ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[e._v("#")]),e._v(" IP")]),e._v(" "),s("p",[e._v('Here you can add the IP protocol numbers. This is the value you can find in the field "Protocol" in IPv4 or in "Next Header" in IPv6. The numbers defined by IANA has been defined yet inside the '),s("code",[e._v("Standard")]),e._v(" folder.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceIP-standard.png"),alt:"IP Service Standard"}}),s("br")]),e._v(" "),s("p",[e._v("In order to add a new object of IP service type, just right click  over "),s("code",[e._v("IP")]),e._v(" and select "),s("code",[e._v("New IP service")]),e._v(" and fill the form with the name and the protocol number")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceIP.png"),alt:"IP Service"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"icmp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icmp"}},[e._v("#")]),e._v(" ICMP")]),e._v(" "),s("p",[e._v("In this section you have the "),s("code",[e._v("ICMP service")]),e._v(" objects that make reference to the messages of the Internet Control Messages Protocol. In the "),s("code",[e._v("Standard")]),e._v(" folder you have the ICMP messages defined in the RFC documents. To add a new one you need to write the name, its ICMP type and its ICMP code.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceICMP.png"),alt:"ICMP Service"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[e._v("#")]),e._v(" TCP")]),e._v(" "),s("p",[e._v("This type of objects makes reference to the TCP port numbers designated for used with a certain protocols or applications. In the "),s("code",[e._v("Standard")]),e._v(" folder has been included vast list of the well-known and the registered ports.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceTCP-standard.png"),alt:"TCP Service"}}),s("br")]),e._v(" "),s("p",[e._v("As with the other types of objects you can add more to suit your needs.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceTCP-new.png"),alt:"New TCP Service"}}),s("br")]),e._v(" "),s("p",[e._v("Note that when defining a new TCP service, you can customize the source port and the destination port. Usually only the destination port is used.")]),e._v(" "),s("p",[e._v("You can also specify the TCP flags. This option accepts two parameters. The first parameter is the mask, which sets the flags to be examined in the packet. The second parameter refers to the flag that must be set in order to match the rule.")]),e._v(" "),s("p",[e._v("For example if you want all the flags to be examined but only ACK and SYN must be active:")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceTCP-flags.png"),alt:"TCP Flags"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"udp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[e._v("#")]),e._v(" UDP")]),e._v(" "),s("p",[e._v("This type of objects make reference to the UDP port numbers designated for used with a certain protocols or applications. In the "),s("code",[e._v("Standard")]),e._v(" folder has been included vast list of the well-known and the registered ports.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceUDP-standard.png"),alt:"UDP Service Standard"}}),s("br")]),e._v(" "),s("p",[e._v("More ports can be added to this list when needed.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/serviceUDP-new.png"),alt:"New UDP Service"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"groups-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#groups-2"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),s("p",[e._v('For simplicity and better reading of the policy rules, several services can be grouped together and referenced by a group name. For instance you can create a group called "SMTP-Ports" and include following TCP services in it: smtp (25), smtp-MSA(587) and smtps(465)')]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/service-groups.png"),alt:"Service Groups"}}),s("br")]),e._v(" "),s("p",[e._v("FWCloud-UI came with three groups included in the "),s("code",[e._v("Standard")]),e._v(" folder, they are called: DHCP, NETBIOS and Useful ICMP. You can use them or as an example for creating your new own groups.")]),e._v(" "),s("h2",{attrs:{id:"searching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searching"}},[e._v("#")]),e._v(" Searching")]),e._v(" "),s("p",[e._v("In order to quickly find any of the objects you can use the search box.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/searchingBox3.png"),alt:"Search Box"}}),s("br")]),e._v(" "),s("p",[e._v("The content displayed in any of the sections: Firewalls, Objects or Services will be filtered by the text entered into the search box as you are typing, limiting the shown results. All folders and groups that have object names that match the searching pattern will be expanded to display them, no matter if they are standard objects or defined by the user.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/searching-exa.png"),alt:"Searching examples"}}),s("br")]),e._v(" "),s("p",[e._v("The default criteria is to match all but this option can be configured. At least one option must be checked, but you can check more than one.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/searching-ops.png"),alt:"Search Options"}}),s("br")]),e._v(" "),s("p",[e._v('The text pattern can be searched in the names of the objects ("Search by name"), or in their values. When "Search by TCP/UDP port" is selected, the port number of the pattern requires an exact match, because the result includes not only the object that has this port as its value but also all the ranges it is included in. That is, if 8080 is searched, the "TCP high ports" standard object also will also be displayed, among others, since its range goes from 1024 to 65535.')]),e._v(" "),s("p",[e._v("Once you find the object you are looking for you can drag and drop it on any rule of the security policy.")]),e._v(" "),s("p",[e._v("When you clear the search box everything will be expanded showing the full content of the sections.")]),e._v(" "),s("h2",{attrs:{id:"objects-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objects-operations"}},[e._v("#")]),e._v(" Objects operations")]),e._v(" "),s("h3",{attrs:{id:"duplicate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#duplicate"}},[e._v("#")]),e._v(" Duplicate")]),e._v(" "),s("p",[e._v("From the contextual menu of the objects they can be duplicated. This is useful when you are creating objects of the same type that have common properties. For instance several IP addresses that belong to the same network. All of them share the network address and mask. Instead of creating a new object for each you can create only the first one, duplicate it and then modify only the host part of the address.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/object-duplicate.png"),alt:"Duplicate Object"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"edit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit"}},[e._v("#")]),e._v(" Edit")]),e._v(" "),s("p",[e._v('In order to modify an object you can double click on its name or select "Edit" from the contextual menu. You will be presented a form with all the object properties. You can edit the values of these properties to suit your needs.')]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/object-edit.png"),alt:"Edit Object"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"where-used"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-used"}},[e._v("#")]),e._v(" Where used")]),e._v(" "),s("p",[e._v("Another feature very useful is that you can right click on any object of FWCloud-UI and select "),s("code",[e._v("Where used")]),e._v(" ffrom the contextual menu")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/where-used.png"),alt:"Where Used Option"}}),s("br")]),e._v(" "),s("p",[e._v('and a form pops up indicating all the places where this object is used. For example, the following figure show the objects and rules that make use of service object "smtps".')]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/where-used-form.png"),alt:"Where Used Form"}}),s("br")]),e._v(" "),s("p",[e._v('If we double click on any of the objects of the form it will head us to the place where the object is used. For instance, if whe double click on the rule 28 of the cluster named "Cluster FirstFW" we will be presented with the rule of this cluster policy and remaking the field than contains the object with a light blue background.')]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/where-used-rule.png"),alt:"Where Used Rule"}}),s("br")]),e._v(" "),s("p",[e._v("If you want to go the the next rule or group that use the object just click on the "),s("img",{attrs:{src:e.$withBase("/assets/img/where-used-icon.png"),alt:"Where Used icon"}}),e._v(' icon and you get back to the "Where used" window. This window will remark the object reviewed in light blue background.')]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/where-used-form-blue.png"),alt:"Where Used Form blued"}}),s("br")]),e._v(" "),s("h3",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" Delete")]),e._v(" "),s("p",[e._v("For any user created object there is an extra option in the contextual menu to delete de object.")]),e._v(" "),s("p",[e._v("If you try  deleting an object that is in use, FWCloud-UI is going to warn you about this and will not allow you to delete the object until the restrictions are removed.")]),e._v(" "),s("p",[e._v("A pop up windows will show where the object is being used.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/object-delete-notAllowed.png"),alt:"Delete Object Warning"}}),s("br")]),e._v(" "),s("p",[e._v("If you double click on any of the showed rules FWCloud-UI will redirect you to that rule remarking the object in light blue background.")]),e._v(" "),s("p",[e._v("There is another important restriction. If an object belongs to a group that only has this object and this group is used in a policy rule, then the object can not be deleted. This is because allowing to do that would lead to an incorrect policy. Let's see this with an example:")]),e._v(" "),s("p",[e._v("Imagine a public service group that has only the user-created service, TCP-1234, and that group is used in a rule that allows services in that group to access a server from the Internet.")]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/empty-group-rule.png"),alt:"Empty group rule"}}),s("br")]),e._v(" "),s("p",[e._v('If FWCloud-UI allowed the deletion of the TCP-1234 service (which is the only element of the group used in the rule), we would leave a rule that would allow access to any service (the group is empty) of that server. When compiled that rule would be:\n"$IPTABLES -A FORWARD -i eth0 -o eth1 -d 192.168.0.1 -m conntrack --ctstate NEW -j ACCEPT"\n, that probably is not our intention. So FWCloud-UI throws an error:')]),e._v(" "),s("p",[s("img",{attrs:{src:e.$withBase("/assets/img/empty-group-error2.png"),alt:"Empty group error"}}),s("br")])])}),[],!1,null,null,null);t.default=r.exports}}]);