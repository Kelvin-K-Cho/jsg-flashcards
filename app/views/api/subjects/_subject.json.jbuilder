json.extract! subject, :id, :title, :image_url
json.topic_ids @subject.topics.pluck(:id)
