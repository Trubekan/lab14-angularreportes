const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' }); // Directorio donde se guardarán los archivos adjuntos

app.post('/upload', upload.array('files'), (req, res) => {
  const filesInfo = req.files.map(file => ({
    filename: file.filename,
    originalname: file.originalname,
    size: file.size,
    mimetype: file.mimetype
  }));
  res.send(filesInfo);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
