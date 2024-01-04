// importar módulos

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5173; 

// Configurar o middleware para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Rota para lidar com a solicitação POST do formulário
app.post('/enviar-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configurar o transporte de e-mail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Configurar o e-mail a ser enviado
    const mailOptions = {
        from: 'seu_email@gmail.com', // Coloque o seu e-mail aqui
        to: 'culturalia.academia@gmail.com', // Coloque o e-mail de destino aqui
        subject: 'Novo formulário de contato',
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    };

    try {
        // Enviar o e-mail
        await transporter.sendMail(mailOptions);
        console.log('Email enviado com sucesso!');
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        res.status(500).json({ success: false, error: 'Erro ao enviar o e-mail' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});