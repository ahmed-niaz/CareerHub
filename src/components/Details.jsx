import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { appliedJobCart } from "../utility/Localstorage";

const Details = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = job;
  const handleApplyJob = ()=>{
    appliedJobCart(idInt)
    toast.success("Successfully applied");
  }
  return (
    <main>
      <div className="grid md:grid-cols-5 gap-4">
        <div className="border col-span-3">
          <h2>Job Description: {job_description}</h2>
          <h2>Job Responsibility: {job_responsibility}</h2>
          <div>
            <h2>Education Requirement</h2>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <h2>Experience</h2>
            <p>{experiences}</p>
          </div>
        </div>
        <div className="border col-span-2">
            <div>
                <h2>Job Details</h2>
                <div className="divider"></div>

            </div>
            <button onClick={handleApplyJob} className="btn w-full  bg-gradient-to-r from-indigo-500 from-10%  to-[#9873FF] to-90% text-white">Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Details;
