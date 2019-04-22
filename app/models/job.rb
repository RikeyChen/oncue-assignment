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
end
