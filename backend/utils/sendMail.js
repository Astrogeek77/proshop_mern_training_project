import nodemailer from "nodemailer";

const sendMail = async (email, url, subject) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_ID_PASSWORD,
    },
  });

  const mail = {
    from: `${process.env.EMAIL_ID} <${process.env.SMTP_FROM_EMAIL}>`,
    to: email,
    subject: subject,
    html: `<p>Please click this link to verify your email address: <a href="${url}">Activate<a></p>`,
  };

  const info = await transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log("SEND EMAIL ERROR - ", err);
    } else {
      console.log("Email sent: " + info);
    }
  });
};

export default sendMail;
