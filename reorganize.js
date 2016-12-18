var fs = require('fs');
var json;
var fileName = __dirname + '/paraData.json';
fileName = fileName.toString();
//TODO For all files... do..
//TODO For some files.. do ..
//for (var i = 0; i < fileList.length; i++) {
//    var fileName = fileList[i];
//    while(fileName == undefined){
//        fileName = toString(fileList[i]);
//        console.log(fileName);
//    }
//    console.log(fileName);
//    fileName = '/' + fileName;
//    console.log(fileName);
fs.readFile(fileName, (err, data) => {
   if (err) {
       return console.log(err);
   }
    obj = JSON.parse(data);
    var outputString;
//TODO automate string append by giving an array and for loop to make more adapdable.
        outputString += '{ "HeartRate": "'
        outputString += obj.data[i].HeartRate
        outputString += '", "UprightRow": "'
        outputString += obj.data[i].UprightRow
        outputString += '", "TrunkFlexion": "'
        outputString += obj.data[i].TrunkFlexion
        outputString += '", "FirstName": "'
        outputString += obj.data[i].FirstName
        outputString += '", "InclineBenchPress": "'
        outputString += obj.data[i].InclineBenchPress
        outputString += '", "MaxVO2": "'
        outputString += obj.data[i].MaxVO2
        outputString += '", "StrengthPercentile": "'
        outputString += obj.data[i].StrengthPercentile
        outputString += '", "Gender": "'
        outputString += obj.data[i].Gender
        outputString += '", "Weight": "'
        outputString += obj.data[i].Weight
        outputString += '", "Year": "'
        outputString += obj.data[i].Year
        outputString += '", "ArmCurl": "'
        outputString += obj.data[i].ArmCurl
        outputString += '", "Stage": "'
        outputString += obj.data[i].Stage
        outputString += '", "LastName": "'
        outputString += obj.data[i].LastName
        outputString += '", "Client": "'
        outputString += obj.data[i].Client
        outputString += '", "TFPercentile": "'
        outputString += obj.data[i].TFPercentile
        outputString += '", "Age": "'
        outputString += obj.data[i].Age
        outputString += '", "TFOverride": "'
        outputString += obj.data[i].TFOverride
        outputString += '", "DeadLift": "'
        outputString += obj.data[i].DeadLift
        outputString += '", "MVO2Percentile": "'
        outputString += obj.data[i].MVO2Percentile
        outputString += '"},';
	// }
    fs.writeFile(__dirname, outputString, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(obj.data.length + 'sets of data written.')
    });
    //    console.log(outputString);
});
//}