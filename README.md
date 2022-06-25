# Rollout
A simple JS to generate Shell command to generate directories, files, git init, then open it in VSC.

## Demo
[Working Demo](https://jsohndata-rollout.web.app/)

## Code in Terminal
`$project="jojo1"`

`mkdir $project $project/script $project/style $project/image && touch $project/index.html $project/README.md $project/script/$project-scripts.js $project/style/$project-styles.css && cd $project && git init; code .`

## That would have generated...
- jojo1/
- jojo1/git init
- jojo1/index.html
- jojo1/READM.md
- jojo1/script/jojo1-script.js
- jojo1/style/jojo1-style.css
- jojo/image

Then launch this on VSC. 

![Screenshot of the generated directories and files](https://raw.githubusercontent.com/jsohndata/rollout/main/image/demo-screenshot.png))
