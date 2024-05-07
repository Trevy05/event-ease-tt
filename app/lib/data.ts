import { sql } from "@vercel/postgres";
import { z } from "zod";

// Define a type for an event object based on the events table structure
interface Event {
  id: string;
  event_name: string;
  event_venue: string;
  start_time: string;
  end_time: string;
  start_date: string;
  end_date: string;
  event_image: string;
  event_description: string;
}

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

export async function createEventInDatabase(formData: FormData) {
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

  try {
    await sql`INSERT INTO events (event_name, event_venue, start_time, end_time, start_date, end_date, event_image, event_description) 
      VALUES (${eventName}, ${eventVenue}, ${startTime}, ${endTime}, ${startDate}, ${endDate}, ${eventImage}, ${eventDescription})`;
  } catch (error) {
    console.error("Error creating event in the database:", error);
    throw error;
  }
}

// Function to fetch the last 9 events from the database
export async function fetchEvents(noOfEvents: number): Promise<Event[]> {
  // SQL query to fetch the last 9 events ordered by start_date (or another appropriate column) in descending order
  // The LIMIT clause limits the results to the last 9 rows
  const { rows } = await sql<Event>`
    SELECT id, event_name, event_venue, start_time, end_time, start_date, end_date, event_image, event_description
    FROM events
    ORDER BY start_date DESC
    LIMIT ${noOfEvents};
  `;

  // Return the rows, which contain the last 9 events from the database
  return rows;
}

export async function fetchUserEvents(
  userId: string,
  numEvents: number
): Promise<Event[]> {
  const { rows } = await sql<Event>`
    SELECT id,  event_name, event_venue, start_time, end_time, start_date, end_date, event_image, event_description
    FROM events
    WHERE user_id = ${userId}
    ORDER BY start_date DESC
    LIMIT ${numEvents};
  `;

  return rows;
}

export async function fetchEventsByUserId(userId: string): Promise<Event[]> {
  try {
    // Execute SQL query to fetch events with the specified user_id
    const { rows } = await sql<Event>`
      SELECT *
      FROM events
      WHERE user_id = ${userId};
    `;

    // Return the fetched events
    return rows;
  } catch (error) {
    console.error("Error fetching events by user_id:", error);
    throw error;
  }
}
