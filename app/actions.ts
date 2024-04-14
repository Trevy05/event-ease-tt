"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";

const FormSchema = z.object({
  id: z.string(),
  eventName: z.string(),
  eventVenue: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  eventImage: z.string(),
  eventDescription: z.string(),
});

const CreateEvent = FormSchema.omit({ id: true });

export async function createEvent(formData: FormData) {
  const {
    eventName,
    eventVenue,
    startTime,
    endTime,
    startDate,
    endDate,
    eventImage,
    eventDescription,
  } = CreateEvent.parse({
    eventName: formData.get("eventName"),
    eventVenue: formData.get("eventVenue"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    eventImage: formData.get("eventImage"),
    eventDescription: formData.get("eventDescription"),
  });

  await sql`INSERT INTO invoices (eventName, eventVenue, startTime, endTime, startDate, endDate, eventImage, eventDescription) VALUES (${eventName}, ${eventVenue}, ${startTime}, ${endTime}, ${startDate}, ${endDate}, ${eventImage}, ${eventDescription})`;
}
