json.set! @label.id do
  json.partial! "api/labels/label", label: @label
end
