import React from 'react';

class CreateTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      startTime: '8am',
      endTime: '7pm',
    };

    this.updateName = this.updateName.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateName(e) {
    this.setState({ name: e.target.value });
  }

  updateTime(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  convertTime(timeHour) {
    let hour;
    if (timeHour.includes('am')) {
      hour = timeHour.split('am')[0];
    } else if (timeHour === '12pm') {
      hour = timeHour;
    } else {
      hour = parseInt(timeHour.split('pm')[0]) + 12;
    }

    const newTime = new Date();
    newTime.setHours(hour);
    return newTime;
  }

  handleSubmit(e) {
    e.preventDefault();
    const start_time = this.convertTime(this.state.startTime);
    const end_time = this.convertTime(this.state.endTime);
    const truck = {
      name: this.state.name,
      start_time,
      end_time,
    };
    this.props.createTruck(truck);
  }

  render() {
    const times = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    const timeOptions = (
      times.map(time => (
        <option value={time}>{time}</option>
      ))
    );
    return (
      <form onSubmit={this.handleSubmit} className="create-truck-main">
        <h1>Name</h1>
        <input onChange={this.updateName} value={this.state.name} placeholder="Name of truck" />
        <h1>Start Time (hour)</h1>
        <select value={this.state.startTime} onChange={this.updateTime('startTime')}>
          {timeOptions}
        </select>
        <h1>End Time (hour)</h1>
        <select value={this.state.endTime} onChange={this.updateTime('endTime')}>
          >
          {timeOptions}
        </select>
        <input type="submit" vlaue="Create Truck" />
      </form>
    );
  }
}

export default CreateTruck;
