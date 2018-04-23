@days.each do |day|
  json.set! day.id do
    json.extract! day, :id, :title
  end
end
