export const createTruck = truck => (
  $.ajax({
    method: 'POST',
    url: 'api/trucks',
    data: { truck },
  })
);

export const fetchTrucks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/trucks',
  })
);
