# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord

  validates title, presence: true, unique: true

  has_many :decks,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Deck
    
end
