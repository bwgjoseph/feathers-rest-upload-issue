import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
});

const multerware = multer({
  storage,
  limits: {
    fileSize: 5242880,
    files: 5,
  },
  fileFilter: (req, file, cb) => cb(null, true),
});

export default multerware;
