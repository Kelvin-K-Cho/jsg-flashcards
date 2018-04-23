@weeks.each do |week|
  json.set! week.id do
    json.extract! week, :id, :title
  end
end
