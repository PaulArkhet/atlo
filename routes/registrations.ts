import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createInsertSchema } from "drizzle-zod";
import { registrations as registrationsTable } from "../schemas/registrations";
import { mightFail } from "might-fail";
import { db } from "../db";
import { HTTPException } from "hono/http-exception";
import nodemailer from "nodemailer";

export const registrationRouter = new Hono()
  .get(async (c) => {
    const { error: registrationsQueryError, result: registrationsQueryResult } =
      await mightFail(db.select().from(registrationsTable));

    if (registrationsQueryError) {
      throw new HTTPException(500, {
        message: "Error while fetching registrations",
        cause: registrationsQueryError,
      });
    }

    return c.json({ registrations: registrationsQueryResult }, 200);
  })
  .post(
    "/",
    zValidator(
      "json",
      createInsertSchema(registrationsTable).omit({
        registrationId: true,
        createdAt: true,
      })
    ),
    async (c) => {
      const insertValues = c.req.valid("json");
      const {
        error: registrationInsertError,
        result: registrationInsertResult,
      } = await mightFail(
        db
          .insert(registrationsTable)
          .values({ ...insertValues })
          .returning()
      );

      if (registrationInsertError) {
        console.log("Error while creating registration");
        throw new HTTPException(500, {
          message: "Error while creating registration",
          cause: registrationInsertResult,
        });
      }
      // sendFowardEmail(
      //   registrationInsertResult[0].registrationId,
      //   registrationInsertResult[0].name,
      //   registrationInsertResult[0].email,
      //   registrationInsertResult[0].password,
      //   registrationInsertResult[0].createdAt.toString()
      // );
      return c.json({ registration: registrationInsertResult[0] }, 200);
    }
  );

export function sendFowardEmail(
  registrationId: number,
  name: string,
  email: string,
  password: string,
  createdAt: string
) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "paul@arkhet.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mail_configs = {
      from: "paul@arkhet.com",
      to: "nate@arkhet.com",
      subject: "Arkhet Incoming Registration",
      html: `<!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8">
          <title>Arkhet - Incoming Registration</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link
              href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
              rel="stylesheet">
          <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body style='font-family: "Nunito Sans", serif;' class="bg-[#242424] text-white">
          <div class="flex flex-col mx-auto min-h-screen">
              <div class="flex-1 mx-auto p-10">
                  <div class="py-10">
                      <a href="https://www.arkhet.com" class="text-2xl font-bold">A R K H E T</a>
                  </div>
                  <h1 style='font-family: "Work Sans", serif;' class="text-6xl py-5">Incoming Registration</h1>
                  <p>Booking ID: ${registrationId}</p>
                  <p>Name: ${name}</p>
                  <p>Email: ${email}</p>
                  <p>Company: ${password}</p>
                  <p>Date: ${createdAt}</p>
                  <div class="py-10">
                      <p class="py-3">Regards,</p>
                      <p></p>Arkhet</p>
                  </div>
              </div>
          </div>
      </body>

      </html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}
