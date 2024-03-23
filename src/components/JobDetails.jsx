import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id}= useParams();
    console.log(jobs,id);
    return (
        <main>
            <h4>Get the details</h4>
        </main>
    );
};

export default JobDetails;