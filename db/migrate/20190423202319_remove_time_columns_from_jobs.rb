class RemoveTimeColumnsFromJobs < ActiveRecord::Migration[5.2]
  def change
    remove_column :jobs, :start_time
    remove_column :jobs, :end_time
  end
end
