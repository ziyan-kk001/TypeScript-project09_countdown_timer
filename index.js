import inquirer from 'inquirer';
const inputDate = await inquirer.prompt([
    {
        name: "countdown",
        type: "input",
        message: "Enter a date and time for the countdown timer (YYYY-MM-DD HH:mm:ss): "
    }
]);
let countDownDate = new Date(inputDate.countdown);
function getRemainingTime(targetDate) {
    const currentDate = new Date();
    const milliseconds = targetDate.getTime() - currentDate.getTime();
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
}
let x = setInterval(function () {
    let now = new Date().getTime();
    let nextDate = countDownDate.getTime();
    let timeDifference = nextDate - now;
    if (timeDifference < 0) {
        clearInterval(x);
        "EXPIRED";
    }
    else {
        console.log(getRemainingTime(countDownDate));
    }
}, 1000);
