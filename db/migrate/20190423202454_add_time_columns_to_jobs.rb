class AddTimeColumnsToJobs < ActiveRecord::Migration[5.2]
  def change
    add_column :jobs, :start_time, :datetime
    add_column :jobs, :end_time, :datetime
  end
end
