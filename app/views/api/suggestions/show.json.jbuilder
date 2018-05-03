json.set! @suggestion.id do
  json.partial! "api/suggestions/suggestion", suggestion: @suggestion
end
