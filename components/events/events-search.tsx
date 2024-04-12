import { globalMonths } from "@/config";
import { FormEvent, useRef } from "react";

import Button from "../ui/button";
import classes from "./events-search.module.css";

type EventSearchProps = {
  onSearch: (selectedYear?: string, selectedMonth?: string) => void;
};

function EventsSearch(props: EventSearchProps) {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedYear = yearInputRef?.current?.value;
    const selectedMonth = monthInputRef?.current?.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {globalMonths.map((month: string, idx: number) => (
              <option key={month} value={idx + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
