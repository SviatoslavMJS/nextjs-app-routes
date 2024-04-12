import Image from "next/image";
import { Event } from "@/types";

import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import AddressIcon from "../icons/address-icon";
import classes from "./event-logistics.module.css";

function EventLogistics(props: Omit<Event, "id" | "title">): JSX.Element {
  const { date, location, image, imageAlt = "enent" } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const addressText = location.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image priority src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<DateIcon />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<AddressIcon />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
