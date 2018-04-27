@labels.each do |label|
  json.set! label.id do
    json.extract! label, :id, :subject_id, :image_id
  end
end
