import {useRouter} from "next/router"
import {getEventById} from "../../dummy-data"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistic from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
const EventDetailPage = () => {
    const router = useRouter()
    const id = router.query.eventId;

    const event = getEventById(id)

    if(!event){
        return <p>No Event found!</p>
    }

    return (<>
        <EventSummary title={event.title}/>
        <EventLogistic 
            date={event.date} 
            address={event.location}
            image={event.image}
            imageAll={event.title}
            />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </>)
}

export default EventDetailPage; 