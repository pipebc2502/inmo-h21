import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });
      const {email, nombre, token} = datos

      //enviar el email
      await transport.sendMail({
        from: 'Horizonte21.com',
        to: email,
        subject: 'Confirma tu cuenta en Horizonte21.com',
        text: 'Confirma tu cuenta en Horizonte21.com',
        html:`
            <p>Hola ${nombre}, comprueba tu cuenta en Horizonte21.com</p>
            
            <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirmar cuenta</a></p>
            
            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>`
            
            
      })
}

export {
    emailRegistro
}