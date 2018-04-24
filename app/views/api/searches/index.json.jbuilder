json.subjects_found do
  @subjects.each do |subject|
    json.set! subject.id do
      json.extract! subject, :id, :title, :notes, :image_url
    end
  end
end
