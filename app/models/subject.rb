# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ApplicationRecord

  validates :title, presence: true, uniqueness: true

  has_many :topics,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Topic

  has_many :labels,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Label

  has_many :images,
    through: :labels,
    source: :image

end
