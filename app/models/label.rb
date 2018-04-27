# == Schema Information
#
# Table name: labels
#
#  id         :integer          not null, primary key
#  subject_id :integer          not null
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Label < ApplicationRecord

  validates :subject_id, :image_id, presence: true

  belongs_to :subject,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Subject

  belongs_to :image,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: :Image

end
