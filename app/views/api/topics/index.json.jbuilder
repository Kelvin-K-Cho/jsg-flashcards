@topics.each do |topic|
  json.set! topic.id do
    json.extract! topic, :id, :title, :notes
    json.subject topic.subject.title
  end
end
