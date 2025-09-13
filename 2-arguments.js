// 2-arguments.js

// process.argv كتحتوي على جميع arguments
// process.argv[0] => node
// process.argv[1] => path ديال السكريبت
// process.argv[2..] => arguments اللي عطيناهم للسكريبت

const args = process.argv.slice(2); // ناخدو غير arguments الحقيقية

if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
