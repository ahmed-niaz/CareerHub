const getStoredAppliedJob = ()=>{
    const storedApplicationJob = localStorage.getItem('jobApplications');
    if(storedApplicationJob){
        return JSON.parse(storedApplicationJob)
    }else{
        return []
    }
}

const appliedJobCart = (id)=>{
const storedAppliedJob = getStoredAppliedJob();
const exists = storedAppliedJob.find(jobID => jobID === id)
if(!exists){
    storedAppliedJob.push(id);
    localStorage.setItem('jobApplications',JSON.stringify(storedAppliedJob));
}
}

export {getStoredAppliedJob,appliedJobCart}