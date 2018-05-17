subjects = %w(Algorithms World\ Wide\ Web JavaScript Miscellaneous)

subjects.each do |subject|
  Subject.create(
    title: subject
  )
end
