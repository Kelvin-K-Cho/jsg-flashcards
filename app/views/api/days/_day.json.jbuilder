json.extract! day, :id, :title
json.topics @day.topics.pluck(:id)
