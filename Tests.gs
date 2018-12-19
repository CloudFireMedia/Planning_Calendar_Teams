function TEST_misc() {

  var newTeamSheet = SpreadsheetApp.openById('1D-tI3H1zmYGvnexNJxbCGOOHDi7cp1g-ymVOFosuTsk').getSheetByName('TEAM')
  

    //set the formula in A4 to reference the appropriate Promotions Deadline Calendar
    var pdcSheetId = Config.get('PROMOTION_DEADLINES_CALENDAR_ID');
    var pdcSheetUrl = SpreadsheetApp.openById(pdcSheetId).getUrl();
    var newFormula = PDC_FORMULA_TEMPLATE_.replace('{{PDC_URL}}', pdcSheetUrl);
    newTeamSheet.getRange('A4').setFormula(newFormula); 
}
