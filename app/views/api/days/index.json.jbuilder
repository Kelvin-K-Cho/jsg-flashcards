@days.each do |day|
  json.set! day.id do
    json.extract! day, :id, :title
    json.topics day.topics.pluck(:id)
  end
end
