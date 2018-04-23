json.set! @week.id do
  json.partial! "api/weeks/week", week: @week
end
