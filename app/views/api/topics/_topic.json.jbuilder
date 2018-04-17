json.extract! topic, :id, :title, :image_url
json.subject_ids @topic.subjects.pluck(:id)
