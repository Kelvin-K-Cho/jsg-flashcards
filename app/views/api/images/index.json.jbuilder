@images.each do |image|
  json.set! image.id do
    json.extract! image, :id, :url
  end
end
