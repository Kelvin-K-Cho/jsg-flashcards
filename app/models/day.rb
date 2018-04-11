# == Schema Information
#
# Table name: days
#
#  id         :integer          not null, primary key
#  title      :string
#  week_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Day < ApplicationRecord

  validates :week_id, presence: true

  belongs_to :week,
    primary_key: :id,
    foreign_key: :week_id,
    class_name: :Week

  has_many :dailies,
    primary_key: :id,
    foreign_key: :day_id,
    class_name: :Daily

  has_many :decks,
    through: :dailies,
    source: :deck
end
