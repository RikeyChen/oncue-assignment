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

require 'test_helper'

class TruckTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
