import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createInsertSchema } from "drizzle-zod";
import { bookings as bookingsTable } from "../schemas/bookings";
import { mightFail } from "might-fail";
import { db } from "../db";
import { HTTPException } from "hono/http-exception";
import nodemailer from "nodemailer";

export const bookingRouter = new Hono()
  .get(async (c) => {
    const { error: bookingsQueryError, result: bookingsQueryResult } =
      await mightFail(db.select().from(bookingsTable));

    if (bookingsQueryError) {
      throw new HTTPException(500, {
        message: "Error while fetching bookings",
        cause: bookingsQueryError,
      });
    }

    return c.json({ bookings: bookingsQueryResult }, 200);
  })
  .post(
    "/",
    zValidator(
      "json",
      createInsertSchema(bookingsTable).omit({
        bookingId: true,
        createdAt: true,
      })
    ),
    async (c) => {
      const insertValues = c.req.valid("json");
      const { error: bookingInsertError, result: bookingInsertResult } =
        await mightFail(
          db
            .insert(bookingsTable)
            .values({ ...insertValues })
            .returning()
        );

      if (bookingInsertError) {
        console.log("Error while creating booking");
        throw new HTTPException(500, {
          message: "Error while creating booking",
          cause: bookingInsertResult,
        });
      }
      // sendFowardEmail(
      //   bookingInsertResult[0].bookingId,
      //   bookingInsertResult[0].name,
      //   bookingInsertResult[0].email,
      //   bookingInsertResult[0].company!,
      //   bookingInsertResult[0].role!,
      //   bookingInsertResult[0].info!,
      //   bookingInsertResult[0].createdAt.toString()
      // );
      return c.json({ booking: bookingInsertResult[0] }, 200);
    }
  );

export function sendFowardEmail(
  bookingId: number,
  name: string,
  email: string,
  company: string,
  role: string,
  info: string,
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
      from: "noreply@arkhet.com",
      to: "nate@arkhet.com",
      cc: "randall@arkhet.com",
      subject: "Arkhet Incoming Booking",
      html: `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Arkhet - Incoming Booking</title>
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
                <h1 style='font-family: "Work Sans", serif;' class="text-6xl py-5">Incoming Booking</h1>
                <p>Booking ID: ${bookingId}</p>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Company: ${company}</p>
                <p>Role: ${role}</p>
                <p>Info: ${info}</p>
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
