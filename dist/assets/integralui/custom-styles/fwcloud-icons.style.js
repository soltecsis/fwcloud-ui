import { css } from 'app/integralui/external/lit-element';

export const FwcloudIconsStyle = css`
  .fwcBlue {
    color: var(--fwcBlue);
  }
  .fwcOrange {
    color: var(--fwcOrange);
  }
  .fwcDarkBlue {
    color: var(--fwcDarkBlue);
  }
  .fwcGreen {
    color: var(--fwcGreen);
  }
  .fwcRed {
    color: var(--fwcRed);
  }
  
  @font-face {
    font-family: 'fwcIcons';
    src: url('../fonts/fwcIcons.eot');
    src: url('../fonts/fwcIcons.eot?#iefix') format('embedded-opentype'),
         url('../fonts/fwcIcons.woff') format('woff'),
         url('../fonts/fwcIcons.ttf') format('truetype'),
         url('../fonts/fwcIcons.svg#fwcIcons') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  [class*='fwci-']:before {
    display: inline-block;
    font-family: 'fwcIcons';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .fwci-cloud:before { content: '\\0041'; }
  .fwci-firewalls:before { content: '\\0042'; font-size: 17px !important;}
  .fwci-firewall:before { content: '\\0043'; font-size: 15px !important; }
  .fwci-filterpolicies:before { content: '\\0044'; font-size: 17px !important;}
  .fwci-input:before { content: '\\0045'; font-size: 17px !important; }
  .fwci-output:before { content: '\\0046'; font-size: 17px !important; }
  .fwci-forward:before { content: '\\0047'; font-size: 17px !important; }
  .fwci-nat:before { content: '\\0048'; font-size: 17px !important;}
  .fwci-snat:before { content: '\\0049'; font-size: 17px !important; }
  .fwci-dnat:before { content: '\\004a'; font-size: 17px !important; }
  .fwci-routing:before { content: '\\004b'; font-size: 17px !important; }
  .fwci-interfaces:before { content: '\\004c'; font-size: 17px !important; }
  .fwci-interface:before { content: '\\004d'; font-size: 17px !important; }
  .fwci-ipobjects:before { content: '\\004e'; font-size: 17px !important; }
  .fwci-addresses:before { content: '\\004f'; font-size: 17px !important; }
  .fwci-address:before { content: '\\0050'; font-size: 17px !important;}
  .fwci-addressranges:before { content: '\\0051'; font-size: 17px !important; }
  .fwci-addressrange:before { content: '\\0052'; font-size: 17px !important; }
  .fwci-networks:before { content: '\\0053'; font-size: 17px !important; }
  .fwci-network:before { content: '\\0054'; font-size: 17px !important; }
  .fwci-hosts:before { content: '\\0055'; font-size: 17px !important; }
  .fwci-host:before { content: '\\0056'; font-size: 17px !important; }
  .fwci-objectgroups:before { content: '\\0057'; font-size: 17px !important; }
  .fwci-objectgroup:before { content: '\\0058';  font-size: 17px !important;}
  .fwci-services:before { content: '\\0059';  font-size: 17px !important;}
  .fwci-ipservices:before { content: '\\005a'; font-size: 17px !important;}
  .fwci-ipservice:before { content: '\\0061'; font-size: 17px !important;}
  .fwci-tcpservices:before { content: '\\0062'; font-size: 17px !important; }
  .fwci-tcpservice:before { content: '\\0063'; font-size: 17px !important; }
  .fwci-icmpservices:before { content: '\\0064'; font-size: 17px !important; }
  .fwci-icmpservice:before { content: '\\0065'; font-size: 17px !important; }
  .fwci-udpservices:before { content: '\\0066'; font-size: 17px !important; }
  .fwci-udpservice:before { content: '\\0067'; font-size: 17px !important; }
  .fwci-servicesgroups:before { content: '\\0068'; font-size: 17px !important; }
  .fwci-servicegroup:before { content: '\\0069'; font-size: 17px !important; }
  .fwci-rule:before { content: '\\006a'; }
  .fwci-rulegroup:before { content: '\\006b'; }
  .fwci-expand:before { content: '\\006c'; }
  .fwci-collapse:before { content: '\\006d'; }
  .fwci-reload:before { content: '\\006e'; }
  .fwci-newfirewall:before { content: '\\006f'; }
  .fwci-editfirewall:before { content: '\\0070'; }
  .fwci-compilefirewall:before { content: '\\0071'; }
  .fwci-installfirewall:before { content: '\\0072'; }
  .fwci-loadpolicy:before { content: '\\0073'; }
  .fwci-newinterface:before { content: '\\0074'; }
  .fwci-newadress:before { content: '\\0075'; }
  .fwci-whereused:before { content: '\\0076'; }
  .fwci-edit:before { content: '\\0077'; }
  .fwci-delete:before { content: '\\0078'; }
  .fwci-enableposition:before { content: '\\0079'; }
  .fwci-negateposition:before { content: '\\007a'; }
  .fwci-editobject:before { content: '\\0030'; }
  .fwci-copy:before { content: '\\0031'; }
  .fwci-cut:before { content: '\\0032'; }
  .fwci-compilerule:before { content: '\\0033'; }
  .fwci-rulecolor:before { content: '\\0034'; }
  .fwci-newruleabove:before { content: '\\0035'; }
  .fwci-newrulebelow:before { content: '\\0036'; }
  .fwci-editrule:before { content: '\\0037'; }
  .fwci-enablerule:before { content: '\\0038'; }
  .fwci-disablerule:before { content: '\\0039'; }
  .fwci-deleterule:before { content: '\\0021'; }
  .fwci-movedown:before { content: '\\0022'; }
  .fwci-removegroup:before { content: '\\0023'; }
  .fwci-removefromgroup:before { content: '\\0024'; }
  .fwci-deny:before { content: '\\0025'; }
  .fwci-accept:before { content: '\\0026'; }
  .fwci-reject:before { content: '\\0027'; }
  .fwci-acounting:before { content: '\\0028'; }
  .fwci-groupname:before { content: '\\0029'; }
  .fwci-groupcolor:before { content: '\\002a'; }
  .fwci-new:before { content: '\\002b'; }
  .fwci-compileallfirewalls:before { content: '\\002c'; }
  .fwci-installallfirewalls:before { content: '\\002d'; }
  .fwci-policy:before { content: '\\002e'; }
  .fwci-vpn:before { content: '\\002f'; }
  .fwci-status:before { content: '\\005b'; }
  .fwci-config:before { content: '\\005c'; }
  .fwci-help:before { content: '\\005d'; }
  .fwci-logout:before { content: '\\005e'; }
  .fwci-compileallfirewalls2:before { content: '\\005f'; }
  .fwci-installallfirewalls2:before { content: '\\0060'; }
  .fwci-users:before { content: '\\007b'; }
  .fwci-systemconfiguration:before { content: '\\007c'; }
  .fwci-cluster:before { content: '\\007d'; }
  .fwci-clusters:before { content: '\\007e'; }                                                                                                           
  .fwci-paste:before { content: '\\003f'; }
`;                                                                                                                                     