(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("h2",{attrs:{id:"what-is-fwcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-fwcloud"}},[e._v("#")]),e._v(" What is FWCloud")]),e._v(" "),a("p",[e._v("FWCloud is a web application that allows the centralized and secure administration of firewalls based on IPTables. It is an application in the cloud, which is essential to be able to use it from anywhere, at any time and with any device, but always with simple and secure access.")]),e._v(" "),a("p",[e._v("The application allows you to create logical groups of firewalls and firewall clusters together with their IP objects and VPN connections.\nYou can, for example, use one of these groups for each of your clients, or group all the firewalls at your company headquarters in them. We call these groups FWClouds and they are the reason for the application's name.")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/FWCloud-peace.png"),alt:"FWCloud"}}),a("br")]),e._v(" "),a("p",[e._v("FWCloud arose from the need to accelerate an important task of our daily work at SOLTECSIS, the administration of Linux-based firewalls.")]),e._v(" "),a("p",[e._v("FWCloud uses the latest technologies, is accessible through a web interface and includes our most needed functionalities such as VPN connection management, QoS, routing and more.")]),e._v(" "),a("p",[e._v("FWCloud is an open source project under the GNU Affero General Public License v3.")]),e._v(" "),a("p",[e._v("FWCloud is our contribution to the OpenSource community, from which we have drawn so much and for which we have much to be thankful for.")]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[e._v("FWCloud consist mainly of two modules, the user interface (FWCloud-UI) and the REST API (FWCloud-API), which handles all the actions requested by the user.")]),e._v(" "),a("h3",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),a("h4",{attrs:{id:"fwcloud-ui-the-front-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fwcloud-ui-the-front-end"}},[e._v("#")]),e._v(" FWCloud-UI (The Front-end)")]),e._v(" "),a("p",[a("code",[e._v("FWCloud-UI")]),e._v(" is the user interface that allows the user to manage the firewall clouds. It is a web interface accessible through browsers such as Chrome or Firefox, developed using the Angular framework thanks to which it has a desktop application behavior, even if it's ran within your web browser.")]),e._v(" "),a("p",[e._v("It is a fairly simple and intuitive application to manage for users accustomed to working with firewalls based on IPTables.")]),e._v(" "),a("h4",{attrs:{id:"fwcloud-api-the-back-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fwcloud-api-the-back-end"}},[e._v("#")]),e._v(" FWCloud-API (The Back-end)")]),e._v(" "),a("p",[a("code",[e._v("FWCloud-API")]),e._v(" allows us to become independent of the user interface, "),a("code",[e._v("FWCloud-UI")]),e._v(", to perform its tasks. Its REST API provides the means to carry out all the actions allowed by FWCloud, such as managing firewalls, rules and IP objects, compiling/installing policies, managing VPNs, etc. Also, any action performed using the API will be reflected immediately in the user interface.")]),e._v(" "),a("p",[e._v("The REST API is developed in Node.JS, a server side Javascript environment based on events that executes code asynchronously, performing all the actions allowed by the application. It's possible to access the API directly without using "),a("code",[e._v("FWCloud-UI")]),e._v(" to carry out automatic actions, such as blocking an IP address.")]),e._v(" "),a("h4",{attrs:{id:"other-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-modules"}},[e._v("#")]),e._v(" Other modules")]),e._v(" "),a("p",[e._v("Other modules that make up FWCloud are:")]),e._v(" "),a("p",[a("code",[e._v("FWCloud-Websrv")])]),e._v(" "),a("p",[e._v("Web server for downloading "),a("code",[e._v("FWCloud-UI")]),e._v(" and proxy API requests to "),a("code",[e._v("FWCloud-API")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("FWCloud-Updater")])]),e._v(" "),a("p",[e._v("Its main purpose is allow the updating of the "),a("code",[e._v("FWCloud-UI")]),e._v(" and "),a("code",[e._v("FWCloud-API")]),e._v(" modules through "),a("code",[e._v("FWCloud-UI")]),e._v(". The update requests are forwarded from the "),a("code",[e._v("FWCloud-API")]),e._v(" to the "),a("code",[e._v("FWCloud-Updater")])]),e._v(" "),a("p",[a("code",[e._v("FWCloud-Installer")])]),e._v(" "),a("p",[e._v("Script to install FWCloud in a simple and guided way. It allows you to install a complete FWCloud system in a matter of a few minutes.")]),e._v(" "),a("h3",{attrs:{id:"access-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-modes"}},[e._v("#")]),e._v(" Access modes")]),e._v(" "),a("p",[e._v("The user accesses the FWCloud server by means of the URL, that was obtained during installation, through his web browser. At that time, the "),a("code",[e._v("FWCloud-UI")]),e._v(" user interface starts downloading automatically.\nOnce the application is downloaded in the web browser, it begins to run, displaying the login screen. From this point on, any action that is performed in "),a("code",[e._v("FWCloud-UI")]),e._v(" (for example, completing the login process) will be performed through the "),a("code",[e._v("FWCloud-API")]),e._v(" which is accessed by "),a("code",[e._v("FWCloud-UI")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/FWCloud-architecture.png"),alt:"FWCloud Architecture"}}),a("br")]),e._v(" "),a("p",[e._v("FWCloud-UI can access FWCloud-API by means of two different ways: direct and proxy mode.")]),e._v(" "),a("h4",{attrs:{id:"fwcloud-api-direct-mode-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fwcloud-api-direct-mode-access"}},[e._v("#")]),e._v(" FWCloud-API Direct Mode Access")]),e._v(" "),a("p",[e._v("When using the direct mode the "),a("code",[e._v("FWCloud-UI")]),e._v(" application connects to the node server where the API is running using the API URL, for example https://api.fwcloud.net:3131")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/FWCloud-API-direct.png"),alt:"FWCloud-API direct mode access"}}),a("br")]),e._v(" "),a("p",[a("code",[e._v("FWCloud-UI")]),e._v(" is running in our browser, therefore it must have direct access to the API URL.")]),e._v(" "),a("p",[e._v("This mode of operation has the drawback that we need valid TLS certificates so that the browser can safely access the API from the "),a("code",[e._v("FWCloud-UI")]),e._v(" application.")]),e._v(" "),a("h4",{attrs:{id:"fwcloud-api-proxy-mode-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fwcloud-api-proxy-mode-access"}},[e._v("#")]),e._v(" FWCloud-API Proxy Mode Access")]),e._v(" "),a("p",[e._v("In this access mode, the user interface does not connect directly to the API, but rather through the web server, "),a("code",[e._v("FWCloud-Websrv")]),e._v(", from which we have downloaded the "),a("code",[e._v("FWCloud-UI")]),e._v(" application.")]),e._v(" "),a("p",[a("code",[e._v("FWCloud-Websrv")]),e._v(" acts as a proxy by forwarding all URLs that start with /api/ or /socket.io/ to "),a("code",[e._v("FWCloud-API")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/FWCloud-API-proxy.png"),alt:"FWCloud-API proxy mode access"}}),a("br")]),e._v(" "),a("p",[e._v("This has the advantage that it avoids the need for direct access to the API URL from the user terminal, it is only necessary to have access to the web server where "),a("code",[e._v("FWCloud-UI")]),e._v(" is located.")]),e._v(" "),a("p",[e._v("It is the default installation option and the one implemented when using the "),a("code",[e._v("FWCloud-Installer")]),e._v(" script to install a new FWCloud platform from scratch.")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("FWCloud is an OpenSource project under the GNU Affero General Public License v3.")]),e._v(" "),a("p",[e._v("You can install it in your own servers, or alternatively, you can contact us to use our cloud service FWCloud.net to manage your firewall clouds.")]),e._v(" "),a("p",[e._v("We provide an installation script that will guide you in the process.")]),e._v(" "),a("p",[e._v("You can download FWCloud installation script using curl. If it is not in your system, please install it.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -y\n")])])]),a("p",[e._v("Next you can run the following commands to run FWCloud-Installer:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -k -s https://raw.githubusercontent.com/soltecsis/fwcloud-installer/main/fwcloud-installer.sh -o ./fwcloud-installer.sh \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" ./fwcloud-installer.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -f ./fwcloud-installer.sh\n")])])]),a("p",[e._v("FWCloud-Installer will start the installation process, during which it will perform various checks to verify that your system meets all the requirements to install FWCloud, and among other things it will install the necessary packages, create the database, perform the necessary configurations and also will generate the self-signed TLS certificates.")]),e._v(" "),a("p",[e._v("The script will ask you some questions in case we want to customize our installation. For example, if your sever is behind a web proxy or not, or if you want to use TLS certificates, etc.")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/installation-script.png"),alt:"Installation"}}),a("br")]),e._v(" "),a("p",[e._v("As a general rule, the default values for these questions are usually correct.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you launch FWCloud-Installer on a server that already has a FWCloud installation, the script will try to update it. The update can be done from the user interface, therefore, it is not necessary to use the script for this task.")])]),e._v(" "),a("p",[e._v("Once the installation process has been successfully completed, you will be presented with a summary with the data that we have to use to access your newly installed FWCloud server.")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/installation-complete.png"),alt:"Installation Complete"}}),a("br")]),e._v(" "),a("p",[e._v("Once the installation is complete, we can use the systemctl command to stop, start or view the status of the different services that are part of a FWCloud platform: FWCloud-Websrv, FWCloud-API and FWCloud-Updater.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status fwcloud-api\n● fwcloud-api.service – FWCloud-API\n  Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("/etc/systemd/system/fwcloud-api.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" vendor preset: enabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" since Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("-06-07 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":58:01 UTC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" 8s ago\nMain PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14359")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n   Tasks: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("limit: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1109")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  CGroup: /system.slice/fwcloud-api.service\n          └─14359 /usr/bin/node /opt/fwcloud-api/bin/www\n\nJun 07 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":58:01 fwcloud-vm systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": Started FWCloud-API.\n")])])]),a("p",[e._v("All you have to do now is use your favorite web browser to access the indicated URL using the default access data:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Customer code:")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("1")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Username:")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("fwcadmin")])]),e._v(" "),a("tr",[a("td",[e._v("Password:")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("fwcadmin")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/llogin.png"),alt:"Login"}}),a("br")]),e._v(" "),a("h2",{attrs:{id:"support-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-documentation"}},[e._v("#")]),e._v(" Support / Documentation")]),e._v(" "),a("p",[e._v("Throughout this document we will give you full information about FWCloud-UI as well as references to video tutorial that will help you to understand how to use FWCloud and the most advisable use practices.")]),e._v(" "),a("p",[e._v("You can obtain more information visiting our "),a("a",{attrs:{href:"https://fwcloud.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web site"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("There you will find a documentation section that includes more information, the last version of this manual and the complete collection of "),a("a",{attrs:{href:"https://fwcloud.net/en/documentation/user-interface/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Video Tutorials"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/docs_web.png"),alt:"Web"}}),a("br")]),e._v(" "),a("p",[e._v("We invite you to subscribe to our "),a("a",{attrs:{href:"https://www.youtube.com/channel/UChO0Z9KP2ekRdXMowyyAfOA",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouTube channel"),a("OutboundLink")],1),e._v(", which we update as we add new features to FWCloud.")]),e._v(" "),a("p",[e._v("You can get help and place any questions or suggestions you have in our "),a("a",{attrs:{href:"https://forum.fwcloud.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forum"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/forum.png"),alt:"Forum"}}),a("br")]),e._v(" "),a("p",[e._v("You are welcome to download the code and contribute to the FWCloud community from the "),a("a",{attrs:{href:"https://github.com/soltecsis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github repositories"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Also if you require any information please contact us by e-mail "),a("img",{attrs:{src:e.$withBase("/assets/img/e-mail.png"),alt:"e-mail"}}),a("br"),e._v(" or using our contact form:")]),e._v(" "),a("p",[a("img",{attrs:{src:e.$withBase("/assets/img/contact-form.png"),alt:"Contact Form"}}),a("br")])])}),[],!1,null,null,null);t.default=o.exports}}]);