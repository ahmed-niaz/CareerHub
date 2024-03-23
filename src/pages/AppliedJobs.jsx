import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAppliedJob } from "../utility/Localstorage";

const AppliedJobs = () => {
  const [applyJob, setApplyJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);
  const jobs = useLoaderData();
  const handleJobFilter = jobFilter => {
    if (jobFilter === 'all') {
        setDisplayJob(applyJob);
    } else if (jobFilter === 'remote') {
        const remoteJobs = applyJob.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJob(remoteJobs);
    } else if (jobFilter === 'onsite') {
        const onsiteJobs = applyJob.filter(job => job.remote_or_onsite === 'Onsite');
        setDisplayJob(onsiteJobs);
    }
};

  useEffect(() => {
    const storedJobID = getStoredAppliedJob();
    if (jobs.length > 0) {
      const applied = jobs.filter((job) => storedJobID.includes(job.id));
      setApplyJob(applied);
      setDisplayJob(applied);
    }
  }, [jobs]);
  return (
    <main>
      <h2>Applied Jobs {applyJob.length}</h2>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={()=> handleJobFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=> handleJobFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=> handleJobFilter('onsite')}>
            <a href="">Onsite</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {applyJob.map((job) => (
            <li key={job.id}>
              <span>{job.job_title}</span>
            </li>
          ))}

          {displayJob.map((job) => (
            <li key={job.id}>
              <span>{job.job_title}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AppliedJobs;
