import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }
  console.log('Connected to the in-memory SQLite database');
});

// Create messages table
db.run(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
    return;
  }
  console.log('Messages table created or already exists');
});

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, company, email, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  // Store in database
  db.run(
    `INSERT INTO messages (name, company, email, phone, message)
     VALUES (?, ?, ?, ?, ?)`,
    [name, company, email, phone, message],
    async function(err) {
      if (err) {
        console.error('Error inserting message:', err);
        return res.status(500).json({ error: 'Error al guardar el mensaje' });
      }

      try {
        // Send email notification
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.ADMIN_EMAIL,
          subject: 'Nueva Solicitud de Valoración - Libera Stock',
          html: `
            <h2>Nueva Solicitud de Valoración</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
            <h3>Mensaje:</h3>
            <p>${message}</p>
          `,
        });

        // Send confirmation email to user
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: email,
          subject: 'Recibimos su solicitud - Libera Stock',
          html: `
            <h2>Gracias por contactar con Libera Stock</h2>
            <p>Estimado/a ${name},</p>
            <p>Hemos recibido su solicitud de valoración y nuestro equipo la está revisando.</p>
            <p>Nos pondremos en contacto con usted a la mayor brevedad posible para discutir los detalles de su portfolio.</p>
            <br>
            <p>Atentamente,</p>
            <p>El equipo de Libera Stock</p>
          `,
        });

        res.json({ 
          success: true, 
          message: 'Mensaje recibido correctamente',
          id: this.lastID 
        });
      } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ 
          error: 'Error al enviar las notificaciones',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
      }
    }
  );
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});