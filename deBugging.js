
function BetterLogTest() {
  try {
    // Add one line to use BetterLog and log to a spreadsheet
    //Logger = BetterLog.useSpreadsheet("19SvdLfCv-OM9yBSG5ojbDc3UdZA-VqGH1ULtqZgB1AY"); 
    Logger = useSpreadsheet("Ошибки"); // BetterLog
    
    //Now you can log and it will also log to the spreadsheet
    Logger.log("That's all you need to do");  
    
    //Do more logging
    for (var i = 0; i < 5; i++) {
      var processingMessage = 'Processing ' + i;
      Logger.finest('This is inside my loop. i is %s', i );
    }
    //We're done
    Logger.log('The loop is done and i is now %s', i );
    
  } catch (e) { //with stack tracing if your exceptions bubble up to here
    e = (typeof e === 'string') ? new Error(e) : e;
    Logger.severe('%s: %s (line %s, file "%s"). Stack: "%s" . While processing %s.',e.name||'', 
               e.message||'', e.lineNumber||'', e.fileName||'', e.stack||'', processingMessage||'');
    throw e;
  }
}

function measuringExecutionTime() {
  
  // код из  https://developers.google.com/apps-script/reference/base/console#log()
  // отладку смотри здесь https://script.google.com/u/1/home/projects/1qI86GNoHYnquCiw_XVy1SJh4UZb-MM5y_Sg1zEsJls0xgvcDb8FIS8Bk/executions?run_as=1
  
  
  // A simple INFO log message, using sprintf() formatting.
  console.info('Timing the %s function (%d arguments)', 'myFunction', 1);

  // Log a JSON object at a DEBUG level. If the object contains a property called "message",
  // that is used as the summary in the log viewer, otherwise a stringified version of
  // the object is used as the summary.
  var parameters = {
    isValid: true,
    content: 'some string',
    timestamp: new Date()
  };
  console.log(parameters);

  var label = 'myFunction() time';  // Labels the timing log entry.
  console.time(label);              // Starts the timer.
  
  try {
    myFunction(parameters);         // Function to time.
  } catch (e) {
    // Logs an ERROR message.
    console.error('myFunction() yielded an error: ' + e);
  }
  
  console.timeEnd(label);      // Stops the timer, logs execution duration.
}