import Head from "next/head";
import { Event } from "@/types";
import { Fragment } from "react";

import Comments from "../../components/input/comments";
import ErrorAlert from "../../components/ui/error-alert";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventLogistics from "../../components/event-detail/event-logistics";
import { GetStaticProps } from "next";

type EventDetailPageProps = {
  selectedEvent?: Event;
};

function EventDetailPage(props: EventDetailPageProps) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        imageAlt={event.title}
        location={event.location}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export const getStaticProps = (async (context) => {
  const eventId = context?.params?.eventId;

  if (!eventId) {
    return {
      notFound: true,
    };
  }

  const event = await getEventById(
    Array.isArray(eventId) ? eventId[0] : eventId!
  );

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}) satisfies GetStaticProps<{ selectedEvent?: Event }>;

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
