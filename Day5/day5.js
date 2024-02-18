const path = require('path');

function checkFileExtension(filePath, expectedExtension){
    const originalExtension = path.extname(filePath);

    if(originalExtension === expectedExtension){
        console.log(`File has the expected extension: ${expectedExtension}`);
    }
    else{
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${originalExtension}`);
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/logo.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png