const fs = require('fs');  
const path = require('path');

const loggerFolder = './loggers'; // Acessing my log file from my loggers directory

fs.readdir(loggerFolder, (err, files) => {
  if (err) {
    console.error('An error occured while reading logger directory:', err);
    return;
  }

  let largestLoggerFile = '';
  let largestLoggerFileSize = 0;

  files.forEach(file => {
    if (file.endsWith('.log')) {
      const filePath = path.join(loggerFolder, file);
      const stats = fs.statSync(filePath);                //Getting informations of required file

      if (stats.isFile() && stats.size > largestLoggerFile_siz) {
        largestLoggerFileSize = stats.size;
        largestLoggerFile = filePath;
      }
    }
  });

  //truncating largestFile to 100 lines.
  if (largestLoggerFile) {
    fs.readFile(largestLoggerFile, 'utf8', (err, data) => {
      if (err) {
        console.error('An error in reading the largest log file:', err);
        return;
      }

      const lines = data.split('\n').slice(0, 100).join('\n');
      fs.writeFile(largestLoggerFile, lines, 'utf8', (err) => {
        if (err) {
          console.error('An error in truncating the largest log file:', err);
          return;
        }
        console.log('Truncated the largest log file to 100 lines.');
      });
    });
  } else {
    console.log('No Largest log file found.');
  }
});