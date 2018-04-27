json.set! @daily.id do
  json.partial! "api/dailies/daily", daily: @daily
end
