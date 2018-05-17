json.set! @day.id do
  json.partial! "api/days/day", day: @day
end
