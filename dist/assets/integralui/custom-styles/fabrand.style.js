import { css } from 'app/integralui/external/lit-element';

export const FaBrandStyle = css`
    @import url('node_modules/@fortawesome/fontawesome-free/css/all.css');

    .fa-brands {
        display: inline-block;
        font-family: 'Font Awesome 5 Brands';
        font-weight: normal;
        font-style: normal;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .fa-windows:before {
        content: "\\f17a";
    }
`;
