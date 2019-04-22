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

  belongs_to :truck

  def available_trucks
    trucks = Truck.all
      .includes(:jobs)

    trucks = trucks.select do |truck|
      truck_start = truck.start_time.hour
      truck_end = truck.end_time.hour
      next if (
        !start_time.hour.between?(truck_start, truck_end) || !end_time.hour.between?(truck_start, truck_end)
      )

      truck.jobs.all? do |job|
        (job.start_time.hour > end_time.hour || job.end_time.hour < start_time.hour)
      end
    end

    errors[:start_time] << "no available trucks during the selected time" if truck.length === 0
    return trucks
  end
end