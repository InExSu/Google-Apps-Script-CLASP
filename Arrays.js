function Sheet2Array2DTest() {
  const oSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log(oSheet.getName())
  const array2 = Sheet2Array2D(oSheet);
  Logger.log(array2)
}

function Sheet2Array2D(oSheet) {
  // лист все данные в массив двумерный
  return oSheet.getDataRange().getValues();
}
function Array2D2Sheet(array2d, oSheet, rowStart, colStart) {
  // массив двумерный на лист
  const rowsNumber = array2d(); // высота массива
  const colsNumber = array2d(); // ширина массива
  oSheet.getRange(rowStart, colStart, rowsNumber, colsNumber).getValues();
}

// Немедленно вызываемая функция - НЕ поддерживается
/*(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());*/
