@trucks.each do |truck|
  json.trucks do
    json.set! truck.id do
      json.extract! truck,
        :id,
        :name
    end
  end

  json.jobs do
    truck.jobs.each do |job|
      json.set! truck.id do
        json.extract! job,
          :name,
          :move_date,
          :start_time,
          :end_time,
          :truck_id
      end
    end
  end
end