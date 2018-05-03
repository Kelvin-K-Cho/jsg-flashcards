@suggestions.each do |suggestion|
  json.set! suggestion.id do
    json.extract! suggestion, :id, :comments
  end
end
