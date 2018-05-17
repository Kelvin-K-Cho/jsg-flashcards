@dailies.each do |daily|
  json.set! daily.id do
    json.extract! daily, :id, :topic_id, :day_id
  end
end
