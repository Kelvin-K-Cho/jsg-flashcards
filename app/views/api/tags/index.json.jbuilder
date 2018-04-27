@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag, :id, :topic_id, :image_id
  end
end
