/*******************************************************************************
 * @license
 * Copyright (c) 2012, 2016 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 ******************************************************************************/
/*eslint-env browser, amd*/
define({//Default message bundle
	"Navigator": "Navigator",
	"Sites": "Sites",
	"Shell": "Shell",
	"Get Plugins": "Get Plug-ins",
	"Global": "Global",
	"Editor": "Editor",
	"EditorRelatedLink": "Show Current Folder",
	"EditorRelatedLinkParent": "Show Enclosing Folder",
	"EditorLinkWorkspace": "Edit",
	"EditorRelatedLinkProj": "Show Project",
	"sidebar": "Sidebar",
	"toolbar": "Toolbar",
	"Key Bindings": "Key Bindings",
	"KeyBinding": "Key Binding",
	"Command": "Command",
	"Filter bindings:": "Filter bindings:",
	"Filter bindings": "Type characters to filter by name or key combination",
	"Bindings": "Bindings",
	"BindingPrompt": "Enter the new binding",
	"NoBinding": "---",
	"orionClientLabel": "Orion client repository",
	"Orion Editor": "Text Editor",
	"Orion Image Viewer": "Image Viewer",
	"Orion Markdown Editor": "Markdown Editor",
	"Orion Markdown Viewer": "Markdown Viewer",
	"Orion JSON Editor": "JSON Editor",
	"Orion System Editor": "System Editor",
	"View on Site": "View on Site",
	"View this file or folder on a web site hosted by Orion": "View this file or folder on a web site hosted by Orion.",
	"ShowAllKeyBindings": "Show a list of all the keybindings on this page",
	"Show Keys": "Show Keys",
	"HideShowBannerFooter": "Hide or show the page banner and footer",
	"Toggle Banner and Footer": "Toggle Banner and Footer",
	"ChooseFileOpenEditor": "Choose a file by name and open an editor on it",
	"FindFile": "Open File...",
	"System Configuration Details": "System Configuration Details",
	"System Config Tooltip": "Go to the System Configuration Details page",
	"System Editor Tooltip": "Open this file type in the desktop's default manner",
	"Background Operations": "Background Operations",
	"Background Operations Tooltip": "Go to the Background Operations page",
	"Operation status is unknown": "Operation status is unknown",
	"Unknown item": "Unknown item",
	"NoSearchAvailableErr": "Can't search: no search service is available",
	"Related": "Related",
	"Options": "Options",
	"LOG: ": "LOG: ",
	"View": "View",
	"SplashTitle": "Setting up Workspace",
	"SplashTitleSettings": "Loading Settings",
	"SplashTitleGit": "Loading Git Repositories",
	"LoadingPage": "Loading Page",
	"LoadingPlugins": "Loading Plugins",
	"AuthenticatingUser": "Authenticating user...",
	"AuthenticatedUser": "Authenticated user",
	"LoadingResources": "Loading Resources",
	"plugin_started": "\"${0}\" started",
	"plugin_lazy activation": "\"${0}\" lazily activated",
	"plugin_starting": "\"${0}\" starting",
	"no parent": "no parent",
	"no tree model": "no tree model",
	"no renderer": "no renderer",
	"could not find table row ": "could not find table row ",
	"Operations": "Operations",
	"Operations running": "Operations running",
	"SomeOpWarning": "Some operations finished with warning",
	"SomeOpErr": "Some operations finished with error",
	"no service registry": "no service registry",
	"Tasks": "Tasks",
	"Close": "Close",
	"Expand all": "Expand all",
	"Collapse all": "Collapse all",
	"Search" : "Search",
	"Advanced search" : "Advanced search",
	"Submit" : "Submit",
	"More" : "More",
	"Recent searches" : "Recent searches",
	"Regular expression" : "Regular expression",
	"Search options" : "Search options",
	"Global search" : "Global search",
	"Orion Home" : "Home",
	"Close notification" : "Close notification",
	"Toggle Side Panel" : "Toggle Side Panel",
	"Open or close the side panel": "Open or close the side panel",
	"Projects" : "Projects",
	"Toggle Sidebar" : "Toggle Sidebar",
	"Sample HTML5 Site": "Sample HTML5 Site",
	"Generate an HTML5 'Hello World' website, including JavaScript, HTML, and CSS files.": "Generate an HTML5 'Hello World' website, including JavaScript, HTML, and CSS files.",
	"Sample Orion Plugin": "Sample Orion Plug-in",
	"Generate a sample plugin for integrating with Orion.": "Generate a sample plug-in for integrating with Orion.",
	"Browser": "Web Browser",
	"Outline": "Outline",
	"OutlineProgress": "Getting outline for ${0} from ${1}",
	"FormatProgress" : "Formatting ${0} from ${1}",
	"outlineTimeout": "Outline service timed out. Try reloading the page and opening the outline again.",
	"UnknownError": "An unknown error occurred.",
	"Filter outline:": "Filter outline:",
	"Filter": "Type characters (* = any string, ? = any character)",
	"TemplateExplorerLabel": "Templates",
	"OpenTemplateExplorer": "Open Template Explorer",
	"Edit": "Edit",
	"CentralNavTooltip": "Toggle Navigation Menu",
	"Wrote: ${0}": "Wrote: ${0}",
	"GenerateHTML": "Generate HTML file",
	"GenerateHTMLTooltip": "Write an HTML file generated from the current Markdown editor content",
	"ShutdownWarning": "WARNING: This service will be shutdown permanently on ${0}. Please export your data before that date and time. There are no backups and all data will be destroyed.",
	"alt text": "alt text",
	"blockquote": "blockquote",
	"code": "code",
	"code (block)": "code (block)",
	"code (span)": "code (span)",
	"emphasis": "emphasis",
	"fenced code (${0})": "fenced code (${0})",
	"header (${0})": "header (${0})",
	"horizontal rule": "horizontal rule",
	"label": "label",
	"link (auto)": "link (auto)",
	"link (image)": "link (image)",
	"link (inline)": "link (inline)",
	"link label": "link label",
	"link label (optional)": "link label (optional)",
	"link (ref)": "link (ref)",
	"list item (bullet)": "list item (bullet)",
	"list item (numbered)": "list item (numbered)",
	"strikethrough (${0})": "strikethrough (${0})",
	"strong": "strong",
	"table (${0})": "table (${0})",
	"text": "text",
	"title (optional)": "title (optional)",
	"url": "url",
	"workedProgress": "${0} (${1}/${2})",
	"ConfirmLogout": "Do you want to logout?",
	"VerticalPaneOrientation": "Vertical pane orientation",
	"TogglePaneOrientationTooltip": "Toggle split pane orientation",
	"WarningDuplicateLinkId": "Duplicate link ID: ${0} (link IDs are not case-sensitive)",
	"WarningHeaderTooDeep": "Header level cannot exceed 6",
	"WarningLinkHasNoText": "Link has no text",
	"WarningLinkHasNoURL": "Link has no URL",
	"WarningOrderedListItem": "Ordered list item within unordered list",
	"WarningOrderedListShouldStartAt1": "The first item in an ordered list should have index 1",
	"WarningUndefinedLinkId": "Undefined link ID: ${0}",
	"WarningUnorderedListItem": "Unordered list item within ordered list",
	"PageTitleFormat": "${0} - ${1}", // ${0} is the file or resource being edited; ${1} is the task (eg. "Editor")
	// Display names for keys:
	"KeyCTRL": "Ctrl",
	"KeySHIFT": "Shift",
	"KeyALT": "Alt",
	"KeyBKSPC": "Backspace",
	"KeyDEL": "Del",
	"KeyEND": "End",
	"KeyENTER": "Enter",
	"KeyESCAPE": "Esc",
	"KeyHOME": "Home",
	"KeyINSERT": "Ins",
	"KeyPAGEDOWN": "Page Down",
	"KeyPAGEUP": "Page Up",
	"KeySPACE": "Space",
	"KeyTAB": "Tab",
	// Display elapsed time:
	"a year": "a year",
	"years": "${0} years",
	"a month": "a month",
	"months": "${0} months",
	"a day": "a day",
	"days": "${0} days",
	"an hour": "an hour",
	"hours": "${0} hours",
	"a minute": "a minute",
	"minutes": "${0} minutes",
	"timeAgo": "${0} ago", //${0} represent the time elapsed
	"justNow": "just now", //Represent that the time elapsed is less than 1 minute
	"fixAll": "Fix all",
	"nextSplitter" : "Next Splitter",
	"nextSplitterTooltip": "Move focus through the available splitters",
	"Confirm": "Confirm",
	"CONFIRM": "Confirm",
	"PROMPT": "Prompt",
	"ALERT": "Alert",
	"Up": "Up",
	"Down": "Down"
});
