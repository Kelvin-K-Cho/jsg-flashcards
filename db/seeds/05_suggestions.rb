suggestions = %w(Add\ More\ Cards Fix\ Existing\ Cards)

suggestions.each do |suggestion|
  Suggestion.create(
    comments: suggestion
  )
end
