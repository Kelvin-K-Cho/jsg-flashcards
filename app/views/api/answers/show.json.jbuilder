json.set! @answer.id do
  json.partial! "api/answers/answer", answer: @answer
end
