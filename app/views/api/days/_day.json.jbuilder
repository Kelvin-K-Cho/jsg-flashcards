json.extract! day, :id, :title
json.topics day.topics do |topic|
    json.id topic.id
    json.title topic.title
end
