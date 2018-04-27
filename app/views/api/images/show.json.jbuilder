json.set! @image.id do
  json.partial! "api/images/image", image: @image
end
