import React from 'react';

const TrucksDetail = ({ truck, jobs }) => {
  const truckJobs = jobs.map((job) => {
    const startTime = job.start_time;
    const endTime = job.end_time;
    return (
      <h2>{`${job.name}, ${job.move_date}, ${startTime} - ${endTime}`}</h2>
    );
  });
  return (
    <>
      <h1>
        {`${truck.name} assignments`}
      </h1>
      {truckJobs}
    </>
  );
};

export default TrucksDetail;
