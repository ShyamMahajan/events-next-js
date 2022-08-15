import classes from "./event-item.module.css"
import Button from "../ui/button"
import DateIcon from "../icons/date-icon"
import LocationIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
const EventItem = ({ event }) => {

    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year : "numeric"
    })

    const address = event.location.replace(", ", "\n")
    const exploredLink = `/events/${event.id}`
  return (
    <li className={classes.item}>
      <img src={"/" + event.image} alt="image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon></DateIcon>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon></LocationIcon>
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploredLink}>
            <span>Explore Events</span>
            <span className={classes.icon}><ArrowRightIcon></ArrowRightIcon></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
