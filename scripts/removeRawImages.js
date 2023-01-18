const fs = require("fs");

async function readAllFiles(path) {
    const files = fs.readdirSync(path)

    files.forEach(file => {
        const stat = fs.statSync(`${path}/${file}`)
        if (stat.isDirectory()) {
            readAllFiles(`${path}/${file}`)
        } else {
            if (file.endsWith(".JPEG") ||
                file.endsWith(".png") ||
                file.endsWith(".jpeg") ||
                file.endsWith(".PNG") ||
                file.endsWith(".JPG")
            ) {
                fs.unlinkSync(`${path}/${file}`)
                console.log(`${path}/${file}... Borrado correctamente 🗑️`)
            }
        }
    }
    )
}

readAllFiles("./public/images")