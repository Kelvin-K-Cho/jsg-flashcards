json.extract! subject, :id, :title
json.topic_ids @subject.topics.pluck(:id)
