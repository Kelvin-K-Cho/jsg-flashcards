@days.each do |day|
  json.set! day.id do
    json.extract! day, :id, :title
    json.topics day.topics do |topic|
        json.id topic.id
        json.title topic.title
        json.subject topic.subject.title
    end
  end
end
