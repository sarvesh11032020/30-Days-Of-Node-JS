const fs = require('fs');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.message}`);
        } else {
            console.log(`Data written to ${filePath}`);
        }
    });
}

// writeToFile('test-files/empty-file.txt', content);
// writeToFile('test-files/output.txt', content);

writeToFile('test-files/output1.txt', 'I Love Cricket.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'I Love Baseball.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...