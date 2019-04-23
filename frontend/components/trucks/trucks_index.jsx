import React from 'react';
import TrucksDetail from './trucks_detail';

class TrucksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTrucks();
  }

  render() {
    let trucks;
    if (this.props.trucks.length > 0) {
      trucks = this.props.trucks.map((truck) => {
        const jobs = this.props.jobs.filter(job => job.truck_id === truck.id);
        return (
          <TrucksDetail truck={truck} jobs={jobs} key={truck.id} />
        );
      });
    }
    return (
      <section className="trucks-index-main">
        <h1>Trucks</h1>
        {trucks}
      </section>
    );
  }
}

export default TrucksIndex;
