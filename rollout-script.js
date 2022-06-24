const cliMkdir = [
    'mkdir',
    '$project',
	'$project/script',
	'$project/style',
	'$project/image',
].join(" ")

const cliTouch = [
    'touch',
    '$project/index.html',
	'$project/README.md',
	'$project/script/$project-script.js',
	'$project/style/$project-style.css',
].join(" ")

const cliCd = [
    'cd',
    '$project',
].join(" ")

const cliCmd = [
    'git init;',
    'code .',
].join(" ")

// convert array to string
const cliToString = param1 => param1.toString()

const cliString1 = cliToString(cliMkdir) + " && "
const cliString2 = cliToString(cliTouch) + " && "
const cliString3 = cliToString(cliCd) + " && "
const cliString4 = cliToString(cliCmd)

const cliStringFinal = cliString1.concat(cliString2, cliString3, cliString4)

console.log(cliStringFinal)
