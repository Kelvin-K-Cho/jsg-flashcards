json.set! @subject.id do
  json.partial! "api/subjects/subject", subject: @subject
end
