import React from 'react';

const TrucksDetail = ({ truck, jobs }) => {
  const convertTime = (hour) => {
    if (hour < 12) {
      return `${hour}am`;
    }

    if (hour === 12) {
      return '12pm';
    }

    return `${hour - 12}pm`;
  };

  const truckJobs = jobs.map((job) => {
    const startTime = convertTime(new Date(job.start_time).getHours());
    const endTime = convertTime(new Date(job.end_time).getHours());
    return (
      <h4>{`${job.name}, ${job.move_date}, ${startTime} - ${endTime}`}</h4>
    );
  });
  return (
    <>
      <h2>
        {`${truck.name} assignments`}
      </h2>
      {truckJobs}
    </>
  );
};

export default TrucksDetail;
