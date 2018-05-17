weeks = Week.all.pluck(:id)
days = %w(1 2 3 4 5 6-7)

weeks.each do |week|
  days.each do |day|
    Day.create(
      title: "Day #{day}",
      week_id: week
    )
  end
end
