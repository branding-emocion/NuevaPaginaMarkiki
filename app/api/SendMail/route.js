import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const { Celular, Correo, Mensaje, NombreCompleto } = await req?.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "soporte@brandingemocion.com",
        pass: "2o#tsUem",
      },
    });

    const mensaje = {
      from: "soporte@brandingemocion.com",
      to: "ventas@siqcap.com.pe",
      subject: `🎉🥳 ¡Solicitud de contacto: ${Correo} ! 🥳🎉`,
      //   text: "Hello",
      html: `
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #1f2020; padding: 20px; color: #ffffff; border-radius: 5px 5px 0 0;">
            <h1 style="margin-top: 0; font-size: 24px;">www.grupomarkiki.com</h1>
          </div>
          <div style="padding: 20px;">
            <p style="margin-bottom: 15px;">Hemos recibido una solicitud de contacto de un nuevo usuario que se contactó a través de la página principal.</p>
            <p style="margin-bottom: 15px;">A continuación, encontrarás los detalles proporcionados:</p>
            <ul style="list-style: none; padding: 0; margin-bottom: 15px;">
              <li style="margin-bottom: 10px;"><strong>Nombre Completo:</strong> ${NombreCompleto}</li>
              <li style="margin-bottom: 10px;"><strong>Correo electrónico:</strong><a href='mailto:${Correo}' style="color: #101c71; text-decoration: none;">${Correo}</a></li>
              <li style="margin-bottom: 10px;"><strong>Celular:</strong> <a href='tel:+${Celular}' style="color: #101c71; text-decoration: none;">${Celular}</a></li>
              <li style="margin-bottom: 10px;"><strong>Mensaje:</strong> ${Mensaje}</li>
            </ul>
            <p style="margin-bottom: 0;">Por favor, ponte en contacto con el usuario lo antes posible para atender su solicitud.</p>
            <p style="margin-bottom: 0;">¡Gracias!</p>
          </div>
        </div>
      `,
    };

    // Envía el correo electrónico
    const Info = await transporter.sendMail(mensaje);

    console.log("Info", Info);
    return NextResponse.json(
      {
        body: "Se envio con éxito",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { body: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
