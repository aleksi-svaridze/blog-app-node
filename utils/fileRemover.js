import fs from 'fs';
import path from 'path';

const fileRemover = (filename) => {
    fs.unlink(path.join(__dirname, '../uploads'), function(err) {
        if(err && err.code === 'ENOENT'){
            console.log(`File ${filename} does not exist, won't remove it.`)
        } else if(err) {
            console.log(`Error occured while trying removing file ${filename}`)
        } else {
            console.log(`Removed ${filename}`)
        }
    })
}

export {fileRemover};