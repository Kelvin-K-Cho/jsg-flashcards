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

  has_many :tags,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: :Tag

  has_many :topics,
    through: :tags,
    source: :topic

end
