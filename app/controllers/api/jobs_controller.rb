class JobsController < ApplicationController
  def create
    @job = Job.new(job_params)
  end

  def job_params
    params.require(:job).permit(:name, :move_date, :start_time, :end_time)
  end
end
