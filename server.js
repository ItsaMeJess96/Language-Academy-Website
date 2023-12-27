// importar módulos

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

// criar instâncias do express e nodemailer 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// definir rota para manipular dados do formulário

app.post('/enviar-email', (req, res) => {
    const { nome, email, mensagem } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_DESTINO,
        subject: 'Formulário de Contato',
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    }).sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send(error.toString());
        }
        console.log('Email enviado:', info.response);
        res.status(200).send('Email enviado com sucesso!');
    });
});

// iniciar o servidor

app.listen(port, () => {
    console.log('Servidor em http://localhost:${port}');
});