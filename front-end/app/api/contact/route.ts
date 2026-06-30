import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Merci de renseigner votre nom, votre e-mail et votre message.",
        },
        { status: 400 },
      );
    }

    const resend = getResendClient();

    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          message:
            "La configuration d’e-mail n’est pas encore prête. Ajoutez RESEND_API_KEY dans votre environnement.",
        },
        { status: 500 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "megadacharpente@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Nouveau message depuis le site - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2f241c;">
          <h2 style="color: #5d3a1a;">Nouveau message reçu</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
      text: `Nouveau message reçu\nNom : ${name}\nEmail : ${email}\nTéléphone : ${phone || "Non renseigné"}\nMessage : ${message}`,
    });

    if (emailResponse.error) {
      throw new Error(emailResponse.error.message);
    }

    return NextResponse.json({
      success: true,
      message: "Merci pour votre message. Nous revenons vers vous rapidement.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l’envoi du message.",
      },
      { status: 500 },
    );
  }
}
