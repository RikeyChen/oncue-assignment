import React from 'react';

class createJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      moveDate: '2019-04-22',
      startTimeHour: '8am',
      startTimeMinute: '00',
      endTimeHour: '8am',
      endTimeMinute: '00',
    };

    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  convertTime(timeHour, timeMin) {
    let hour;
    if (timeHour.includes('am')) {
      hour = timeHour.split('am')[0];
    } else if (timeHour === '12pm') {
      hour = '12';
    } else {
      hour = parseInt(timeHour.split('pm')[0]) + 12;
    }

    const newTime = this.convertDate(this.state.moveDate);
    newTime.setHours(hour, timeMin);
    return newTime.getTime() / 1000;
  }

  convertDate(date) {
    const splitDate = date.split('-');
    const year = splitDate[0];
    const month = parseInt(splitDate[1]) - 1;
    const day = splitDate[2];

    return new Date(year, month, day);
  }

  handleSubmit(e) {
    e.preventDefault();
    const start_time = this.convertTime(
      this.state.startTimeHour,
      this.state.startTimeMinute,
    );

    const end_time = this.convertTime(
      this.state.endTimeHour,
      this.state.endTimeMinute,
    );

    const move_date = this.convertDate(this.state.moveDate);

    const job = {
      name: this.state.name,
      move_date,
      start_time,
      end_time,
    };
    this.props.addJob(job);
  }

  render() {
    const timesHour = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    const timesMin = ['00', '15', '30', '45'];

    const timeOptionsHour = (
      timesHour.map(time => (
        <option value={time}>{time}</option>
      ))
    );

    const timeOptionsMinutes = (
      timesMin.map(time => (
        <option value={time}>{time}</option>
      ))
    );

    return (
      <form onSubmit={this.handleSubmit} className="create-job-main">
        <h1>Name</h1>
        <input onChange={this.updateField('name')} value={this.state.name} placeholder="Name of person" />
        <h1>Move Date</h1>
        <input onChange={this.updateField('moveDate')} type="text" value={this.state.moveDate} />
        <h1>Start Time (hour:min)</h1>
        <select value={this.state.startTime} onChange={this.updateField('startTimeHour')}>
          {timeOptionsHour}
        </select>
        <select value={this.state.endTime} onChange={this.updateField('startTimeMinute')}>
          {timeOptionsMinutes}
        </select>
        <h1>End Time (hour:min)</h1>
        <select value={this.state.endTime} onChange={this.updateField('endTimeHour')}>
          >
          {timeOptionsHour}
        </select>
        <select value={this.state.endTime} onChange={this.updateField('endTimeMinute')}>
          {timeOptionsMinutes}
        </select>
        <input type="submit" value="Create Job" />
      </form>
    );
  }
}

export default createJob;
