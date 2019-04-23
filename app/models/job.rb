# == Schema Information
#
# Table name: jobs
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  move_date  :date             not null
#  start_time :time             not null
#  end_time   :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  truck_id   :integer
#

class Job < ApplicationRecord
  validates :name, :move_date, :start_time, :end_time, :truck_id, presence: true

  validate :start_comes_before_end
  belongs_to :truck

  def available_trucks
    overlapping_jobs = Job
      .includes(:truck)
      .where(move_date: move_date)
      .where.not('start_time > :end_time OR end_time < :start_time', start_time: start_time, end_time: end_time)

    unavailable_trucks = overlapping_jobs.map {|job| job.truck.id}

    available_trucks = Truck.where.not(id: unavailable_trucks)

    errors[:start_time] << "no available trucks during the selected time" if available_trucks.length === 0
    return available_trucks
  end

  def start_comes_before_end
    return if (start_time < end_time)

    errors[:start_time] << "must come before end time"
    errors[:end_time] << "must come after start time"
  end
end