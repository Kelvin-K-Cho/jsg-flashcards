@subjects.each do |subject|
  json.set! subject.id do
    json.extract! subject, :id, :title, :image_url
  end
end
