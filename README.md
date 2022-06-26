# Rollout
A simple JS to generate Shell command to generate directories, files, git init, then open it in VSC.

## Demo
[Working Demo](https://jsohndata-rollout.web.app/)

## Code in Terminal
```$project="jojo1"```

```mkdir $project $project/scripts/ $project/styles/ $project/images/ && touch $project/index.html $project/README.md $project/scripts/$project.js $project/styles/$project.css && cd $project && git init; code .```

## That would have generated following then launch it on VSC.
- jojo1/
- jojo1/git init
- jojo1/index.html
- jojo1/README.md
- jojo1/scripts/jojo1.js
- jojo1/styles/jojo1.css
- jojo/images/


