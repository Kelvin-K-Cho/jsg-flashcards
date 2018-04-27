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

  has_many :tags,
    through: :topics,
    source: :tags

  has_many :images,
    through: :tags,
    source: :image

end
