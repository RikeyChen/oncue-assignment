class JobsController < ApplicationController
  def create
    @job = Job.new(job_params)
    if @job.available_trucks.length > 0
      chosen_truck_id = rand(@job.available_trucks.length)

      @job.truck_id = chosen_truck_id
    end

    if @job.save
      render 'api/trucks/index'
    else
      render json: @job.errors.full_messages, status: 422
    end
  end

  def job_params
    params.require(:job).permit(:name, :move_date, :start_time, :end_time)
  end
end
