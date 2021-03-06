# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  url        :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord

  validates :url, presence: true

  has_many :labels,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: :Label

  has_many :subjects,
    through: :labels,
    source: :subject

end
