"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchEvents, createEventInDatabase } from "./lib/data"; // Import the function to fetch last nine events

export async function createEvent(formData: FormData) {
  try {
    await createEventInDatabase(formData);

    revalidatePath("/");
    redirect("/");
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

export async function getEvents(noOfEvents: number) {
  try {
    const lastEvents = await fetchEvents(noOfEvents);
    return lastEvents;
  } catch (error) {
    console.error(`Error fetching last ${noOfEvents} events:`, error);
    throw error;
  }
}
