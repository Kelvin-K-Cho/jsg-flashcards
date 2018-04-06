# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  deck_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ApplicationRecord
  validates :question, presence: true, uniqueness: true
  validates :deck_id, presence: true

  belongs_to :deck,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Deck,
    inverse_of: :cards

  has_many :answers,
    primary_key: :id,
    foreign_key: :card_id,
    class_name: :Side,
    inverse_of: :question

end
