const DataUriParser = require("datauri/parser.js")
const path = require("path")
const {createTransport} = require("nodemailer")

exports.getDataUri=(file)=>{
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname)
    return parser.format(extName,file.buffer)
}

exports.sendMail=async(subject,to,text)=>{
    let transport = createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "68f2990476d5c8",
          pass: "b33cc4e3d51599"
        }
      });

    await transport.sendMail({
        to,subject,
        text
    })
}