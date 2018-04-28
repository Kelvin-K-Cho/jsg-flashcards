algorithms_label1 = Label.create(
  subject_id: algorithms.id,
  image_id: algorithms_image1.id
)

world_wide_web_label1 = Label.create(
  subject_id: world_wide_web.id,
  image_id: world_wide_web_image1.id
)

javascript_label1 = Label.create(
  subject_id: javascript.id,
  image_id: javascript_image1.id
)

miscellaneous_label1 = Label.create(
  subject_id: miscellaneous.id,
  image_id: miscellaneous_image1.id
)

algorithms_label1.save!
world_wide_web_label1.save!
javascript_label1.save!
miscellaneous_label1.save!
