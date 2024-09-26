import { css } from 'app/integralui/external/lit-element';

export const FwcloudIcons2Style = css`
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
      font-family: 'fwcIcons2';
      src: url('../fonts/fwcIcons2.eot');
      src: url('../fonts/fwcIcons2.eot?#iefix') format('embedded-opentype'),
          url('../fonts/fwcIcons2.woff') format('woff'),
          url('../fonts/fwcIcons2.ttf') format('truetype'),
          url('../fonts/fwcIcons2.svg#fwcIcons2') format('svg');
      font-weight: normal;
      font-style: normal;
  }
[class*='fwci2-']:before{
	display: inline-block;
   font-family: 'fwcIcons2';
   font-style: normal;
   font-weight: normal;
   line-height: 1;
   font-size:14px;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale
}
.fwci2-cuadrado:before{content:'\\0041';}
.fwci2-moveup:before{content:'\\0042';}
.fwci2-pastebelow:before{content:'\\0043';}
.fwci2-pasteabove:before{content:'\\0044';}
.fwci2-findintree:before{content:'\\0045';}
.fwci2-firewall_to_cluster:before{content:'\\0046';}
.fwci2-cluster_to_firewall:before{content:'\\0047';}
.fwci2-cluster_clone:before{content:'\\0048';}
.fwci2-firewall_clone:before{content:'\\0049';}
.fwci2-newcluster:before{content:'\\004a';}
.fwci2-folder:before{content:'\\004b'; }
.fwci2-newfolder:before{content:'\\004c';}
.fwci2-deletefolder:before{content:'\\004d';}
.fwci2-renamefolder:before{content:'\\004e';}
.fwci2-vpn-config:before{content:'\\004f';}
.fwci2-certificate:before{content:'\\0050';}
.fwci2-new-certificate:before{content:'\\0051';}
.fwci2-delete-certificate:before{content:'\\0052';}
.fwci2-edit-certificate:before{content:'\\0053';}
.fwci2-ca:before{content:'\\0054';}
.fwci2-new-ca:before{content:'\\0055';}
.fwci2-delete-ca:before{content:'\\0056';}
.fwci2-edit-ca:before{content:'\\0057';}
.fwci2-openvpn:before{content:'\\0058'; }
.fwci2-openvpn-deleteconfig:before{content:'\\0059';}
.fwci2-folderstd:before{content:'\\005a'; }
.fwci2-edit-vpnconfig:before{content:'\\0061';}
.fwci2-file-vpnconfig:before{content:'\\0062';}
.fwci2-install-vpnconfig:before{content:'\\0063';}
.fwci2-label:before{content:'\\0064'; }
.fwci2-dns-in:before{content:'\\0065'; }
.fwci2-uninstall-vpnconfig:before{content:'\\0066';}
.fwci2-syncccd-vpnconfig:before{content:'\\0067';}
.fwci2-certificate-prefix:before{content:'\\0068';}
.fwci2-certificate-prefix-new:before{content:'\\0069';}
.fwci2-certificate-prefix-edit:before{content:'\\006a';}
.fwci2-certificate-prefix-delete:before{content:'\\006b';}
`;