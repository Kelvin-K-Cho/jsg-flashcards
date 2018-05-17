@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :sentence, :correct
  end
end
