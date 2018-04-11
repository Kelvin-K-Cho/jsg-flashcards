# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :cards,
    primary_key: :id,
    foreign_key: :card_id,
    class_name: :Card,
    inverse_of: :deck

  has_many :details,
    through: :cards,
    source: :answers

  has_many :topics,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Topic

  has_many :days,
    through: :topics,
    source: :day

  has_many :weeks,
    through: :days,
    source: :week

end
