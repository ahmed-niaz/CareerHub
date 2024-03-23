import PropTypes from "prop-types";
import { GoLocation } from "react-icons/go";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
  } = job;

  return (
    <main>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt={job_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-4">
            <button className="px-5 py-2 text-[#9873FF] font-extrabold border rounded border-[#9873FF]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 text-[#9873FF] font-extrabold border rounded border-[#9873FF]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-12">
            <div className="flex gap-2 items-center">
              <h2>
                <GoLocation />{" "}
              </h2>
              <p>{location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <h2>
                <HiOutlineCurrencyBangladeshi />
              </h2>
              <p>{salary}</p>
            </div>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`} className="btn bg-gradient-to-r from-indigo-500 from-10%  to-[#9873FF] to-90% text-white">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
