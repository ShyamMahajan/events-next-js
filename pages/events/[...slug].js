import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"
import Button from "../../components/ui/button";


const FilteredEventsPage = () => {
    const router = useRouter()
    const filterData = router.query.slug
    if(!filterData){
        return <>
             <p className="center">Loading...</p>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }
    
    const [year, month] = filterData;
    const numyear = +year;
    const nummonth = +month;

    if(isNaN(nummonth) || isNaN(numyear)){
        return <>
            <p className="center">Invalid Filter, please adjust your filter</p>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    const events = getFilteredEvents({year : numyear, month: nummonth})

    if(!events || !events.length){
        return <><p>No events for the chosen filter!</p>
        <div className="center">
                <Button link="/events">Show All Events</Button>
            </div></>
    }

    const date = new Date(numyear, nummonth - 1)
    return <>
    <ResultsTitle date={date}/>
    <EventList items={events}/>
    </>
}

export default FilteredEventsPage; 