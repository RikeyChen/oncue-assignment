class AddTruckForeignKeyToJobs < ActiveRecord::Migration[5.2]
  def change
    add_column :jobs, :truck_id, :integer
  end
end
