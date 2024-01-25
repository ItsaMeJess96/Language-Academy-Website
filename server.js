// importar módulos

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o middleware para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// Configurar o transporte de e-mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Rota para lidar com a solicitação POST do formulário
app.post('/enviar-email', async (req, res) => {
    const { name, email, message } = req.body;


    // Configurar o e-mail a ser enviado
    const mailOptions = {
        from: email,
        to: 'culturalia.academia@gmail.com', 
        subject: `Nova mensagem de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro ao enviar o e-mail.');
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).send('Email enviado com sucesso!');
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});