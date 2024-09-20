// You have to write a Node.js program to clear clutter inside
// of a directory and organise the contents of that directory 
// into different folders.Node

// for example, these files:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. arpit.zip
// 5. Jeet.zip
// 6. cat.jpg

// will become:
// jpg/name.jpg,cat.jpg
// png/name.png


import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basepath = "C:\\Users\\arpit\\OneDrive\\Desktop\\WebDevelopment\\Backend\\Learn_node\\node_modules"
let files = await fs.readdir(basepath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    console.log(ext)
    if(ext != "js" && ext != "json" && item.split(".").length>1){
        if(fsn.existsSync(path.join(basepath, ext))){
            //Move the file to the directory if it is not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}