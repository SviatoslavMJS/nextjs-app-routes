import { Event } from "@/types";

import EventItem from "./event-item";
import classes from "./event-list.module.css";

type EventListProps = {
  items: Event[];
};

function EventList(props: EventListProps) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items?.length ? (
        items.map((event) => (
          <EventItem
            id={event.id}
            key={event.id}
            date={event.date}
            title={event.title}
            image={event.image}
            location={event.location}
          />
        ))
      ) : (
        <li>
          <h1>No events yet</h1>
        </li>
      )}
    </ul>
  );
}

export default EventList;
