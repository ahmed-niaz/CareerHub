import { useEffect, useState } from "react";
import Job from "./Job";

const JobFeatures = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength,setDataLength]=useState(4);
    useEffect(()=>{
      fetch('jobs.json')
      .then(resp => resp.json())
      .then(data =>setJobs(data))
    },[])
  return (
    <main>
      <h2 className="text-2xl font-extrabold text-center"> Featured Jobs</h2>
      <p className="text-[#757575] font-bold text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0,dataLength).map((job)=> <Job key={job.id} job={job}/>)
        }
      </div>
      <div className={dataLength === jobs.length? 'hidden': 'block text-center my-12'}>
      <button onClick={()=>setDataLength(jobs.length)} className="btn bg-gradient-to-r from-indigo-500 from-10%  to-[#9873FF] to-90% text-white">Show more..</button>
      </div>
    </main>
  );
};

export default JobFeatures;
