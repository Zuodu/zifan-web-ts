import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }
    audio,
    canvas,
    progress,
    video {
      display: inline-block;
    }
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    progress {
      vertical-align: baseline;
    }
    [hidden],
    template {
      display: none;
    }
    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }
    a:active,
    a:hover {
      outline-width: 0;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
    }
    b,
    strong {
      font-weight: inherit;
    }
    dfn {
      font-style: italic;
    }
    mark {
      background-color: #ff0;
      color: #000;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    figure {
      margin: 1em 40px;
    }
    hr {
      padding: 0;
      margin: 1rem 0 0;
      background: #93969b;
      border: none;
      height: 1px;
      box-sizing: content-box;
      overflow: visible;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font: inherit;
      margin: 0;
    }
    optgroup {
      font-weight: 700;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type='reset'],
    [type='submit'],
    button,
    html [type='button'] {
      -webkit-appearance: button;
    }
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }
    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    h1 {
      padding: 0;
      margin: 3rem 0 0;
      color: inherit;
      line-height: 1.1;
    }
    h2 {
      padding: 0;
      margin: 2.45rem 0 0;
      color: inherit;
      line-height: 1.1;
    }
    h3 {
      padding: 0;
      margin: 2.45rem 0 0;
      color: inherit;
      font-size: 1.38316rem;
      line-height: 1.1;
    }
    h4 {
      padding: 0;
      margin: 2.45rem 0 0;
      color: inherit;
      font-size: 1rem;
      line-height: 1.1;
    }
    h5 {
      padding: 0;
      margin: 1.45rem 0 0 ;
      color: inherit;
      font-size: 0.85028rem;
      line-height: 1.1;
    }
    h6 {
      padding: 0;
      margin: 1.45rem 0 0;
      color: inherit;
      line-height: 1.1;
    }
    hgroup {
      padding: 0;
      margin: 1.45rem 0 0;
    }
    ul {
      padding: 0;
      margin: 0 0 1.45rem 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    ol {
      padding: 0;
      margin: 0 0 1.45rem 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    dl {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    dd {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    p {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    figure {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    pre {
      margin: 1.1rem 0 0;
      font-size: 0.85rem;
      line-height: 1.42;
      background: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      overflow: auto;
      word-wrap: normal;
      padding: 1.45rem;
    }
    table {
      padding: 0;
      margin: 1.1rem 0 0;
      font-size: 1rem;
      line-height: 1.45rem;
      border-collapse: collapse;
      width: 100%;
      border-color: #93969b;
    }
    fieldset {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    blockquote {
      padding: 0;
      margin: 0 1.1rem 1.45rem;
    }
    form {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    noscript {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    iframe {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    address {
      padding: 0;
      margin: 1.1rem 0 0;
    }
    b {
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    dt {
      font-weight: bold;
    }
    th {
      font-weight: bold;
    }
    li {
      margin-bottom: calc(1.45rem / 2);
    }
    ol li {
      padding-left: 0;
    }
    ul li {
      padding-left: 0;
    }
    li > ol {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    li > ul {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    blockquote *:last-child {
      margin-bottom: 0;
    }
    li *:last-child {
      margin-bottom: 0;
    }
    p *:last-child {
      margin-bottom: 0;
    }
    li > p {
      margin-bottom: calc(1.45rem / 2);
    }
    code {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    kbd {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    samp {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    abbr {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    acronym {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    abbr[title] {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
      text-decoration: none;
    }
    thead {
      text-align: left;
    }
    td,
    th {
      text-align: left;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
      font-feature-settings: 'tnum';
      -moz-font-feature-settings: 'tnum';
      -ms-font-feature-settings: 'tnum';
      -webkit-font-feature-settings: 'tnum';
      padding: 0.725rem 0.96667rem calc(0.725rem - 1px);
    }
    th:first-child,
    td:first-child {
      padding-left: 0;
    }
    th:last-child,
    td:last-child {
      padding-right: 0;
    }
    tt,
    code {
      background-color: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
        'Liberation Mono', Menlo, Courier, monospace;
      padding: 0.2em 0;
    }
    pre code {
      background: none;
      line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
      letter-spacing: -0.2em;
      content: ' ';
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
      content: '';
    }
    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }
    body {
      margin: 0;
      padding: 0;
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text.main};
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }

    a {
      text-decoration: none;
    }

    input, select, textarea, button {
      &:focus {
        outline: none;
      }
    }
    .gatsby-image-wrapper {
      box-shadow: 0 3px 10px -3px black;
    }
  }
`;
