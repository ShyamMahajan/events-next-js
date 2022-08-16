import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"

const FilteredEventsPage = () => {
    const router = useRouter()
    const filterData = router.query.slug
    if(!filterData){
        return <p className="center">Loading...</p>
    }
    
    const [year, month] = filterData;
    const numyear = +year;
    const nummonth = +month;

    if(isNaN(nummonth) || isNaN(numyear)){
        return <p className="center">Invalid Filter, please adjust your filter</p>
    }

    const events = getFilteredEvents({year : numyear, month: nummonth})

    if(!events || !events.length){
        return <p className="center">No events for the chosen filter!</p>
    }

    const date = new Date(numyear, nummonth - 1)
    return <>
    <ResultsTitle date={date}/>
    <EventList items={events}/>
    </>
}

export default FilteredEventsPage; 