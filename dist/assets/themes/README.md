# Styles reference

/* HEADER */
.divFwcHeader {
  background: linear-gradient(
      to right,
      rgba(22, 23, 25, 0.9),
      rgba(22, 23, 25, 0.9)
    ),
    url(/assets/img/fwc-fondo-menu.jpg) !important;
}

/* Main Divs */
.fwcDivOverflow {
  background-color: #161719 !important;
}

/* Text elements */
/*****************/
.fwc-label,                                                                             /* Labels in treeview and listboxes */
.divDevInfo *,                                                                          /* About us text */ 
.fwcVersion,
.p-menuitem-text,
table:not(.fwcGridTable) *,
/*table:not(.fwcGridTable) select, table:not(.fwcGridTable) textarea,*/
.p-float-label input, .p-float-label label,
.p-button-secondary .p-button-text                                                    /* Secondary buttons text */ {
  color: #eaeaea !important;
}

input[type="text"],
input[type="password"],
:not(.fwcGridTable) select,
:not(.fwcGridTable) textarea {
  background-color: #09090b !important;
}

/* TABLAS */
table:not(.fwcGridTable) thead,
tbody {
  background-color: inherit !important;
  border-color: #333 !important;
}

table:not(.fwcGridTable) tr {
  background-color: #212327 !important;
}

table:not(.fwcGridTable) tbody tr:nth-child(2n) {
  background-color: #161719 !important;
}

/***************/
/* INTEGRAL UI */
/***************/
.iui-treeitem-hovered,
.iui-treeitem-content-hovered,
.iui-treeitem-content-selected {
  background-color: #333 !important;
}

.iui-treeview {
  background-color: #212327 !important;
  border-color: #333 !important;
}

.iui-treeitem-expand-box-close {
  background-position: -48px 0 !important;
}

.iui-treeitem-expand-box-open {
  background-position: -48px -16px !important;
}

/***********/
/* PRIMENG */
/***********/
.p-widget-content {
  border-color: #333 !important;
}

.p-button.p-button-secondary {
  background-color: #1f1f20 !important;
}

/* ---- Accordion component */
.p-accordion .p-accordion-header.p-state-active,
.p-accordion .p-accordion-header.p-state-default {
  background-color: #1f1f20 !important;
}

.p-accordion .p-accordion-header.p-state-active {
  border: 1px solid #333 !important;
}

/* ---- Dialogs */
.p-dialog,
.p-dialog-content,
.p-dialog-footer {
  background-color: #1f1f20 !important;
}

.p-dialog-titlebar {
  background-color: #1f1f20 !important;
}

/* ---- Tabview */
.p-tabs {
  background-color: #1f1f20 !important;
}

.p-tabs .p-tabs-nav > li.p-state-default.p-state-active {
  background: #212327 !important;
}

.p-tabs .p-tabs-nav > li.p-state-default {
  background: #161719 !important;
}

/* Menubar */
.fwcMenubar.p-menubar .p-menuitem-link.p-state-active {
  background: #333 !important;
}

.fwcMenubar.p-menubar .p-menuitem-active > .p-menuitem-link,
.fwcMenubar.p-menubar .p-menuitem > .p-menuitem-link:hover {
  background: #333 !important;
}

.p-submenu-list {
  background: linear-gradient(to bottom, #212327 0%, #1f1f20 100%) !important;
}

/***************/
/* JQX WIDGETS */
/***************/
.jqx-splitter {
  border-color: #161719 !important;
}

.jqx-splitter-splitbar-vertical,
.jqx-splitter-splitbar-horizontal {
  background: #262628 !important;
  border-color: #262628 !important;
}

.jqx-splitter-splitbar-hover {
  background: #2e2e31 !important;
  border-color: #2e2e31 !important;
}
