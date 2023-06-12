const DataUriParser = require("datauri/parser.js")
const path = require("path")


exports.getDataUri=(file)=>{
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname)
    return parser.format(extName,file.buffer)
}