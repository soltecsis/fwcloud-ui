import { css } from 'app/integralui/external/lit-element';

export const FaStyle = css`
  @import url('node_modules/@fortawesome/fontawesome-free/css/all.css');

  @font-face {
    font-family: 'FontAwesome';
    src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');
    src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), 
         url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), 
         url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), 
         url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), 
         url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fa-spin {
    animation: fa-spin 2s infinite linear;
  }

  .fa-wrench:before {
  content: "\\f0ad";
  }

  .fa-puzzle-piece:before {
    content: "\\f12e";
  }

  .fa-n:before {
  content: "N ";
  }

  .fa-file:before {
    content: "\\f15b";
  }
  .fa-file-code:before {
  content: "\\f1c9";
  }

  .fa-plus:before {
    content: "\\f067";
  }

  .fa-trash:before {
    content: "\\f1f8";
  }

  .fa-terminal:before {
    content: "\\f120";
  }

  .fa-eye:before {
    content: "\\f06e";
  }

  .fa-download:before {
    content: "\\f019";
  }

  .fa-spinner:before {
    content: "\\f110";
  }

  .fa-gear:before {
    content: "\\f013";
  }

  .fa-question-circle:before {
    content: "\\f059"; font-size: 17px !important;
  }

  .fa-earth-africa:before {
    content: "\\f57c"; font-size: 17px !important;
  }
  
  .fa-earth-americas:before {
    content: "\\f57d"; font-size: 17px !important;
  }
  
  .fa-earth-asia:before {
    content: "\\f57e"; font-size: 17px !important;
  }
  
  .fa-globe:before {
    content: "\\f0ac"; font-size: 17px !important;
  }
  
  .fa-earth:before {
    content: "\\f7e4"; font-size: 17px !important;
  }
  
  .fa-earth-europe:before {
    content: "\\f7a2"; font-size: 17px !important;
  }
  
  .fa-earth-oceania:before {
    content: "\\f57d"; font-size: 17px !important;
  }
  
  .fa-snowflake:before {
    content: "\\f2dc"; font-size: 17px !important;
  }

  .fa-list-alt {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900; /* Font Awesome Free Solid */
  }

  .fa-list-alt:before {
    content: "\\f00b"; /* Unicode for fa-table-list */
  }
  .fa-robot:before {
    content: "\\f544";
  }

  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
