const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 74, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
	if (studentReport[i] < 30) {
		console.log(studentReport[i]);
	}
}

let count = 0;
while (count < studentReport.length) {
	if (studentReport[count] < 30) {
		console.log(studentReport[count]);
	}
	count++;
}

studentReport.forEach(function (score) {
	if (score < 30) {
		console.log("Report: " + score);
	}
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}
