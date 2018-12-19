// Config.gs
// =========
//
// All the constants and configuration settings

(function() {"use strict"})()

// Configuration
// =============

var SCRIPT_NAME = "Planning_Calendars_Teams";
var SCRIPT_VERSION = "v1.0";

// Constants/Enums
// ===============

// PROMOTION_DEADLINES_CALENDAR_ID

var PDC_FORMULA_TEMPLATE_A4_ = '=QUERY(IMPORTRANGE("{{PDC_URL}}","Communications Director Master!C4:L1000"),"SELECT Col1, Col2 WHERE (Col6 contains \'Executive Team\') AND (Col1 !=\'N/A\') AND NOT (Col2 contains \'{{YEAR}}\') ORDER BY Col2")'
var PDC_FORMULA_TEMPLATE_G4_ = '=QUERY(IMPORTRANGE("{{PDC_URL}}","Communications Director Master!C4:L1000"),"SELECT Col3 WHERE (Col6 contains \'Executive Team\') AND (Col1 !=\'N/A\') AND NOT (Col2 contains \'{{YEAR}}\') ORDER BY Col2")'