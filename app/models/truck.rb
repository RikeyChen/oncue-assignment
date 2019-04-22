# == Schema Information
#
# Table name: trucks
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  start_time :time             not null
#  end_time   :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Truck < ApplicationRecord
  validates :name, :start_time, :end_time, presence: true
  validate :start_comes_before_end

  has_many :jobs

  # validation to ensure that start time comes before end time
  def start_comes_before_end
    return if (start_time < end_time)

    errors[:start_time] << "must come before end time"
    errors[:end_time] << "must come after start time"
  end
end
