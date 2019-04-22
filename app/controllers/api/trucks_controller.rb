class Api::TrucksController < ApplicationController
  def index
    @trucks = Trucks.all
    render :index
  end

  def create
    @truck = Truck.new(truck_params)

    if truck.save
      render :index
    else
      render json: @truck.errors.full_messages, status: 422
    end
  end

  def truck_params
    params.require(:truck).permit(:name, :start_time, :end_time)
  end
end
