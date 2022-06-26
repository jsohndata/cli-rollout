# Rollout
A simple JS to generate Shell command to generate directories, files, git init, then open it in VSC.

## Demo
[Working Demo](https://jsohndata-rollout.web.app/)

![Screenshot of the generated directories and files](https://raw.githubusercontent.com/jsohndata/rollout/main/images/demo-screenshot.png))

## Code in Terminal
```$project="jojo1"

mkdir $project $project/scripts/ $project/styles/ $project/images/ && touch $project/index.html $project/README.md $project/scripts/$project.js $project/styles/$project.css && cd $project && git init; code .```

## That would have generated following then launch it on VSC.
- jojo1/
- jojo1/git init
- jojo1/index.html
- jojo1/READM.md
- jojo1/script/jojo1.js
- jojo1/style/jojo1.css
- jojo/images/


