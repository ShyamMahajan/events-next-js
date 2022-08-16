import {getAllEvents} from "../../dummy-data"
import EventList from "../../components/events/event-list"

const AllEventsPage = () => {
    const events = getAllEvents()

    return <EventList items={events}></EventList>
}

export default AllEventsPage;