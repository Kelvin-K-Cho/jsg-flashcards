@subjects.each do |subject|
  json.set! subject.id do
    json.extract! subject, :id, :title
    json.images subject.images.pluck(:url)
  end
end
