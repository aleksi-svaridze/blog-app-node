import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cl) => {
        cl(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const uploadPicture = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1000000, // 1mb
    },
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpge') {
            return cb(new Error('Only images are allowed for upload'));
        }
        cb(null, true);
    }
});

export { uploadPicture };