let terminal = document.querySelector(".terminal");
let step1 = document.querySelector(".step1");
let step2 = document.querySelector(".step2");
let step3 = document.querySelector(".step3");
let step4 = document.querySelector(".step4");
let step5 = document.querySelector(".step5");


    // setTimeout(() => {
    //     step1.innerText = "Initializing Hacking";
    // }, 100)

    // setTimeout(() => {
    //     step2.innerText = "Reading your Files...";
    // }, 3000)

    // setTimeout(() => {
    //     step3.innerText = "Password Files Detected....";
    // }, 5000)

    // setTimeout(() => {
    //     step4.innerText = "Transfering Data to Server.....";
    // }, 8000)

    // setTimeout(() => {
    //     step5.innerText = "Cleaning up ";
    // }, 10000)

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function runHackingProcess() {
    try {
        await delay(100);
        step1.innerText = "Initializing Hacking";

        await delay(3000);
        step2.innerText = "Reading your Files....";

        await delay(2000); // Since 3000ms + 2000ms = 5000ms for the next step
        step3.innerText = "Password Files Detected....";

        await delay(3000); // Since 5000ms + 3000ms = 8000ms for the next step
        step4.innerText = "Transferring Data to Server....";

        await delay(7000); // Since 8000ms + 2000ms = 10000ms for the final step
        step5.innerText = "Cleaning up";
    } catch (error) {
        console.error('Error in hacking process:', error);
    }
}


runHackingProcess();









