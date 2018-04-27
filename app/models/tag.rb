# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  topic_id   :integer          not null
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord

  validates :topic_id, :image_id, presence: true

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Topic

  belongs_to :image,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: :Image
    
end
