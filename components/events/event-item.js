import Link from "next/link"

const EventItem = ({ event }) => {

    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year : "numeric"
    })

    const address = event.location.replace(", ", "\n")
  return (
    <li>
      <img src={"/" + event.image} alt="image" />
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{address}</address>
          </div>
        </div>
        <div>
            <Link href="/">Explore Events</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
