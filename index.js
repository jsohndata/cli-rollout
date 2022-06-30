/* REF: 
node shell command
https://www.sohamkamani.com/nodejs/executing-shell-commands/

current direcotry
https://sebhastian.com/node-current-directory/

functinal programing loop
https://stackoverflow.com/questions/36979986/functional-programming-simple-for-loop-for-incrementing-counter
*/

const promptQuestion = require("prompt-sync")()
const { exec } = require('node:child_process')
const dirCurrent       = __dirname


const conClear  = () => console.clear()
const conPrompt = param1 => promptQuestion(param1)
const conLog    = param1 => console.log(param1)


const checkQuit = param1 => {
    switch (param1) {
        case "quit":
            conLog("Good Bye.")
            process.exit();
            break;
    }
}


const checkConfirm = param1 => {
    switch (param1) {
        case "n" || "N":
        break;
    }
}

const rolloutCmd1 = paramDirPath => 
    `mkdir ${paramDirPath}/images 
    ${paramDirPath}/scripts 
    ${paramDirPath}/styles 
    ${paramDirPath}/api;`

const rolloutCmd2 = (paramDirPath, paramDirName) => 
    `touch index.html 
    ${paramDirPath}/scripts/${paramDirName}.js 
    ${paramDirPath}/styles/${paramDirName}.css`

const rolloutCmd3 = paramDirPath => 
    `cd ${paramDirPath}/git init`

const dirPathConstruct = param1 => 
    `${dirCurrent}/${param1.toLowerCase()}`

const execCmd = param1 => exec(param1, (err, output) => err ? conLog(err) : null /*conLog(output)*/ )


const checkStrStartDot   = paramStr => paramStr[0] == "."
const checkStrStartSpace = paramStr => paramStr[0] == " "
const dirName       = () => conPrompt('Direcotry name: ')


const validateString = param1 => {
    while (param1) {
        const stringValue =  param1()

        checkQuit(stringValue)

        if (checkStrStartDot(stringValue) || checkStrStartSpace(stringValue)) {
            conLog("Name must start with alaphbet or number.")
        } else {
            return stringValue
        }
    }
}


/* Run */
conClear()
conLog(`Welcome to Rollout.\n(type quit to exit anytime)`)
conLog(`PWD: ${dirCurrent} \n----------------------`)
const dirNewName = validateString(dirName)

const dirNewPath = dirPathConstruct(dirNewName)
conLog(`PWD: ${dirNewPath} \n----------------------`)


// execCmd(`mkdir ${dirNewName};`)


// rolloutConfirm = conPrompt('Ready to Rollout? (Y/n): ')

// if ( !checkConfirm(rolloutConfirm)) {
//     execCmd(rolloutCmd1(dirNewPath))            ? conLog(`✅ Directories created`) : conLog(`🚫 Directories not created`)
//     execCmd(rolloutCmd2(dirNewPath,dirNewName)) ? conLog(`✅ Files created`) : conLog(`🚫 Files not created`)
//     execCmd(rolloutCmd3(dirNewPath))            ? conLog(`✅ Git Init`) : conLog(`🚫 Git Init`)
// }

// conLog(`Have fun storming the castle! 🥷`)

