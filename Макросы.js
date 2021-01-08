/** @OnlyCurrentDoc */

/** Прайс лист ОБНОВЛЕНИЕ

Создать копию листов 
  "сводная таблица" + датаВремя
  "Прайс без НДС " + датаВремя

Листы 
  "сводная таблица + датаВремя"
  "Прайс без НДС + датаВремя"
  "КодПозиция"
    по массивам

В массивах:
Символы латиницы, похожие на кириллицу, заменить на символы кириллицы
Замена пробелов на один
Другие замены ...
Проход по "сводная таблица + датаВремя", взять код и цену без НДС
  по коду в "КодПозиция" взять номера строки и столбца
  если в "Прайс без НДС + датаВремя" в позиции строка/столбец:
   - сеть / , ничего не делать записать в массив лога
   - пусто, добавить / и цену
   - число, добавить / и цену
   
Вставить массивы обратно на листы   
**/

/** Нахождение отсутствующих кодов 
    между листами
    "сводная таблица" и
    "КодПозиция" **/

function SheetNameExists(sheetName) {
  /* существует ли лист*/
  var spread = SpreadsheetApp.getActiveSpreadsheet();
  var sheet  = spread.getSheetByName(sheetName);
  if (sheet) {
    return True;
  }
};

function SheetDuplicate(sheetName) {
/*  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('сводная таблица (копия)'), true);
  spreadsheet.deleteActiveSheet();
  spreadsheet.duplicateActiveSheet();*/
  if (SheetNameExists(sheetName)) {
    SheetNameDelete(sheetName);
    return spreadsheet.copy(sheetName);
  }
};

function SheetNameDelete(sheetName) {
  /* удалить лист, если он есть*/
  var spread = SpreadsheetApp.getActiveSpreadsheet();
  var sheet  = spread.getSheetByName(sheetName);
  if (sheet) {
    spread.deleteSheet(sheet);
  }
};

function hello() {
  Logger.log("Hello, " + world);
}