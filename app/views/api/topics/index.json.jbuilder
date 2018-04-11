@topics.each do |topic|
  json.set! topic.id do
    json.extract! topic, :id, :title, :image_url
  end
end
