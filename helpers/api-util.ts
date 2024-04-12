import { DateFilter, Event } from "@/types";

export async function getAllEvents() {
  const events: Event[] = [];
  try {
    const response = await fetch(
      "https://next-js-events-app-bb688-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();

    if (data?.error) {
      throw new Error("Something went wrong!");
    }

    for (const key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }

    return events;
  } catch (error) {
    return events;
  }
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => !!event.isFeatured);
}

export async function getEventById(id: string) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter: DateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
