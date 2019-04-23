class Api::JobsController < ApplicationController
  def create
    @job = Job.new(job_params)

    @job.start_time = Time.at(params[:job][:start_time].to_i)
    @job.end_time = Time.at(params[:job][:end_time].to_i)

    available_trucks = @job.available_trucks
    if available_trucks.length > 0
      chosen_truck_idx = rand(available_trucks.length)
      chosen_truck_id = available_trucks[chosen_truck_idx].id
      @job.truck_id = chosen_truck_id
    end

    if @job.save
      @trucks = Truck.all
      render 'api/trucks/index'
    else
      render json: @job.errors.full_messages, status: 422
    end
  end

  def job_params
    params.require(:job).permit(:name, :move_date, :start_time, :end_time)
  end
end
