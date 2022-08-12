import EventItem from "./event-item"

const EventList = ({ items }) => {
    return <ul>
        {
            items.map(event => {
                return <EventItem event={event}/>
            })
        }
    </ul>
}

export default EventList