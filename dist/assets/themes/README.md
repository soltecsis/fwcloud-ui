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
.ui-menuitem-text,
table:not(.fwcGridTable) *,
/*table:not(.fwcGridTable) select, table:not(.fwcGridTable) textarea,*/
.ui-float-label input, .ui-float-label label,
.ui-button-secondary .ui-button-text                                                    /* Secondary buttons text */ {
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
.ui-widget-content {
  border-color: #333 !important;
}

.ui-button.ui-button-secondary {
  background-color: #1f1f20 !important;
}

/* ---- Accordion component */
.ui-accordion .ui-accordion-header.ui-state-active,
.ui-accordion .ui-accordion-header.ui-state-default {
  background-color: #1f1f20 !important;
}

.ui-accordion .ui-accordion-header.ui-state-active {
  border: 1px solid #333 !important;
}

/* ---- Dialogs */
.ui-dialog,
.ui-dialog-content,
.ui-dialog-footer {
  background-color: #1f1f20 !important;
}

.ui-dialog-titlebar {
  background-color: #1f1f20 !important;
}

/* ---- Tabview */
.ui-tabview {
  background-color: #1f1f20 !important;
}

.ui-tabview .ui-tabview-nav > li.ui-state-default.ui-state-active {
  background: #212327 !important;
}

.ui-tabview .ui-tabview-nav > li.ui-state-default {
  background: #161719 !important;
}

/* Menubar */
.fwcMenubar.ui-menubar .ui-menuitem-link.ui-state-active {
  background: #333 !important;
}

.fwcMenubar.ui-menubar .ui-menuitem-active > .ui-menuitem-link,
.fwcMenubar.ui-menubar .ui-menuitem > .ui-menuitem-link:hover {
  background: #333 !important;
}

.ui-submenu-list {
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
