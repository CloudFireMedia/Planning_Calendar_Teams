//forces Cols C and F to act like radio buttons but dang it's super slow

function onEdit_(e) {
   var promoPlanningSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();   
   var columnCArray = promoPlanningSheet.getRange("C4:C").getValues();
   var lastRowWithValuesinColumnC = columnCArray.filter(String).length + 5;
   var editRange = { 
    top : 3,
    bottom : lastRowWithValuesinColumnC,
    left : 3,
    right : 5
  };
  
  var thisRow = e.range.getRow();
  if (thisRow < editRange.top || thisRow > editRange.bottom) return;
  var thisCol = e.range.getColumn();
  if (thisCol < editRange.left || thisCol > editRange.right) return;
  
  if (thisCol == 3) {
  promoPlanningSheet.getRange(thisRow, thisCol + 2).setValue(e.range.getValue());
   } else {
   promoPlanningSheet.getRange(thisRow, thisCol - 2).setValue(e.range.getValue());
  }
}