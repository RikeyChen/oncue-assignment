const createJob = job => (
  $.ajax({
    method: 'POST',
    url: 'api/jobs',
    data: { job },
  })
);

export default createJob;
