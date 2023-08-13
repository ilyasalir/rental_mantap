import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "pokpokebol@gmail.com",
    pass: "slyjjmdqoqaoaceo", // generated from the App Passwords
  },
  secure: true,
});

export const mailOptions = {
  from: email,
  to: email,
};
